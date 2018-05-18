<template lang="pug">
  div.common-game
    h1 游戏说明
    router-link(to='/formula')
      button(type='button',class='btn btn-success') 开始游戏
</template>

<script>
export default {

}
</script>

<style lang="scss">
.common-game{
  width:100%;
  height:100%;
  position:absolute;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
</style>
