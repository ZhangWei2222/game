<template lang="pug">
  div.formularBox
    h1 打乱公式
    div.text {{formula}}
    div.text {{count}}
    h1 您有30秒打乱魔方的时间
    router-link(to='/countdown')
      button(type='button',class='btn btn-success') 下一步
</template>

<script>
export default {
  data () {
    return {
      formula: [],
      count:'30',
      numbers:["R","L","U","D","F","B","R'","L'","U'","D'","F'","B'","R2","L2","U2","D2","F2","B2"],
      startTime:'',
      endTime:'',
      second:'',
      time:''
    }
  },
  mounted () {
    for(var i =0;i<12;i++){
        do{
            var n = Math.floor((Math.random()*this.numbers.length)); 
            // console.log(this.formula)
            this.formula[i] = this.numbers[n]
        }while(i>0&&this.formula[i]==this.formula[i-1])
    }
    
    this.startTime = Date.now()
    this.countDown()
  },
  methods:{
    countDown:function(){
      this.endTime = Date.now()
      this.time = this.endTime - this.startTime
      if (this.time<30000) {
        this.second = Math.floor(this.time/1000)
        this.count = 30 - this.second
         window.requestAnimationFrame(this.countDown)
      } else {
        this.$router.push({ name: 'count' })
      }
    }
  },

}
</script>

<style lang="scss">
.formularBox{
  width:100%;
  height:100%;
  position:absolute;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
</style>
