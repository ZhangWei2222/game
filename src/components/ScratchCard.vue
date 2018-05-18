<template lang="pug">
  div.scratch-card
    div.scratch-card__wrapper
      canvas#drawingBoard(
        ref='drawingBoard',
        @touchstart.prevent='handleTouchStart',
        @touchmove.prevent='handleTouchMove',
        @touchend.prevent='handleTouchEnd'
      )
      div.scratch-card__text 徽章1
    div.progress-promote {{ '刮卡进度: ' + progress + '%' }}
    div.scratch-card__back(v-if='finished')
      router-link(to='/') 返回首页
</template>

<script>
// 手指的触摸半径
// const TOUCH_RADIUS = 10

export default {
  data () {
    return {
      mousedown: false,
      offsetX: '',
      offsetY: '',
      width: '',
      height: '',
      progress: '0',
      finished: false
    }
  },
  mounted () {
    this.initDrawingBoard()
  },
  methods: {
    handleTouchStart () {
      this.mousedown = true
    },
    handleTouchMove (evt) {
      const canvas = this.$refs.drawingBoard
      const context = canvas.getContext('2d')
      if (this.mousedown) {
        if (evt.changedTouches) {
          evt = evt.changedTouches[evt.changedTouches.length - 1]
        }
        let x = (evt.clientX + document.body.scrollLeft || evt.pageX) - this.offsetX || 0
        let y = (evt.clientY + document.body.scrollTop || evt.pageY) - this.offsetY || 0
        context.beginPath()
        context.arc(x, y, 10, 0, Math.PI * 2)
        context.fill()
      }
    },
    handleTouchEnd () {
      if (this.finished) {
        return false
      }
      const canvas = this.$refs.drawingBoard
      const context = canvas.getContext('2d')
      this.mousedown = false
      let num = 0
      let datas = context.getImageData(50, 25, this.width - 110, this.height - 50)
      for (let i = 0; i < datas.data.length; i++) {
        if (datas.data[i] === 0) {
          num++
        }
      }
      this.progress = parseInt(num * 100 / datas.data.length)
      if (num >= datas.data.length * 0.75) {
        // 达到面积时执行内容
        this.$confirm('恭喜你，获得一个<span style="color: #67c23a;">徽章1</span>', '提示', {
          confirmButtonText: '确定',
          type: 'success',
          showCancelButton: false,
          dangerouslyUseHTMLString: true
        })
        this.finished = true
      }
    },
    getContext () {
      const canvas = this.$refs.drawingBoard
      const context = canvas.getContext('2d')
      return context
    },
    initDrawingBoard () {
      const canvas = this.$refs.drawingBoard
      const context = canvas.getContext('2d')
      const w = canvas.parentNode.offsetWidth
      const h = canvas.parentNode.offsetHeight

      // 画板尺寸
      canvas.width = w
      canvas.height = h

      // 画板背景
      context.fillStyle = '#aaa'
      context.fillRect(0, 0, w, h)

      // 外框
      context.strokeStyle = '#ddd'
      context.lineWidth = 4
      context.strokeRect(0, 0, w, h)

      // 脸
      context.strokeStyle = '#b3b3b3'
      context.fillStyle = '#b3b3b3'
      context.lineWidth = 4
      context.beginPath()
      context.arc(w / 2, h / 2, h / 2 - 30, 0, Math.PI * 2, true)
      context.stroke()
      context.closePath()

      // 嘴巴
      context.beginPath()
      context.arc(w / 2, h / 2 + 5, h / 2 - 50, 0, Math.PI, false)
      context.fill()
      context.closePath()

      // 左眼
      context.beginPath()
      context.arc(w / 2 - 15, h / 2 - 15, 5, 0, Math.PI * 2, true)
      context.fill()
      context.closePath()

      // 右眼
      context.beginPath()
      context.arc(w / 2 + 15, h / 2 - 15, 5, 0, Math.PI * 2, true)
      context.fill()
      context.closePath()

      // 字
      context.fillStyle = '#828282'
      context.font = '700 24px microsoft yahei'
      context.textAlign = 'center'
      context.fillText('刮我中大奖', w / 2, (h + 20) / 2)
      context.globalCompositeOperation = 'destination-out'

      // 传参
      this.offsetX = canvas.parentNode.offsetLeft
      this.offsetY = canvas.parentNode.offsetTop
      this.mousedown = false
      this.width = w
      this.height = h
    }
  },
  computed: {
    isMobile () {
      return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())
    }
  }
}
</script>

<style lang="scss">
.scratch-card {
  &__wrapper {
    position: relative;
    width: 300px;
    height: 140px;
  }
  #drawingBoard {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  &__text {
    height: 140px;
    line-height: 140px;
    text-align: center;
    font-size: 30px;
    border: solid 4px #67c23a;
  }
  &__back {
    display: block;
    margin-top: 30px;
  }
}
.progress-promote {
  margin-top: 30px;
}
</style>
