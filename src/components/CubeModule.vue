<template lang="pug">
  div.cube-module
    #scene.scene(@touchstart='touchStart($event)', @mousedown='mousedown($event)')
      #pivot.pivot.centered(:style='{ transform: pivotMove }')
        #cube.cube
          .piece(v-for='piece in pieces', :style='{ transform: piece.initTransform }' :id="'piece' + piece.id")
            div(v-for='(face, index) in faces', :class="'element ' + face")
              div.sticker(v-if='stickerShow(index, piece)', :class="stickerClass(index, piece)")
</template>

<script>
export default {
  data () {
    return {
      faces: [
        'left',
        'right',
        'top',
        'bottom',
        'back',
        'front'
      ],
      colors: [
        'blue',
        'green',
        'white',
        'yellow',
        'red',
        'orange'
      ],
      pivotTransform: {
        rotateX: -35,
        rotateY: -135
      },
      codes: [],
      scramblingCode: [],
      pieces: []
    }
  },
  mounted () {
    this.assembleCube()
    this.makeCodes()
  },
  methods: {
    /**
     * 初始化打乱公式
     */
    makeCodes () {
      this.codes = []
      for (let i = 0; i < 6; i++) {
        let codeT = {
          face: i,
          cw: true
        }
        let codeF = {
          face: i,
          cw: false
        }
        this.codes = this.codes.concat(codeT, codeF)
      }
      console.log(this.codes)
      this.makeFormula()
    },

    /**
     * 随机生成打乱公式
     */
    makeFormula () {
      let formula = []
      for (let i = 0; i < 25; i++) {
        do {
          var n = Math.floor((Math.random() * this.codes.length))
          formula[i] = this.codes[n]
        } while (i > 0 && formula[i].face === formula[i - 1])
      }
      console.log(formula)
      this.formula = formula
      this.runScramblingCode()
    },

    /**
     * piece: 方块的序号
     * 绑定每个色块 (piece > face) 的颜色
     */
    stickerClass (index, piece) {
      for (let i = 0; i < piece.sticker.length; i++) {
        if (index === piece.sticker[i].num) {
          return piece.sticker[i].color
        }
      }
      return false
    },

    /**
    * 根据方块序号得到每个面的序号
    */
    mx (i, j) {
      return ([2, 4, 3, 5][j % 4 | 0] + i % 2 * ((j | 0) % 4 * 2 + 3) + 2 * (i / 2 | 0)) % 6
    },

    /**
     * 根据方块序号 piece
     * 将每个方块移动到指定的位置
     */
    assembleCube () {
      // let x = this.mx(piece, piece % 18)
      // return {
      //   transform: 'rotateX(0deg)' + this.moveTo (piece % 6) + (piece > 5 ? this.moveTo(x) + (piece > 17? this.moveTo(this.mx(x, x+2)) : '') : '')
      // }
      for (var x, i = 0; i < 26; i++) {
        var piecesParams = {}
        piecesParams.sticker = []
        x = this.mx(i, i % 18)
        piecesParams.initTransform = 'rotateX(0deg) ' + this.moveTo(i % 6, i, piecesParams) + (i > 5 ? this.moveTo(x, i, piecesParams) + ' ' + (i > 17 ? this.moveTo(this.mx(x, x + 2), i, piecesParams) : '') : '')
        piecesParams.id = this.id
        this.id = 0
        this.pieces.push(piecesParams)
      }
    },

    /**
     * 根据参数返回X，Y或Z
     */
    getAxis (face) {
      return String.fromCharCode('X'.charCodeAt(0) + face / 2)
    },

    /**
     * 返回X Y或Z的其中一个参数
     */
    moveTo (face, i, piecesParams) {
      this.id = this.id + (1 << face)
      let stickerParams = {
        num: face,
        color: this.colors[face]
      }
      piecesParams.sticker.push(stickerParams)
      piecesParams.id = this.id
      return 'translate' + this.getAxis(face) + '(' + (face % 2 * 4 - 2) + 'em)'
    },

    /**
     * 渲染的face面
     */
    stickerShow (index, piece) {
      for (let i = 0; i < piece.sticker.length; i++) {
        if (index === piece.sticker[i].num) {
          return true
        }
      }
      return false
    },

    /**
     * 画面拖拽事件（移动端）
     */
    touchStart (md) {
      var scene = document.getElementById('scene')
      var rotateX = this.pivotTransform.rotateX
      var rotateY = this.pivotTransform.rotateY
      var touchMove = (event) => {
        event.preventDefault()
        event.stopPropagation()
        this.pivotTransform.rotateX = rotateX - (event.touches[0].pageY - md.touches[0].pageY) / 2
        this.pivotTransform.rotateY = rotateY + (event.touches[0].pageX - md.touches[0].pageX) / 2
      }
      var touchEnd = function () {
        scene.removeEventListener('touchmove', touchMove)
        document.removeEventListener('touchend', touchEnd)
        scene.addEventListener('touchstart', this.touchstart)
      }
      scene.addEventListener('touchmove', touchMove)
      document.addEventListener('touchend', touchEnd)
      scene.removeEventListener('touchstart', this.touchstart)
    },

    /**
     * 画面拖拽事件
     */
    mousedown (md) {
      var scene = document.getElementById('scene')
      var rotateX = this.pivotTransform.rotateX
      var rotateY = this.pivotTransform.rotateY
      var mousemove = (mm) => {
        this.pivotTransform.rotateX = rotateX - (mm.pageY - md.pageY) / 2
        this.pivotTransform.rotateY = rotateY + (mm.pageX - md.pageX) / 2
      }
      var mouseup = function () {
        scene.removeEventListener('mousemove', mousemove)
        document.removeEventListener('mouseup', mouseup)
        scene.addEventListener('mousedown', this.mousedown)
      }
      scene.addEventListener('mousemove', mousemove)
      document.addEventListener('mouseup', mouseup)
      scene.removeEventListener('mousedown', this.mousedown)
    },

    /**
     * 魔方复原步骤
     */
    animateRotation (face, cw, currentTime) {
      var k = 0.3 * (face % 2 * 2 - 1) * (2 * cw - 1)
      var pieces = document.getElementsByClassName('piece')
      var arr = Array(9).fill(pieces[face])
      var qubes = []
      for (let i = 0; i < arr.length; i++) {
        qubes.push(this.getPieceBy(face, i / 2, i % 2))
      }
      var rotatePieces = () => {
        var passed = Date.now() - currentTime
        passed = passed * 2.5 // 1.5决定旋转的速度
        var style = 'rotate' + this.getAxis(face) + '(' + k * passed * (passed < 300) + 'deg)'
        qubes.forEach(function (piece) {
          piece.style.transform = piece.style.transform.replace(/rotate.\(\S+\)/, style)
        })
        if (passed >= 300) {
          return this.swapPieces(face, 3 - 2 * cw)
        }
        requestAnimationFrame(rotatePieces)
      }
      rotatePieces()
    },

    /**
     * 获取旋转面方块
     */
    getPieceBy (face, index, corner) {
      return document.getElementById('piece' + ((1 << face) + (1 << this.mx(face, index)) + (1 << this.mx(face, index + 1)) * corner))
    },

    /**
     * 方块就位后 改变颜色
     */
    swapPieces (face, times) {
      for (var i = 0; i < 6 * times; i++) {
        var piece1 = this.getPieceBy(face, i / 2, i % 2)
        var piece2 = this.getPieceBy(face, i / 2 + 1, i % 2)
        for (var j = 0; j < 5; j++) {
          var sticker1 = piece1.children[j < 4 ? this.mx(face, j) : face].firstChild
          var sticker2 = piece2.children[j < 4 ? this.mx(face, j + 1) : face].firstChild
          var className = sticker1 ? sticker1.className : ''
          if (className) {
            sticker1.className = sticker2.className
            sticker2.className = className
          }
        }
      }
    },

    /**
     * 编程模式-打乱顺序
     */
    setScrambling (face, cw) {
      let step = {
        face: face,
        cw: cw
      }
      // this.scramblingCode.push(step)
      this.solveCode.push(step)
    },

    /**
     * 步骤映射
     */
    replaceCode (face, cw) {
      switch (face) {
        case 0:
          if (cw === false) {
            return 'B' + '’'
          } else {
            return 'B'
          }
        case 1:
          if (cw === false) {
            return 'F' + '’'
          } else {
            return 'F'
          }
        case 2:
          if (cw === false) {
            return 'U' + '’'
          } else {
            return 'U'
          }
        case 3:
          if (cw === false) {
            return 'D' + '’'
          } else {
            return 'D'
          }
        case 4:
          if (cw === false) {
            return 'R' + '’'
          } else {
            return 'R'
          }
        case 5:
          if (cw === false) {
            return 'L' + '’'
          } else {
            return 'L'
          }
        default:
          return '无法识别'
      }
    },

    /**
     * 运行打乱步骤
     */
    runScramblingCode () {
      for (let i = 0; i < this.formula.length; i++) {
        setTimeout(() => {
          this.animateRotation(this.formula[i].face, this.formula[i].cw, Date.now())
        }, 10 * (i + 1)) // 300
      }
    }

    /**
     * 运行还原步骤
     */
    // runSolveCode () {
    //   this.time = 3
    //   let interval1 = setInterval(() => {
    //     this.time--
    //     if (this.time === 0) {
    //       this.time = 'START'
    //       window.clearInterval(interval1)
    //     }
    //   }, 1000)
    //   this.gameRuning = true
    //   setTimeout(() => {
    //     document.addEventListener('click', () => this.solveStep())
    //     this.time = 0
    //     let intervalB = window.setInterval(() => {
    //       this.time++
    //       if (!this.gameRuning) {
    //         window.clearInterval(intervalB)
    //       }
    //     }, 1000)
    //   }, 3500)
    // }
  },
  computed: {
    pivotMove () {
      return 'rotateX(' + this.pivotTransform.rotateX + 'deg)' + 'rotateY(' + this.pivotTransform.rotateY + 'deg)'
    }
  }
}
</script>

