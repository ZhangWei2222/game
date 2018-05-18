<template lang="pug">
  div.rb-act.practice
    div.rb-act__bg
      div.rb-act__content
        div.rb-act__title
          img(src='../assets/SitePractice/text-cn.png')
    div.rb-act__modules
      div.container
        div.row
          div.col-md-4
            div.rb-act__modules-item
              div.rb-act__modules-item-bg(style="background: url('static/img/speed.png') center no-repeat; background-size: 100% 100%;")
              div.rb-act__modules-intro
                h1.rb-act__modules-intro-title 双手速拧
              div.rb-act__modules-link-bg
                router-link.rb-act__modules-link.app-button(to='/practice/cstimer?type=speed') 进入挑战

            div.rb-act__modules-itemMobile(style='display:none')
              div.rb-act__modules-itemMobile-bg(style="background: url('static/img/speed-mobile.png') center no-repeat; background-size: 100% 100%;")
              div.rb-act__modules-mobile-intro
                h1.rb-act__modules-mobile-intro-title 双手速拧
                router-link.rb-act__modules-link-mobile.app-buttonMobile(to='/practice/cstimer?type=speed') 马上挑战
          div.col-md-4
            div.rb-act__modules-item
              div.rb-act__modules-item-bg(style="background: url('static/img/single.png') center no-repeat; background-size: 100% 100%;")
              div.rb-act__modules-intro
                h1.rb-act__modules-intro-title 单手速拧
              div.rb-act__modules-link-bg
                router-link.rb-act__modules-link.app-button(to='/practice/cstimer?type=single') 进入挑战

            div.rb-act__modules-itemMobile(style='display:none')
              div.rb-act__modules-itemMobile-bg(style="background: url('static/img/single-mobile.png') center no-repeat; background-size: 100% 100%;")
              div.rb-act__modules-mobile-intro
                h1.rb-act__modules-mobile-intro-title 单手速拧
                router-link.rb-act__modules-link-mobile.app-buttonMobile(to='/practice/cstimer?type=single') 马上挑战
          div.col-md-4
            div.rb-act__modules-item
              div.rb-act__modules-item-bg(style="background: url('static/img/clone.png') center no-repeat; background-size: 100% 100%;")
              div.rb-act__modules-intro
                h1.rb-act__modules-intro-title 克隆
              div.rb-act__modules-link-bg
                router-link.rb-act__modules-link.app-button(to='/practice/clonemode') 进入挑战

            div.rb-act__modules-itemMobile(style='display:none')
              div.rb-act__modules-itemMobile-bg(style="background: url('static/img/clone-mobile.png') center no-repeat; background-size: 100% 100%;")
              div.rb-act__modules-mobile-intro
                h1.rb-act__modules-mobile-intro-title 克隆
                router-link.rb-act__modules-link-mobile.app-buttonMobile(to='/practice/clonemode') 马上挑战
  //- div.practice
  //-   div.col-xs-6
  //-     router-link(to='/practice/cstimer?type=speed')
  //-       div.practice__item
  //-         span.practice__item-text 三速模式
  //-   div.col-xs-6
  //-     router-link(to='/practice/cstimer?type=single')
  //-       div.practice__item
  //-         span.practice__item-text 三单模式
  //-   div.col-xs-6
  //-     router-link(to='/practice/clonemode')
  //-       div.practice__item
  //-         span.practice__item-text 克隆模式
</template>

<style lang="scss">
@import '../style/rb-act';

.practice {
  &__item {
    color: #000;
    background-color: #44a8f2;
    overflow: hidden;
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 100%;
    height: 100%;
    position: relative;
    &:after {
      content: "";
      display: block;
      margin-top: 100%;
    }
    &-text {
      color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      text-align: center;
    }
  }
}
@media (max-width:992px){
  .rb-act{
    &__bg{
      background: url('../../static/img/kv-mobile.jpg') center no-repeat !important;
      background-size: contain !important;
      padding:50px 0px 67px 0px;
    }
    &__title {
      img {
        height: 40px;
      }
    }
    &__modules {
      top:0px;
      &-item {
        display: none;
      }
      &-itemMobile{
        display: flex !important;
        width: 100%;
        padding-bottom: 148.5px;
        height: 0;
        overflow: hidden;
        background-color: #ccc;
        position: relative;
        margin-bottom: 30px;
        &-bg {
          position: absolute;
          z-index: 1;
          width: 217.25px;
          height: 148.5px;
        }
      }
      &-mobile-intro{
        margin-left: 217.25px;
        flex:1;
        height: 148.5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1{
          color:#fff;
          font-size: 22px;
          text-align: center;
          font-weight: bold;
        }
        .app-buttonMobile{
          display: inline-block;
          line-height: 35px;
          font-size: 18px;
          text-align: center;
          min-width: 110px;
          background-color: #ffd602;
          color: #333;
          font-weight: bold;
          border: none;
        }
      }
    }
  }
}
</style>
