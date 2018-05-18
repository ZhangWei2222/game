<template lang="pug">
  div.count-down
    div.count-down__timer {{ showMs ? timerHandled : timing }}
</template>

<script>
export default {
  data () {
    return {
      timer: 0,
      timerHandled: '00:000',
      startTime: '',
      timing: '00',
      showMs: true
    }
  },
  props: {
    status: {
      required: true,
      type: Number
    }
  },
  mounted () {
    if (!this.$route.query.type) {
      this.showMs = false
    } else {
      this.showMs = true
    }
    this.initCount()
  },
  methods: {
    initCount () {
      this.startTime = 0
      this.timer = 0
      this.timerHandled = '00:000'
      this.timing = '00'
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
        window.requestAnimationFrame(this.countAction)
      } else {
        console.log(this.status)
        this.timing = this.timerHandled
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
    }
  },
  watch: {
    status: function (val, oldVal) {
      if (val === 2) {
        this.startCount()
      } else if (val === 0) {
        this.initCount()
      }
    }
  }
}
</script>

<style lang="scss">

  @font-face {
    font-family: 'lcd';
    src:url('../fonts/lcd.ttf');
  }
  .count-down {
    &__timer {
      font-family: 'lcd';
      font-size: 120px;
      color: green;
      user-select: none;
    }
  }
</style>
