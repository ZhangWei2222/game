<template lang="pug">
  div.layout
    SiteHeader
    div.site-content
      router-view
    div.site-footer 
      div.footerBox
        div.languageBox
          span Elige un idioma
          router-link(to='/luckdraw') English
          router-link(to='/luckdraw') 中文
          router-link(to='/luckdraw') Español
        p Copyright © 2011 - 2018 GAN Cube Inc.
        h2 粤ICP备16068632号-1
</template>

<script>
import SiteHeader from '@/components/SiteHeader'

export default {
  components: {
    SiteHeader
  }
}
</script>

<style lang="scss">
.layout{
  overflow: hidden;
  .site-footer {
    background-color: #f7f8f9;
    width: 100%;
    .footerBox{
      text-align: center;
      .languageBox{
        color: #333;
        font-size: 12px;
        padding-top: 20px;
        a{
          color: #333;
          text-decoration: underline;
          margin-left: 10px;
        }
      }
      p{
        color: #333;
        font-size: 12px;
        margin: 10px;
      }
      h2{
        color: #9e9e9e;
        font-size: 12px;
        margin: 0;
        padding-bottom: 20px;
      }
    }
  }
}
</style>

