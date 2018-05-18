<template lang="pug">
  div.badge1
    p 集齐 5 种徽章，兑换千元 GAN 战神装备包
    div.badge1__Box
      div.badge1__bg
        img(src='../assets/MyPrize/circle.png')
        div.exchangeBut(:class="[isExchange ? 'ToExchange' : '']") 兑换
      div.wind(v-if='windNum>0')
        div.bg
          img(src='static/img/badge-4.png')
        div.share
          div.shareNum {{windNum}}枚
          div.shareBut 分享
          div.shareBox(v-if='iswindShare')
            img(src='../assets/MyPrize/wechat.png')
            img(src='../assets/MyPrize/qq.png')
            img(src='../assets/MyPrize/kongjian.png')
            img(src='../assets/MyPrize/webo.png')
            img(src='../assets/MyPrize/link.png')
            div.cloneLink(v-if='iswindClone') 链接已复制
      div.NoneWind(v-if='!(windNum>0)')
        div.bg
          img(src='static/img/badge-4-no.png')
        div.ToshareBut 分享

      div.star(v-if='starNum>0')
        div.bg
          img(src='static/img/badge-1.png')
        div.share
          div.shareNum {{starNum}}枚
          div.shareBut 分享
          div.shareBox(v-if='isClone')
            img(src='../assets/MyPrize/wechat.png')
            img(src='../assets/MyPrize/qq.png')
            img(src='../assets/MyPrize/kongjian.png')
            img(src='../assets/MyPrize/webo.png')
            img(src='../assets/MyPrize/link.png')
            div.cloneLink(v-if='isClone') 链接已复制
      div.NoneStar(v-if='!(starNum>0)')
        div.bg
          img(src='static/img/badge-1-no.png')
        div.ToshareBut 分享

      div.ele(v-if='eleNum>0')
        div.bg
          img(src='static/img/badge-5.png')
        div.share
          div.shareNum {{eleNum}}枚
          div.shareBut 分享
          div.shareBox(v-if='isClone')
              img(src='../assets/MyPrize/wechat.png')
              img(src='../assets/MyPrize/qq.png')
              img(src='../assets/MyPrize/kongjian.png')
              img(src='../assets/MyPrize/webo.png')
              img(src='../assets/MyPrize/link.png')
              div.cloneLink(v-if='isClone') 链接已复制
      div.NoneEle(v-if='!(eleNum>0)')
        div.bg
          img(src='static/img/badge-5-no.png')
        div.ToshareBut 分享

      div.cloud(v-if='cloudNum>0')
        div.bg
          img(src='static/img/badge-3.png')
        div.share
          div.shareNum {{cloudNum}}枚
          div.shareBut 分享
          div.shareBox(v-if='isClone')
              img(src='../assets/MyPrize/wechat.png')
              img(src='../assets/MyPrize/qq.png')
              img(src='../assets/MyPrize/kongjian.png')
              img(src='../assets/MyPrize/webo.png')
              img(src='../assets/MyPrize/link.png')
              div.cloneLink(v-if='isClone') 链接已复制
      div.NoneCloud(v-if='!(cloudNum>0)')
        div.bg
          img(src='static/img/badge-3-no.png')
        div.ToshareBut 分享

      div.mine(v-if='mineNum>0')
        div.bg
          img(src='static/img/badge-2.png')
        div.share
          div.shareNum {{mineNum}}枚
          div.shareBut 分享
          div.shareBox(v-if='isClone')
              img(src='../assets/MyPrize/wechat.png')
              img(src='../assets/MyPrize/qq.png')
              img(src='../assets/MyPrize/kongjian.png')
              img(src='../assets/MyPrize/webo.png')
              img(src='../assets/MyPrize/link.png')
              div.cloneLink(v-if='isClone') 链接已复制
      div.NoneMine(v-if='!(mineNum>0)')
        div.bg
          img(src='static/img/badge-2-no.png')
        div.ToshareBut 分享

    router-link.badge1__button(to='/practice') 集齐徽章

          

</template>

<script>
export default {
  props:['badges'],
  data(){
    return{
      windNum: '',
      isExchange:false,
      isClone:false,
      iswindShare:true,
      iswindClone:true
    }
  },
  mounted(){
    console.log(this.badges)
    //获取各徽章的数目
    this.windNum = this.badges.windNum
    this.starNum = this.badges.starNum
    this.eleNum = this.badges.eleNum
    this.cloudNum = this.badges.cloudNum
    this.mineNum = this.badges.mineNum
    //判断是否可以兑奖
    if(this.windNum && this.starNum && this.eleNum && this.cloudNum && this.mineNum){
      console.log(11)
      this.isExchange = true;
    }
  }
}
</script>

