<template lang="pug">
  div.rb-act.call-friend
    div.rb-act__bg(style="background: url('static/img/thumbs-up-big.png') center no-repeat; background-size: 100% auto; background-position-y: 0;")
      div.rb-act__content
        div.rb-act__title
          img(src='static/img/thumbs-up-text.png')
    div.rb-act__views-wrapper
      div.container
        div.rb-act__views
          div.rb-act__person1
            div.rb-act__person1-img
              img(src='../assets/ThumbsUp/Dobryakov.png')
            div.rb-act__person1-introBox
              h1 双手速拧
              h2 06.33
              div.flag
                img(src='../assets/ThumbsUp/flag1.png')
              h3 Dmitry Dobryakov
              div.iconBox
                i.iconfont.icon-aixin
                h4 {{number}}
          div.rb-act__person2
            div.rb-act__person2-img
              img(src='../assets/ThumbsUp/Che.png')
            div.rb-act__person2-introBox
              h1 单手速拧
              h2 06.33
              div.flag
                img(src='../assets/ThumbsUp/flag1.png')
              h3 Andrey Che
              div.iconBox
                i.iconfont.icon-aixin
                h4 {{number}}
          div.rb-act__person3
            div.rb-act__person3-img
              img(src='../assets/ThumbsUp/Aniskin.png')
            div.rb-act__person3-introBox
              h1 克隆
              h2 06.33
              div.flag
                img(src='../assets/ThumbsUp/flag1.png')
              h3 Dmitry Aniskin
              div.iconBox
                i.iconfont.icon-aixin
                h4 {{number}}
          div.rb-act__person4
            div.rb-act__person4-img
              img(src='../assets/ThumbsUp/Drobytko.png')
            div.rb-act__person4-introBox
              h1 女子速拧
              h2 06.33
              div.flag
                img(src='../assets/ThumbsUp/flag1.png')
              h3 Irina Drobytko
              div.iconBox
                i.iconfont.icon-aixin
                h4 {{number}}
          div.rb-act__person5
            div.rb-act__person5-img
              img(src='../assets/ThumbsUp/Christ.png')
            div.rb-act__person5-introBox
              h1 女子速拧
              h2 06.33
              div.flag
                img(src='../assets/ThumbsUp/flag2.png')
              h3 Nora Christ
              div.iconBox
                i.iconfont.icon-aixin
                h4 {{number}}
          div.rb-act__person6
            div.rb-act__person6-img
              img(src='../assets/ThumbsUp/Weyer.png')
            div.rb-act__person6-introBox
              h1 单手速拧
              h2 06.33
              div.flag
                img(src='../assets/ThumbsUp/flag2.png')
              h3 Phillipp Weyer
              div.iconBox
                i.iconfont.icon-aixin
                h4 {{number}}
          div.rb-act__person8
            div.rb-act__person8-img
              img(src='../assets/ThumbsUp/Sebastian.png')
            div.rb-act__person8-introBox
              h1 克隆
              h2 06.33
              div.flag
                img(src='../assets/ThumbsUp/flag1.png')
              h3 Sebastian Dobryakov
              div.iconBox
                i.iconfont.icon-aixin
                h4 {{number}}
</template>

<script>
export default {
  data(){
    return{
      number:'640'
    }
  }
}
</script>

<style lang="scss">
@import '../style/rb-act';
@import '../../static/font/iconfont.css';
.rb-act__views-wrapper{
  .container{
    .rb-act__views{
      padding:80px;
      display: flex;
      flex-wrap: wrap;
      height:600px;
      .rb-act__person1,.rb-act__person2,.rb-act__person3,.rb-act__person4,.rb-act__person5,.rb-act__person6,.rb-act__person7,.rb-act__person8{
        width:18%;
        margin-right: 2%;
        margin-bottom: 75px;
        &-img{
          display:flex;
          justify-content: center;
        }
        &-introBox{
          text-align:center;
          position:relative;
          h1{
            color:#1897f2;
            font-size: 16px;
            margin:0;
            margin-top:10px;
          }
          h2{
            color:#666;
            font-size: 16px;
            margin:0;
            margin-top:20px;
          }
          .flag{
            position:absolute;
            top:0;
            right:0;
          }
          h3{
            color:#666;
            font-size: 18px;
            font-weight:bold;
            margin:0;
            margin-top:10px;
          }
          .iconBox{
            display: flex;
            justify-content: center;
            margin-top:10px;
            i{
              color:#666;
              cursor: pointer;
            }
            h4{
              color:#666;
              font-size: 16px;
              margin:0;
              line-height: 22px;
              margin-left: 5px;
            }
          }
        }
      }
    }
  }
}
@media (max-width:992px){
  .rb-act{
    &__bg{
      background: url('../../static/img/thumbs-up-mobile.png') center no-repeat !important;
      background-size: 100% !important;
      padding: 0 0 173px;
      position: relative;
    }
    &__content{
      position:absolute;
      width:100%;
      padding-top:57px;
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
    }
  }
  .rb-act__views-wrapper{
    .container{
      .rb-act__views{
        padding:35px;
        height:650px;
        justify-content: space-between;
        .rb-act__person1,.rb-act__person2,.rb-act__person3,.rb-act__person4,.rb-act__person5,.rb-act__person6,.rb-act__person7,.rb-act__person8{
          width:28%;
          // margin-right: 5%;
          margin-bottom: 35px;
          &-img{
            img{
              width:95%;
              height:100%;
            }
          }
          &-introBox{
            h1{
              font-size: 13px;
              margin-top:10px;
            }
            h2{
              font-size: 13px;
              margin-top:5px;
            }
            .flag{
              right:-20px;
              img{
                width:65%;
                height: 100%;
              }
            }
            h3{
              font-size: 10px;
              margin-top:5px;
              height: 20px;
              line-height: 20px;
            }
            .iconBox{
              margin-top:5px;
              i{
                font-size: 13px;
              }
              h4{
                font-size: 13px;
              }
            }
          }
        }
        .rb-act__person1,.rb-act__person8{
          &-introBox{
            h3{
              line-height: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
