<template lang="pug">
  div.rb-act.cs-timer(@touchmove.prevent='')
    div.rb-act__bg(style="background: url('static/img/practice-bg.png') center no-repeat; background-size: 100% auto; background-position-y: 0;")

    div.cs-timer__wrapper
      div.container
        //- page 1
        div.cs-timer__view(v-show='views === 0')
          h1.cs-timer__view-title 欢迎挑战&nbsp;&nbsp;&nbsp;{{ modeName }}
          div.cs-timer__view-subtitle
            div.line.line-1
            div.cs-timer__view-subtitle-text 挑战步骤
            div.line.line-2
          div.cs-timer__view-content.content-help.clearfix
            div.help-step
              img(src='static/img/speed-step-1.png')
              p 准备一只还原的三阶魔方
            div.help-step
              img(src='static/img/speed-step-2.png')
              p 获得随机打乱步骤
              p 30秒内进行打乱
            div.help-step
              img(src='static/img/speed-step-3.png')
              p 最快速度还原魔方
          div.cs-timer__view-btn-row
            //- button.app-button(@click='changeViews(1)') DETAILS
            button.app-button(@click='changeViews(4)', @keydown.32='changeViews(4)') 开始挑战

        //- page 2
        //- div.cs-timer__view(v-show='views === 1')
        //-   div.cs-timer__intro
        //-     p This game requires you to solve a 3x3 cube the fastest you can
        //-   button.btn.primary(@click='changeViews(2)') NEXT

        //- page 3
        //- div.cs-timer__view(v-show='views === 2')
        //-   div.cs-timer__steps
        //-     h1 Take the following steps...
        //-     p Step1:Prepare an unscrambled 3x3
        //-     p Step2:</br>Present the scramble sequence</br> Scramble the cube accordingly in 30s
        //-     p step3:Solve ths cube
        //-   button.btn.primary(@click='changeViews(3)') NEXT

        //- page 4
        //- div.cs-timer__view(v-show='views === 3')
        //-   div.cs-timer__text
        //-     h1.prompt-position Position your cube this way
        //-   button.btn.primary(@click='changeViews(4)') I'm ready

        //- page 5
        div.cs-timer__view(v-if='views === 4')
          h1.cs-timer__view-title 双手速拧
          div.cs-timer__view-subtitle
            div.line.line-1
            div.cs-timer__view-subtitle-text 打乱公式
            div.line.line-2
          div.cs-timer__view-content
            ScrambleCard(@timeout='countDownOver')
          div.cs-timer__view-btn-row
            button.app-button(@click='changeStatus') 打乱完毕

        //- page 6
        div.cs-timer__view(v-if='views === 5')
          h1.cs-timer__view-title 双手速拧
          div.cs-timer__view-subtitle
            div.line.line-1
            div.cs-timer__view-subtitle-text 倒计时
            div.line.line-2
          div.cs-timer__view-content
            CountDown3s(:status='status', @timeout='countDownOver')
          div.cs-timer__view-btn-row
            button.app-button(@click='changeStatus') SKIP

        //- page 7
        div.cs-timer__view(v-show='views === 6', @click.prevent.stop='changeStatus')
          h1.cs-timer__view-title 双手速拧
          div.cs-timer__view-subtitle
            div.line.line-1
            div.cs-timer__view-subtitle-text {{ status === 3 ? '你的成绩' : '挑战时间' }}
            div.line.line-2
          div.cs-timer__view-content
            StopWatch(:status='status' @listenTime='showTime' )
          div.cs-timer__view-btn-row(v-if='status === 3')
            button.app-button(@click='playAgain') 再来一次
            router-link.app-button(to='/practice') 其它挑战
            //- button.app-button(v-if='status === 4', @click='changeStatus') NEXT
          //- button.cs-timer__controler.btn.btn-primary(@click='changeStatus') {{ btnText }}

        //- page 8
        div.cs-timer__view(v-show='views === 7')
          div.cs-timer__share
            h1 Your solve time is {{result}}
            p (pop up sign/animation) </br> Congratulations for winning </br>xx badge
          button.btn.primary(v-if='status === 5', @click='playAgain') AGAIN
          router-link(to='/practice')
            button.btn.primary Try other modes
</template>

<script>
import StopWatch from '@/components/StopWatch'
import CountDown3s from '@/components/CountDown3s'
import ScrambleCard from '@/components/ScrambleCard'

