<template lang="pug">
  div.clone-mode
    div.clone-mode__view(v-if='views === 0')
      div.clone-mode__welcome
        h1.title 克隆模式
        p 游戏规则
        button.btn.primary(@click='changeStatus') 开始游戏
    div.clone-mode__count-down(v-if='views === 1')
      CountDown3s(@timeout='countDownOver', :status='status')
    div.clone-mode__view(v-show='views === 2', v-if='views === 1 || views === 2', @touchmove.prevent='')
      CubeModule
      div.clone-mode__stopwatch
        //- StopWatch(:status='status')
        div.count-down
          div.count-down__timer {{ showMs ? timing : timerHandled  }}
      button.clone-mode__gameover.btn.primary(@click.prevent.stop='changeStatus', v-if='!gameover') FINISHED
      button.clone-mode__gameover.btn.primary(@click='playAgain', v-if='gameover') AGAIN
</template>

<script>
import CubeModule from '@/components/CubeModule'
import CountDown3s from '@/components/CountDown3s'
// import StopWatch from '@/components/StopWatch'

export default {
  data () {
    return {
      /**
       * @argument views: 1 开始界面
       * @argument views: 2 计时中
       * @argument views: 3 游戏暂停
       */
      views: 0,
      /**
       * @argument status: 0 初始化
       * @argument status: 1 倒计时中
       * @argument status: 2 计时中
       * @argument status: 3 游戏暂停
       */
      status: 0,
      gameover: false,
      timer: 0,
      timerHandled: '00:000',
      startTime: '',
      timing: '00',
      showMs: true,
      interVal: ''
    }
  },
  components: {
    CubeModule,
    CountDown3s,
    // StopWatch
  },
  mounted () {
    document.onkeydown = this.pcKeyDown
    this.initCount()
  },
  methods: {
    countDownOver (evt) {
      if (evt.timeout) {
        this.changeStatus()
      }
    },
    changeStatus () {
      if (this.gameover) {
        return false
      }
      if (this.status === 3) {
        this.status = 0
        this.initCount()
      } else {
        this.status++
      }
      console.log(this.status)
      switch (this.status) {
        case 0:
          this.changeViews(0)
          break
        case 1:
          this.changeViews(1)
          break
        case 2:
          this.changeViews(2)
          break
        case 3:
          this.gameover = true
          break
      }
      if(this.status == 2){
        this.startCount()
      }
    },
    changeViews (index) {
      console.log('change view', index)
      this.views = index
    },
    playAgain () {
      this.gameover = false
      this.changeStatus()
    },
    pcKeyDown (evt) {
      if (evt.keyCode === 32) {
        if (this.status === 3) {
          this.playAgain()
          return false
        }
        this.changeStatus()
      }
    },
    initCount () {
      this.startTime = 0
      this.timer = 0
      this.timerHandled = '00:000'
      this.timing = '00'
      this.showMs = true
    },
    startCount () {
      this.startTime = Date.now()
      this.countAction()
    },
    countAction () {
      let timeNow = Date.now()
      this.timer = timeNow - this.startTime
      this.handleTimer(this.timer)
      if (this.status === 2) {
        // window.requestAnimationFrame(this.countAction)
        this.interVal = setTimeout(() => {
          this.countAction()
        },16)
      } else {
        console.log(this.status)
        // this.timing = this.timerHandled
        this.showMs = false
        this.$emit('listenTime', this.timerHandled)
      }
    },
    handleTimer (timer) {
      let timerArray = timer.toString().split('')
      switch (timerArray.length) {
        case 1:
          this.timerHandled = '00:0' + timerArray.join('')
          this.timing = '00'
          break
        case 2:
          this.timerHandled = '00:0' + timerArray.join('')
          this.timing = '00'
          break
        case 3:
          this.timerHandled = '00:' + timerArray.join('')
          this.timing = '00'
          break
        case 4:
          this.timerHandled = '0' + timerArray[0] + ':' + timerArray[1] + timerArray[2] + timerArray[3]
          this.timing = '0' + timerArray[0]
          break
        case 6:
          this.timerHandled = timerArray[0] + timerArray[1] + timerArray[2] + ':' + timerArray[3] + timerArray[4] + timerArray[5]
          this.timing = timerArray[0] + timerArray[1] + timerArray[2]
          break
        default:
          this.timerHandled = timerArray[0] + timerArray[1] + ':' + timerArray[2] + timerArray[3] + timerArray[4]
          this.timing = timerArray[0] + timerArray[1]
          break
      }
    },
  // watch: {
  //   status: function (val, oldVal) {
  //     if (val === 2) {
  //       this.startCount()
  //     } else if (val === 0) {
  //       this.initCount()
  //     }
  //   }
  // }
  }
}
</script>

<style lang="scss">
.clone-mode {
  height: 100%;
  button {
    display: inline-block;
    margin: 0 15px;
    background-color: #eee;
  }
  &__view {
    height: 100%;
  }
  &__welcome {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    button {
      margin-top: 30px;
    }
  }
  &__stopwatch {
    position: absolute;
    top: 0;
    width: 100%;
    max-width: 480px;
    text-align: center;
  }
  &__gameover {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
@font-face {
    font-family: 'lcd';
    src:url('../fonts/lcd.ttf');
  }
  .count-down {
    &__timer {
      font-family: 'lcd';
      font-size: 80px;
      color: green;
      user-select: none;
    }
  }

@media (max-width:992px){
  .site-content{
    height:600px;
  }
  .clone-mode {
    &__stopwatch {
      top:56px;
    }
  }
}
</style>