<style lang="scss">
.badge1{
  height: 930px;
  p{
    color: #333;
    font-size: 20px;
    margin: 70px;
  }
  &__button{
    display: inline-block;
    line-height: 50px;
    font-size: 24px;
    text-align: center;
    min-width: 200px;
    background-color: #1897f2;
    color: #fff;
    font-weight: bold;
    border: none;
    position: absolute;
    bottom: -60px;
    left: 50%;
    margin-left: -100px;
    &:hover {
        text-decoration: none;
        color: inherit;
    }
    &:focus {
        outline: none;
    }
  }
  &__Box{
    position: relative;
    top: 50px;
    width: 940px;
    margin: auto;
    .wind,.star,.ele,.cloud,.mine,.NoneWind,.NoneStar,.NoneEle,.NoneCloud,.NoneMine{
      position: absolute;
      width:350px;
      height: 190px;
      .bg{
        display: flex;
        justify-content: center;
        img{
          height: 120px; 
          width: auto;
        }
      }
      .ToshareBut{
        text-align: center;
        background-color: #666666;
        color: #cccccc;
        font-size: 18px;
        font-weight: bold;
        width:130px;
        line-height: 40px;
        margin: auto;
        margin-top: 12px;
        cursor: pointer;
      }
      .share{
        display: flex;
        justify-content: center;
        margin-top: 12px;
        .shareNum{
          text-align: center;
          background-color: #cc9900;
          color: #333333;
          font-size: 18px;
          font-weight: bold;
          width: 50px;
          height: 40px;
          line-height: 40px;
        }
        .shareBut{
          text-align: center;
          background-color: #ffd602;
          color: #333333;
          font-size: 18px;
          font-weight: bold;
          width:80px;
          line-height: 40px;
          cursor: pointer;
        }
        .shareBox{
          width:225px;
          height: 45px;
          background-color: #f2f2f2;
          position: absolute;
          left: 260px;
          display: flex;
          justify-content: center;
          align-items: center;
          &:after{
            content:""; 
            display:block; 
            width:0; 
            height:0; 
            position:absolute; 
            left:-6px; 
            top:8px; 
            border-top:6px solid transparent;
            border-bottom:6px solid transparent; 
            border-right:6px solid #f2f2f2; 
          }
          img{
            width:25px;
            margin: 7px;
          }
        .cloneLink{
            width:76px;
            height: 20px;
            background-color: #cccccc;
            position: absolute;
            right: 0;
            top: 55px;
            text-align: center;
            font-size: 11px;
            line-height: 20px;
          }
        }
      }
    }
    .wind,.NoneWind{
      left: 300px;
      // margin-left: -175px;
      top: -55px;
    }
    .star,.NoneStar{
      left: 592px;
      top: 175px
    }
    .ele,.NoneEle{
      top: 450px;
      left: 482px;
    }
    .cloud,.NoneCloud{
      top: 450px;
      left: 100px;
    }
    .mine,.NoneMine{
      top: 175px;
      left: -4px;
    }
  }
  &__bg{
    position: absolute;
    width: 600px;
    left:50%;
    margin-left: -300px;
    img{
      height: 600px; 
      width: auto;
    }
    .exchangeBut{
      position: absolute;
      display: inline-block;
      line-height: 50px;
      font-size: 24px;
      text-align: center;
      min-width: 130px;
      background-color: #666666;
      color: #cccccc;
      font-weight: bold;
      border: none;
      margin-top: -25px;
      top:50%;
      left:50%;
      margin-left: -65px;
    }
    .ToExchange{
      background-color: #1897f2;
      color: #fff;
      cursor: pointer;
    }
  }
}
@media (max-width:992px) {
  .badge1{
    height: 500px;
    p{
      font-size: 17px;
      margin: 30px;
    }
    &__button{
      line-height: 50px;
      font-size: 24px;
      text-align: center;
      min-width: 200px;
      background-color: #1897f2;
      color: #fff;
      font-weight: bold;
      border: none;
      position: absolute;
      bottom: -60px;
      left: 50%;
      margin-left: -100px;
      &:hover {
          text-decoration: none;
          color: inherit;
      }
      &:focus {
          outline: none;
      }
    }
    &__Box{
      top: 50px;
      width: 100%;
      margin: auto;
      .wind,.star,.ele,.cloud,.mine,.NoneWind,.NoneStar,.NoneEle,.NoneCloud,.NoneMine{
        position: absolute;
        width:350px;
        height: 190px;
        .bg{
          img{
            height: 55px; 
          }
        }
        .ToshareBut{
          font-size: 16px;
          width:100px;
          line-height: 30px;
          margin-top: 2px;
        }
        .share{
          margin-top: 2px;
          .shareNum{
            font-size: 16px;
            width: 40px;
            height: 30px;
            line-height: 30px;
          }
          .shareBut{
            font-size: 16px;
            width:60px;
            line-height: 30px;
          }
          .shareBox {
            display: none;
          }
        }
      }
      .wind,.NoneWind{
        left: 25px;
        // margin-left: -175px;
        top: -50px;
      }
      .star,.NoneStar{
        left: 155px;
        top: 80px
      }
      .ele,.NoneEle{
        top: 210px;
        left: 110px;
      }
      .cloud,.NoneCloud{
        top: 210px;
        left: -55px;
      }
      .mine,.NoneMine{
        top: 80px;
        left: -107px;
      }
    }
    &__bg{
      width: 260px;
      margin-left: -130px;
      img{
        height: 260px; 
      }
      .exchangeBut{
        line-height: 80px;
        font-size: 18px;
        min-width: 80px;
        margin-top: -25px;
        top:115px;
        left:160px;
        background-color: #fff;
        opacity: 0.8;
        border-radius: 50%;
        height: 80px;
      }
      .ToExchange{
        background-color: #1897f2;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>