export default {
  data () {
    return {
      /**
       * @argument status: 0 初始化
       * @argument status: 1 倒计时中
       * @argument status: 2 计时中
       * @argument status: 3 游戏暂停
       */
      status: 0,
      /**
       * @argument views: 0 欢迎界面
       * @argument views: 1 游戏介绍1
       * @argument views: 2 游戏介绍2
       * @argument views: 3 准备界面
       * @argument views: 4 30s准备打乱倒计时
       * @argument views: 5 3秒游戏正式开始倒计时
       * @argument views: 6 计时开始
       * @argument views: 7 成绩分享页面
       */
      views: 0,
      gameover: false,
      result: '00:000'
    }
  },
  components: {
    StopWatch,
    CountDown3s,
    ScrambleCard
  },
  mounted () {
    document.onkeydown = this.pcKeyDown
  },
  methods: {
    countDownOver (evt) {
      // console.log(evt.timeout)
      if (evt.timeout) {
        this.changeStatus()
      }
    },
    showTime (e) {
      this.result = e
    },
    changeStatus () {
      console.log('change status', this.status + 1)
      if (this.gameover) {
        return false
      }
      if (this.status === 3) {
        this.status = 0
      } else {
        this.status++
      }
      switch (this.status) {
        case 0:
          this.changeViews(4)
          break
        case 1:
          this.changeViews(5)
          break
        case 2:
          this.changeViews(6)
          break
        case 3:
          this.gameover = true
          // this.changeViews(7)
          // this.status++
          break
        // case 5:

        //   this.gameover = true
        //   this.changeViews(7)
        //   break
        default:
          this.changeViews(3)
          break
      }
    },
    changeViews (index) {
      this.views = index
    },
    playAgain () {
      this.gameover = false
      // this.status = 4
      // this.changeStatus()
    },
    pcKeyDown (evt) {
      if (evt.keyCode === 32) {
        if (this.views === 0) {
          this.changeViews(4)
          return false
        // } else if (this.views === 3) {
        //   this.changeViews(4)
        //   return false
        } else if (this.status === 3) {
          this.playAgain()
          return false
        }
        this.changeStatus()
      }
    }
  },
  computed: {
    modeName () {
      switch (this.$route.query.type) {
        case 'single':
          return '单手速拧'
        default:
          return '双手速拧'
      }
    },
    btnText () {
      switch (this.status) {
        case 0:
          return '开始计时'
        case 1:
          return '结束计时'
        case 2:
          return '重置时间'
        case 3:
          return '再来一次'
        default:
          return '状态错误'
      }
    }
  }
}
</script>

<style lang="scss">
@import '../style/rb-act';

.cs-timer {
  position: relative;
  min-height: 1000px;
  &__wrapper {
    position: absolute;
    top: 330px;
    width: 100%;
    height: 600px;
  }
  &__view {
    width: 100%;
    background-color: #fff;
    height: 600px;
    padding: 50px 0;
    position: relative;

    &-title {
      font-size: 36px;
      font-weight: bold;
      margin: 20px 0;
      text-align: center;
    }

    &-content {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      margin-top: 30px;
      text-align: center;
      padding: 0 200px;
      &.content-help {
        display: flex;
      }
      .help-step {
        flex: 1;
        img {
          height: 180px;
          width: auto;
          margin-bottom: 20px;
        }
      }
    }

    &-subtitle {
      text-align: center;
      &-text {
        display: inline-block;
        font-size: 16px;
        line-height: 1em;
        margin: 0 12px;
      }
      .line {
        width: 130px;
        height: 2px;
        display: inline-block;
        position: relative;
        top: -4px;
      }
      .line-1 {
        background: linear-gradient(to right, #fff, #000);
      }
      .line-2 {
        background: linear-gradient(to left, #fff, #000);
      }
    }

    &-btn-row {
      position: absolute;
      bottom: 50px;
      width: 100%;
      text-align: center;
      button,
      a {
        margin: 0 36px;
      }
    }

    &.view-stop-watch {
      height: 100%;
    }

    h2 {
      font-weight: normal;
    }
  }

  &__title {
    text-align: center;
    padding-top:45%;
    height:50%;
    span{
      color: #FFCC33;
    }
  }

  &__intro,
  &__steps,
  &__share {
    padding: 0 20px;
    font-size: 26px;
    height: 50%;
    padding-top: 45%;
  }
  &__share{
    padding-top: 25% !important; 
  }
  &__steps,
  &__share {
    padding-top: 5%;
    h1{
      font-size: 26px;
    }
    p{
      color:#fff;
      font-size: 22px;
      display: inline-block;
      background-color: #FFCC33;
      width:100%;
    }
  }
  &__text{
    height:50%;
  }
  .prompt-position {
    padding: 30px;
    font-size: 20px;
    position: absolute;
    width: 100%;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__scramble {
    height: 50%;
    &-details {
      margin-bottom: 100px;
    }
  }

  &__count-down {
    margin-bottom: 100px;
  }

  &__stop-watch {
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    height:50%;
    padding-top: 45%;
  }
  &__controler {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0!important;
  }
}
@media (max-width:992px){
  .app-button {
    font-size: 20px;
    min-width: 150px;
    margin: 0px;
  }
  .rb-act{
    &__bg{
      background: url('../../static/img/gameBg.png') center no-repeat !important;
      background-size: contain !important;
      height: 208px !important;
    }
  }
  .site-content{
    height:850px;
  }
  .cs-timer {
    &__wrapper {
      top: 150px;
    }
    &__view {
      padding: 30px 0;
      &-title{
        font-size: 28px;
        margin:10px 0;
      }
      &-subtitle{
        .line {
          width: 65px;
        }
        &-text {
          font-size: 16px;
        }
      }
      &-content {
        padding: 0;
        &.content-help {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .help-step {
          img {
            height: 130px;
            margin-bottom:10px;
          }
        }
      }
      &-btn-row {
        bottom: 0px;
        display: flex;
        justify-content:space-around;
        button,
        a {
          margin: 0;
        }
      }
      &-content{
        .count-down__timer{
          font-size: 100px;
        }
      }
    }
    &__scramble {
      // height: 50%;
      &-details {
        font-size: 16px;
        margin:0 48px;
        margin-bottom: 50px;
      }
    }
  }
}
</style>
