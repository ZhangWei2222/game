<template lang="pug">
  div.count-down {{ timer }}
</template>

<script>
export default {
  data () {
    return {
      timer: 3,
      timeMachine: ''
    }
  },
  props: {
    status: {
      required: true,
      type: Number
    }
  },
  mounted () {
    console.log('开始倒计时')
    this.startCountDown()
  },
  methods: {
    startCountDown () {
      this.timer = 3
      this.timeMachine = setInterval(() => {
        this.timer--
        if (this.timer === 0) {
          this.$emit('timeout', { timeout: true })
          console.log(' timeout emit')
          clearInterval(this.timeMachine)
          this.timer = 'start'
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
.count-down {
  font-size: 280px;
  // display: inline;
  text-align: center;
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
}
</style>
