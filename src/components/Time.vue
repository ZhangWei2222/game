<template lang="pug">
  div.time(@click='stop')
    div.text {{result1}}:{{result2}}
</template>

<script>
export default {
  data () {
    return {
        result1:'',
        result2:'',
        startTime:'',
        counting:false
    }
  },
  mounted () {
    this.result = 0
    this.startTime = Date.now()
    this.counting = true
    this.countDown()
  },
  methods:{
    countDown:function(){
      var count = Date.now() - this.startTime
      var second = Math.floor(count / 1000)
      var micro_second = Math.floor(count%1000)
      this.result1 = second<10?'0'+second:second
      this.result2 = micro_second<10?'00'+micro_second:(micro_second<100?'0'+micro_second:micro_second)
    //   console.log(second)
    //   console.log(micro_second)
      this.result = count
      if(this.counting){
          window.requestAnimationFrame(this.countDown)
      }

    },
    stop:function(){
        this.counting = false
    }
  },

}
</script>

<style lang="scss">
@font-face {  
    font-family: 'lcd';   
    src:url('../fonts/lcd.ttf');
}
.time{
    font-family: 'lcd';
    width:100%;
    height:100%;
    position:absolute;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
</style>
