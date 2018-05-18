<template lang="pug">
  div.cs-timer__scramble
    h1.cs-timer__scramble-details(v-html='formula')
    h2.cs-timer__count-down {{ timer + 's count down' }}
</template>

<script>
export default {
  data () {
    return {
      timer: 30,
      numbers: ['R', 'L', 'U', 'D', 'F', 'B', 'R&#x27;', 'L&#x27;', 'U&#x27;', 'D&#x27;', 'F&#x27;', 'B&#x27;', 'R2', 'L2', 'U2', 'D2', 'F2', 'B2'],
      formula: 'making formula...'
    }
  },
  mounted () {
    this.startCountDown()
    this.makeFormula()
  },
  methods: {
    changeStatus () {
      this.$emit('timeout', { timeout: true })
    },
    startCountDown () {
      this.timer = 30
      this.timeMachine = setInterval(() => {
        this.timer--
        if (this.timer === 0) {
          this.$emit('timeout', { timeout: true })
          console.log(' timeout emit')
          clearInterval(this.timeMachine)
          this.timer = 'start'
        }
      }, 1000)
    },
    makeFormula () {
      let formula = []
      for (let i = 0; i < 25; i++) {
        do {
          var n = Math.floor((Math.random() * this.numbers.length))
          formula[i] = this.numbers[n]
        } while (i > 0 && formula[i].split('')[0] === formula[i - 1].split('')[0])
      }
      console.log(formula)
      this.formula = formula.join(' ')
    }
  }
}
</script>

<style lang="scss">
.cs-timer__scramble-details {
  text-align: left;
  padding: 20px;
  line-height: 1.5;
  margin-top: 0;
}
</style>
