<template lang="pug">
  div.rb-act.call-friend
    div.rb-act__bg(style="background: url('static/img/call-friend.png') center no-repeat; background-size: 100% auto; background-position-y: 0;")
      div.rb-act__content
        div.rb-act__title
          img(src='static/img/call-friend-text.png')
    div.rb-act__views-wrapper
      div.container
        div.rb-act__views
          p 集齐5种竞速徽章，可兑换千元GAN战神装备包
          p 好友之间，可无限次互换徽章。
          p 每天第一次送出时，系统会自动奖励一枚徽章。
          p 进入“我的奖品”，查看并分享徽章
          h2.mobileH2 集齐5种竞速徽章，
          h2.mobileH2 可兑换千元GAN战神装备包
          h2.mobileH2 好友之间，可无限次互换徽章。
          h2.mobileH2 每天第一次送出时，
          h2.mobileH2 系统会自动奖励一枚徽章。
          h2.mobileH2 进入“我的奖品”，
          h2.mobileH2 查看并分享徽章
          div.rb-act__views-btn-row
            router-link.app-button(to='/myprize') 我的奖品
            router-link.app-button(to='/practice') 更多活动

</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../style/rb-act';
@media (max-width:992px){
  .app-button {
    font-size: 20px;
    min-width: 150px;
  }
  .rb-act{
    &__bg{
      background: url('../../static/img/call-friend-mobile.png') center no-repeat !important;
      background-size: 100% !important;
      padding: 0 0 173px;
      position: relative;
    }
    &__content{
      position:absolute;
      width:100%;
      padding-top:50px;
    }
    &__title{
      img{
        height: 40px;
      }
    }
    &__views {
      &-wrapper {
        top: -25px;
      }
      &-btn-row {
        display: flex;
        justify-content: space-around;
        bottom:20px;
        button,
        a {
          margin: 0;
        }
      }
    }
    p {
      display: none;
    }
    .mobileH2 {
      margin:0;
      display: block;
      font-size: 15px;
      text-align: center;
      margin-bottom: 20px;
    }
  }
}
</style>
