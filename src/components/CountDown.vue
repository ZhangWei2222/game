<template lang="pug">
  div.countdown
    div.text {{count}}
    router-link(to='/time')
      button(type='button',class='btn btn-success') 下一步
</template>

<script>
export default {
  data () {
    return {
      count:'3',
      startTime:'',
      endTime:'',
      second:'',
      time:''
    }
  },
  mounted () {
    this.startTime = Date.now()
    // console.log(this.startTime)
    this.countDown()
  },
  methods:{
    countDown:function(){
      this.endTime = Date.now()
    //   console.log(this.endTime)
      this.time = this.endTime - this.startTime
      if(this.time<3000){
        this.second = Math.floor(this.time/1000)
        this.count = 3 - this.second
        // console.log(this.second)
         window.requestAnimationFrame(this.countDown)
      } else {
          this.$router.push({ name: 'Time' })
      }
    }
  },

}
</script>

<style lang="scss">
.countdown{
  width:100%;
  height:100%;
  position:absolute;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
</style>
