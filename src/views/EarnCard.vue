<template lang="pug">
  div.rb-act.call-friend
    div.rb-act__bg(style="background: url('static/img/earn-card.png') center no-repeat; background-size: 100% auto; background-position-y: 0;")
      div.rb-act__content
        div.rb-act__title
          img(src='static/img/earn-card-text.png')
        div.rb-act__text 
          p 参与红牛魔方世锦赛线上选拔，完成挑战，有机会赢取波士顿观战之旅。排位前三，</br>更可获得波士顿决赛外卡，角逐全球冠军，赢取 $30000 美元大奖。
        div.rb-act__mobile(style='display:none')
          p 挑战时间： 6月1日-6月30日
          h1 敬请期待
    div.rb-act__views-wrapper
      div.container
        div.rb-act__views
          h1 敬请期待

</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../style/rb-act';
@media (max-width:992px){
  .rb-act{
    &__bg{
      background: url('../../static/img/earn-card-mobile.png') center no-repeat !important;
      background-size: cover !important;
      padding: 384px 0 240px !important;
      position: relative !important;
    }
    &__content{
      position:absolute;
      top: 39px;
    }
    &__title{
      img{
        height: 90px;
      }
    }
    &__text{
      p{
        font-size: 13px;
        margin-top: 20px;
        padding: 0 63px ;
      }
    }
    &__mobile{
      display: block !important;
      color:#fff;
      text-align: center;
      margin-top:210px;
      p{
        font-size: 13px;
      }
      h1{
        font-size: 30px;
        margin-bottom: 30px;
      }
    }
  }
  .rb-act__views-wrapper{
    display: none;
  }
}

</style>