<style lang="scss">
  $base-color: #0A0A0A;
  $ground-color: #2F2F31;
  $element-size: 2em;
  $sticker-size: 95%;
  $rounded: 10%;
  $mid-rounded: 50%;
  $cube-scale: 1.9;
  $faces: (left: (0, -90, 180), right: (0, 90, 90), back: (0, 180, -90), front: (0, 0, 0), bottom: (-90, 0, -90), top: (90, 0, 180));
  $colors: (blue: #001ca8, green: #006E16, white: #DDD, yellow: #E0AE00, orange: #FF5000, red: #DF0500);


  .cube-module {
    height: 100%;
  }

  .credits {
    width: 100%;
    top: 90%;
  }

  .text {
    text-align: center;
    font: { family: Helvetica; size: .8rem; }
    color: grey;
    pointer-events: none;
  }

  .centered {
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0;
    margin: auto;
  }

  .scene {
    width: 100%;
    height: 100%;
    perspective: 1200px;
    transform-style: preserve-3d;
    > .pivot {
      width: 0;
      height: 0;
      transition: .18s;
    }
    .anchor {
      width: $element-size;
      height: $element-size * 3;
    }
    div {
      position: absolute;
      transform-style: inherit;
      box-sizing: content-box;
    }
  }

  #piece4 > .element.top > .sticker {
    background-image: url('https://upload-images.jianshu.io/upload_images/5503852-1a449d501f0420bc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240');
    background-size: cover;
  }

  #piece1,
  #pieceNaN,
  #piece2,
  #piece4,
  #piece8,
  #piece16,
  #piece32 {
    & > .element {
      border: .05em solid $base-color { radius: $mid-rounded }
        > .sticker {
          border-radius: $mid-rounded;
          }
    }
  }

  .cube {
    font-size: $cube-scale * 100%;
    margin-left: -$element-size / 2;
    margin-top: -$element-size / 2;

    > .piece {
      width: $element-size - .1em;
      height: $element-size - .1em;
      > .element {
        width: 100%;
        height: 100%;
        background: $base-color;
        border: .05em solid $base-color { radius: $rounded }
        @each $face, $angles in $faces {
            &.#{$face} {
              transform: rotateX + '(' + nth($angles, 1) + 'deg)'
                        rotateY + '(' + nth($angles, 2) + 'deg)'
                        rotateZ + '(' + nth($angles, 3) + 'deg)' translateZ($element-size / 2);
            }
        }
        > .sticker {
          @extend .centered;
          transform: translateZ(2px);
          width: $sticker-size;
          height: $sticker-size;
          border-radius: $rounded;
          box-shadow: inset .05em .05em .2rem 0 rgba(white, .25),
                      inset -.05em -.05em .2rem 0 rgba(black, .25);
          @each $color, $value in $colors {
            &.#{$color} { background-color: $value }
          }
        }
      }
    }
  }
</style>
