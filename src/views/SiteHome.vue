<template lang="pug">
  div.site-home
    div.bannersBox
      div.leftBox
        div.textBox
          div.text
          h3 即日起，购买产品/参与线上活动，可赢取GAN限量速拧装备，</br>红牛魔方世锦赛决赛外卡及波士顿观战之旅！
          h4 即日起，购买产品/参与线上活动，</br>可赢取GAN限量速拧装备，</br>红牛魔方世锦赛决赛外卡及</br>波士顿观战之旅！
      div.rightBox
        router-link.cardBox(to='/scrap')
          div.text
            h1 买魔方 “刮”大奖
            p 买魔方</br>“刮”大奖
            h2 购买GAN红牛活动装，获刮刮卡一张，100%刮分大奖。
            h3 进入活动
        router-link.badgeBox(to='/collect')
          div.text
            h1 集徽章 兑神装
            p 集徽章</br>兑神装
            h3 进入活动
        router-link.speedBox(to='/earncard')
          div.text
            h1 拼手速 争外卡
            p 拼手速</br>争外卡
            h3 进入活动
    div.introBox
      div.textsBox
        h1 红牛魔方世锦赛 
        p 2018年，奥地利红牛发起了一场全球魔方速拧运动，设立双手速拧、单手速拧、克隆及女子速拧等 4 种比赛模式，采用颠覆性的1 vs 1 淘汰赛制，创造更具挑战性、更精彩刺激的全新竞速体验。</br>17个国家，20场预选赛，4大项目的68位赢家，将晋级9月在美国波士顿麻省理工学院举行的终极决赛，角逐全球冠军，赢取$30000美元大奖。
      div.modesBox
        div.handsBox
          div.iconsBox
            div.mode
            div.timer
          div.textBox
            h1 双手速拧
            div.liBox
              li 5次复原
              li 取最快成绩
        div.handBox
          div.iconsBox
            div.mode
            div.hand
          div.textBox
            h1 单手速拧
            div.liBox
              li 5次复原
              li 取最快成绩
        div.cloneBox
          div.modes
          div.textBox
            h1 克隆
            div.liBox
              li 3次复原
              li 取最快成绩
        div.girlBox
          div.iconsBox
            div.mode
            div.icon
          div.textBox
            h1 女子速拧
            div.liBox
              li 3次复原
              li 取最快成绩
    div.timeBox
      h1 全球线下预选赛火热进行中
      table
        tr  
          td 2018-05-19
          td.text 巴西/圣保罗
        tr  
          td 2018-05-27
          td.text 匈牙利/布达佩斯
        tr  
          td 2018-06-02
          td.text 西班牙/马德里
        tr  
          td 2018-06-09
          td.text 荷兰/埃因霍温
        tr  
          td 2018-06-16
          td.text 英国/伦敦
      div.bt 即刻报名
    //- div.col-xs-12
    //-   div.pull-right.site-home__login
    //-     i.fa.fa-user-o
    //-     span 登录
    //- div.col-xs-6
    //-   router-link(to='/practice')
    //-     div.site-home__item
    //-       span.site-home__item-text 练习模式
    //- div.col-xs-6
    //-   router-link(to='/luckdraw')
    //-     div.site-home__item
    //-       span.site-home__item-text 刮一刮
    //- div.col-xs-6
    //-   router-link(to='/')
    //-     div.site-home__item
    //-       span.site-home__item-text 选手投票
    //- div.col-xs-6
    //-   router-link(to='/')
    //-     div.site-home__item
    //-       span.site-home__item-text 分享徽章
</template>

<script>
import Api from '@/apis'
// import 'lib-flexible/flexible.js'
export default {
  mounted () {
    // this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      Api.getUserInfo().then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>


<style lang="scss">
.site-home {
  .bannersBox{
    // height: 625px;
    width: 100%;
    display: flex;
    &:after{
      content:'';
      display:block;
      margin-top: 50%;
    }
    .leftBox{
      background-image: url('../assets/SiteHome/banner.jpg');
      background-size: cover;
      background-position: center;
      width: 70%;
      border-right: solid 1px #fff;
      .textBox{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
        .text{
          background-image: url('../assets/SiteHome/text.png');
          background-size: cover;
          background-position: center;
          // width:500px;
          // height:213px;
          width:50%;
          height: 0;
          padding-bottom: 21%;
        }
        h3{
          color: #333;
          font-size: 13px;
          text-align: center;
          line-height: 20px;
        }
        h4{
          display: none;
        }
      }
    }
    .rightBox{
      display: flex;
      flex-direction: column;
      width: 30%;
      .cardBox{
        flex: 1;
        background-image: url('../assets/SiteHome/card.jpg');
        background-size: cover;
        background-position: center;
        cursor: pointer;
        text-decoration: none;
        .text{
          color: #fff;
          margin-left: 30px;
          margin-top: 25px;
          h1{
            font-weight: 500;
            font-size: 28px;
            margin-bottom: 20px;
          }
          p{
            display: none;
          }
          h2{
            font-size: 14px;
          }
          h3{
            display: none;
          }
        }
      }
      .badgeBox{
        flex: 1;
        background-image: url('../assets/SiteHome/badge.jpg');
        background-size: cover;
        background-position: center;
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
        cursor: pointer;
        text-decoration: none;
        .text{
          margin-left: 30px;
          margin-top: 25px;
          color: #fff;
          h1{
            font-weight: 500;
            font-size: 28px;
            margin-bottom: 20px;
          }
          p{
            display: none;
          }
          h3{
            display: none;
          }
        }
      }
      .speedBox{
        flex: 1;
        background-image: url('../assets/SiteHome/speed.jpg');
        background-size: cover;
        background-position: center;
        cursor: pointer;
        text-decoration: none;
        .text{
          color: #fff;
          margin-left: 30px;
          margin-top: 25px;
          h1{
            font-weight: 500;
            font-size: 28px;
            margin-bottom: 20px;
          }
          p{
            display: none;
          }
          h3{
            display: none;
          }
        }
      }
    }
  }
  .introBox{
    // height: 800px;
    background-image: url('../assets/SiteHome/intro.jpg');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width:100%;
    position: relative;
    &:after{
      content:'';
      display:block;
      margin-top: 53%;
    }
    .textsBox{
      color:#fff;
      width: 60%;
      margin: 50px auto;
      line-height: 32px;
      position: absolute;
      left: 50%;
      margin-left: -30%;
      h1{
        font-size: 42px;
        font-weight: bold;
        text-align: center;
      }
      p{
        font-size: 18px;
        text-align: left;
      }
    }
    .modesBox{
      display: flex;
      width: 60%;
      margin: 0 auto;
      position: absolute;
      left: 50%;
      margin-left: -30%;
      top: 43%;
      flex-wrap:wrap;
      height: 50%;
      .handsBox,.cloneBox{
        margin-right:10%;
      }
      .handsBox,.handBox,.girlBox,.cloneBox{
        display: flex;
        width:45%;
        .iconsBox{
          display:flex;
          flex:1;
        }
        .mode{
          background-image: url('../assets/SiteHome/mode1.png');
          background-position: center;
          background-size: 85%;
          background-repeat: no-repeat;
          justify-content: center;
          flex:1;
          // &:after{
          //   margin-top: 50%;
          // }
        }
        .timer{
          flex:1;
          background-image: url('../assets/SiteHome/timer.png');
          background-position: center;
          background-size: 80%;
          background-repeat: no-repeat;
        }
        .hand{
          flex:1;
          background-image: url('../assets/SiteHome/hand.png');
          background-position: center;
          background-size: 72%;
          background-repeat: no-repeat;
        }
        .icon{
          flex:1;
          background-image: url('../assets/SiteHome/icon.png');
          background-position: center;
          background-size: 72%;
          background-repeat: no-repeat;
        }
        .modes{
          flex:1;
          height: 100%;
          background-image: url('../assets/SiteHome/mode2.png');
          background-position: center;
          background-size: 100%;
          background-repeat: no-repeat;
        }
        .textBox{
          margin:0;
          padding-left:5%;
          display:flex;
          flex-direction: column;
          justify-content: center;
          h1{
            color: #ffd602;
            font-size: 20px;
            text-align: left;
          }
          li{
            font-size: 18px;
            color: #fff;
          }
        }
      }
      // .modesBox1,.modesBox2{
      //   display: flex;
      //   justify-content: space-between;
      //   margin-bottom: 100px;
      //   .handsBox,.handBox,.girlBox,.cloneBox{
      //     display: flex;
      //     width:50%;
      //     &:after{
      //       margin-top: 50%;
      //     }
      //     .mode{
      //       background-image: url('../assets/SiteHome/mode1.png');
      //       background-position: center;
      //       background-size: contain;
      //       background-repeat: no-repeat;
      //       width: 30%;
      //       // height: 122px;
      //       margin-right: 20px;
      //       justify-content: center;
      //       &:after{
      //         margin-top: 50%;
      //       }
      //     }
      //     .timer{
      //       width: 108px;
      //       height: 119px;
      //       background-image: url('../assets/SiteHome/timer.png');
      //       background-position: center;
      //       background-size: 100% 100%;
      //       background-repeat: no-repeat;
      //     }
      //     .hand{
      //       width: 92px;
      //       height: 117px;
      //       background-image: url('../assets/SiteHome/hand.png');
      //       background-position: center;
      //       background-size: 100% 100%;
      //       background-repeat: no-repeat;
      //     }
      //     .icon{
      //       width: 92px;
      //       height: 109px;
      //       margin: 0 10px;
      //       background-image: url('../assets/SiteHome/icon.png');
      //       background-position: center;
      //       background-size: 100% 100%;
      //       background-repeat: no-repeat;
      //     }
      //     .modes{
      //       width: 58%;
      //       height: 124px;
      //       background-image: url('../assets/SiteHome/mode2.png');
      //       background-position: center;
      //       background-size: 100% 100%;
      //       background-repeat: no-repeat;
      //     }
      //     .textBox{
      //       margin:0 25px;
      //       h1{
      //         color: #ffd602;
      //         font-size: 20px;
      //         text-align: left;
      //       }
      //       li{
      //         font-size: 18px;
      //         color: #fff;
      //       }
      //     }
      //   }
      // }
    }
  }
  .timeBox{
    // height:800px;
    color: #fff;
    background-image: url('../assets/SiteHome/time.png');
    background-size: 100% 100%;
    background-position: center;
    overflow: hidden;
    width:100%;
    position: relative;
    &:after{
      content:'';
      display:block;
      margin-top: 38%;
    }
    h1{
      font-size: 42px;
      font-weight: bold;
      margin: 0;
      text-align: center;
      padding: 90px 0;
    }
    table{
      border: 1px solid #fff;
      width: 37%;
      // height: 260px;
      text-align: center;
      margin: auto;
      position: absolute;
      left: 50%;
      margin-left: -18.5%;
      td{
        font-size: 13px;
        border: 1px solid #fff;
        padding: 3% 0;
      }
      .text{
        text-align: left;
        text-indent: 26px;
      }
    }
    .bt{
      margin: 90px auto;
      width: 250px;
      height: 50px;
      left: 50%;
      margin-left: -125px;
      top: 60%;
      background-color: #ffd602;
      text-align: center;
      color:#333333;
      font-size: 24px;
      line-height: 50px;
      font-weight: bold;
      border-radius: 5px;
      position: absolute;
    }
  }
}
@media (max-width:1435px){
  .site-home {
    .bannersBox{
      .rightBox{
        .cardBox{
          .text{
            margin-left: 30px;
            margin-top: 25px;
            h1{
              font-size: 26px;
              // margin-bottom: 20px;
            }
            h2{
              font-size: 12px;
            }
          }
        }
        .badgeBox{
          .text{
            margin-left: 30px;
            margin-top: 25px;
            h1{
              font-size: 26px;
            }
          }
        }
        .speedBox{
          .text{
            margin-left: 30px;
            margin-top: 25px;
            h1{
              font-size: 26px;
            }
          }
        }
      }
    }
    .introBox{
      .textsBox{
        margin: 50px auto;
        line-height: 32px;
        left: 50%;
        margin-left: -30%;
        h1{
          font-size: 40px;
        }
        p{
          font-size: 16px;
        }
      }
      .modesBox{
        display: flex;
        width: 60%;
        left: 50%;
        margin-left: -30%;
        top: 43%;
        .modesBox1,.modesBox2{
          display: flex;
          justify-content: space-between;
          margin-bottom: 100px;
          // .handsBox,.cloneBox{
          //   margin-right: 110px;
          // }
          .handsBox,.handBox,.girlBox,.cloneBox{
            display: flex;
            width:50%;
            &:after{
              margin-top: 50%;
            }
            .mode{
              width: 30%;
              // height: 122px;
              margin-right: 20px;
              justify-content: center;
              &:after{
                margin-top: 50%;
              }
            }
            .timer{
              width: 108px;
              height: 119px;
            }
            .hand{
              width: 92px;
              height: 117px;
            }
            .icon{
              width: 92px;
              height: 109px;
              margin: 0 0px;
            }
            .modes{
              width: 62%;
              height: 124px;
            }
            .textBox{
              margin:0 25px;
              h1{
                font-size: 18px;
              }
              li{
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width:1212px){
  .site-home {
    .bannersBox{
      .leftBox{
        .textBox{
          // margin-top: 50px;
          .text{
            // width:50%;
            // padding-bottom: 21%;
          }
          h3{
            font-size: 11px;
            // line-height: 20px;
          }
        }
      }
      .rightBox{
        .cardBox{
          .text{
            margin-left: 30px;
            margin-top: 25px;
            h1{
              font-size: 26px;
              // margin-bottom: 20px;
            }
            h2{
              font-size: 12px;
            }
          }
        }
        .badgeBox{
          .text{
            margin-left: 30px;
            margin-top: 25px;
            h1{
              font-size: 26px;
            }
          }
        }
        .speedBox{
          .text{
            margin-left: 30px;
            margin-top: 25px;
            h1{
              font-size: 26px;
            }
          }
        }
      }
    }
    .introBox{
      .textsBox{
        margin: 40px auto;
        line-height: 32px;
        left: 50%;
        margin-left: -30%;
        h1{
          font-size: 38px;
        }
        p{
          font-size: 14px;
        }
      }
      .modesBox{
        display: flex;
        width: 60%;
        left: 50%;
        margin-left: -30%;
        top: 43%;
        .modesBox1,.modesBox2{
          display: flex;
          justify-content: space-between;
          margin-bottom: 50px;
          margin-top:10px;
          // .handsBox,.cloneBox{
          //   margin-right: 110px;
          // }
          .handsBox,.handBox,.girlBox,.cloneBox{
            display: flex;
            width:50%;
            &:after{
              margin-top: 50%;
            }
            .mode{
              width: 30%;
              // height: 122px;
              background-size: 100%;
              margin-right: 20px;
              justify-content: center;
              &:after{
                margin-top: 50%;
              }
            }
            .timer{
              width: 108px;
              height: 119px;
              background-size: 90%;
            }
            .hand{
              width: 92px;
              height: 117px;
              background-size: 90%;
            }
            .icon{
              width: 92px;
              height: 109px;
              margin: 0 0;
              background-size: 90%;
            }
            .modes{
              width: 68%;
              height: 124px;
              background-size: 100%;
            }
            .textBox{
              margin:0 25px;
              h1{
                font-size: 18px;
              }
              li{
                font-size: 16px;
              }
            }
          }
        }
      }
    }
    .timeBox{
      h1{
        font-size: 38px;
        font-weight: bold;
        margin: 0;
        text-align: center;
        padding: 90px 0;
      }
      table{
        border: 1px solid #fff;
        width: 37%;
        // height: 260px;
        text-align: center;
        margin: auto;
        position: absolute;
        left: 50%;
        margin-left: -18.5%;
        td{
          font-size: 13px;
          border: 1px solid #fff;
          padding: 3% 0;
        }
        .text{
          text-align: left;
          text-indent: 26px;
        }
      }
      .bt{
        margin: 90px auto;
        width: 250px;
        height: 50px;
        left: 50%;
        margin-left: -125px;
        top: 60%;
        background-color: #ffd602;
        text-align: center;
        color:#333333;
        font-size: 24px;
        line-height: 50px;
        font-weight: bold;
        border-radius: 5px;
        position: absolute;
      }
    }
  }
}
@media (max-width:1115px){
  .site-home {
    .introBox{
      .textsBox{
        margin: 25px auto;
        line-height: 32px;
        width:70%;
        left: 50%;
        margin-left: -35%;
        h1{
          font-size: 38px;
        }
        p{
          font-size: 13px;
        }
      }
      .modesBox{
        display: flex;
        width: 70%;
        left: 50%;
        margin-left: -35%;
        top: 43%;
        .modesBox1,.modesBox2{
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          margin-top:16px;
          // .handsBox,.cloneBox{
          //   margin-right: 110px;
          // }
          .handsBox,.handBox,.girlBox,.cloneBox{
            display: flex;
            width:47%;
            &:after{
              margin-top: 50%;
            }
            .mode{
              width: 30%;
              // height: 122px;
              background-size: 85%;
              margin-right: 20px;
              justify-content: center;
              &:after{
                margin-top: 50%;
              }
            }
            .timer{
              width: 108px;
              height: 119px;
              background-size: 75%;
            }
            .hand{
              width: 92px;
              height: 117px;
              background-size: 75%;
            }
            .icon{
              width: 92px;
              height: 109px;
              margin: 0 0;
              background-size: 75%;
            }
            .modes{
              width: 65%;
              height: 124px;
              background-size: 90%;
            }
            .textBox{
              margin:0 25px;
              h1{
                font-size: 16px;
              }
              li{
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width:986px){
  .site-home {
    .introBox{
      .textsBox{
        margin: 15px auto;
        line-height: 32px;
        width:70%;
        left: 50%;
        margin-left: -35%;
        h1{
          font-size: 36px;
        }
        p{
          font-size: 13px;
          line-height: 1.5;
        }
      }
      .modesBox{
        display: flex;
        width: 70%;
        left: 50%;
        margin-left: -35%;
        top: 43%;
        .modesBox1,.modesBox2{
          display: flex;
          justify-content: space-between;
          margin-bottom: -25px;
          margin-top:18px;
          // .handsBox,.cloneBox{
          //   margin-right: 110px;
          // }
          .handsBox,.handBox,.girlBox,.cloneBox{
            display: flex;
            width:47%;
            &:after{
              margin-top: 50%;
            }
            .mode{
              width: 30%;
              // height: 122px;
              background-size: 85%;
              margin-right: 0px;
              justify-content: center;
              &:after{
                margin-top: 50%;
              }
            }
            .timer{
              width: 108px;
              height: 119px;
              background-size: 62%;
              width:33%;
            }
            .hand{
              width: 92px;
              height: 117px;
              background-size: 62%;
              width:33%;
            }
            .icon{
              width: 92px;
              height: 109px;
              margin: 0;
              background-size: 62%;
              width:33%;
            }
            .modes{
              width: 63%;
              height: 124px;
              background-size: 90%;
            }
            .textBox{
              margin:0 0;
              h1{
                font-size: 16px;
              }
              li{
                font-size: 14px;
              }
            }
          }
        }
      }
    }
    .timeBox{
      h1{
        font-size: 36px;
        font-weight: bold;
        margin: 0;
        text-align: center;
        padding: 60px 0;
      }
      table{
        border: 1px solid #fff;
        width: 37%;
        // height: 260px;
        text-align: center;
        margin: auto;
        position: absolute;
        left: 50%;
        margin-left: -18.5%;
        td{
          font-size: 13px;
          border: 1px solid #fff;
          padding: 3% 0;
        }
        .text{
          text-align: left;
          text-indent: 26px;
        }
      }
      .bt{
        margin: 90px auto;
        width: 250px;
        height: 50px;
        left: 50%;
        margin-left: -125px;
        top: 60%;
        background-color: #ffd602;
        text-align: center;
        color:#333333;
        font-size: 24px;
        line-height: 50px;
        font-weight: bold;
        border-radius: 5px;
        position: absolute;
      }
    }
  }
}
@media (max-width:780px){
  .site-home {
    .bannersBox{
      flex-direction: column;
      &:after{
        margin-top: 0%;
      }
      .leftBox{
        width: 100%;
        height:0;
        padding-top: 100%;
        background-image:url('../assets/SiteHome/bg.png');
        position: relative;
        .textBox{
          position: absolute;
          top: 4%;
          width:100%;
          margin-top: 0;
          .text{
            width: 67%;
            padding-bottom: 29%;
          }
          h3{
            display: none;
          }
          h4{
            display: block;
            color: #282828;
            font-size: 13px;
            line-height: 23px;
            text-align: center;
          }
        }
      }
      .rightBox{
        flex-direction:unset;
        width: 100%;
        .cardBox{
          background-image: url('../assets/SiteHome/card1.png');
          .text{
            margin: auto 0;
            text-align: center;
            h1{
              display: none;
            }
            p{
              font-size: 22px;
              font-weight: bold;
              margin-top:10px;
              display: block;
            }
            h2{
              display: none;
            }
            h3{
              display: block;
              font-size: 13px;
              text-decoration: underline;
              margin-top: 60px;
            }
          }
        }
        .badgeBox{
          background-image: url('../assets/SiteHome/badge1.png');
          border-top:0;
          border-bottom:0;
          .text{
            margin: auto 0;
            text-align: center;
            h1{
              display: none;
            }
            p{
              font-size: 22px;
              font-weight: bold;
              margin-top:10px;
              display: block;
            }
            h3{
              display: block;
              font-size: 13px;
              text-decoration: underline;
              margin-top: 60px;
            }
          }
        }
        .speedBox{
          background-image: url('../assets/SiteHome/speed1.png');
          .text{
            margin: auto 0;
            text-align: center;
            h1{
              display: none;
            }
            p{
              font-size: 22px;
              font-weight: bold;
              margin-top:10px;
              display: block;
            }
            h3{
              display: block;
              font-size: 13px;
              text-decoration: underline;
              margin-top: 60px;
            }
          }
        }
      }
    }
    .introBox{
      background-image: url('../assets/SiteHome/intro1.png');
      &:after{
        margin-top:160%;
      }
      .textsBox{
        width: 85%;
        margin: 30px auto;
        margin-left: -42.5%;
        h1{
          font-size: 26px;
        }
        p{
          font-size: 12px;
        }
      }
      .modesBox{
        top: 39%;
        width: 85%;
        margin-left: -42.5%;
        .handsBox,.handBox,.girlBox,.cloneBox{
          flex-direction: column;
          .textBox{
            flex-direction: unset;
            h1{
              font-size: 13px;
              margin:auto;
              margin-right: 5px;
            }
            .liBox{
              li{
                font-size: 12px;
              }
            }
          }
          // .mode{
            
          // }
          // .timer{
          //   width: 108px;
          //   height: 119px;
          // }
          // .hand{
          //   width: 92px;
          //   height: 117px;
          // }
          // .icon{
          //   width: 92px;
          //   height: 109px;
          //   margin: 0 0px;
          // }
          // .modes{
          //   width: 62%;
          //   height: 124px;
          // }
          // .textBox{
          //   margin:0 25px;
          //   h1{
          //     font-size: 18px;
          //   }
          //   li{
          //     font-size: 16px;
          //   }
          // }
        }
      }
    }
    .timeBox{
      background-image: url('../assets/SiteHome/time1.jpg');
      &:after{
        margin-top: 57%;
      }
      h1{
        font-size: 26px;
        padding: 30px 0;
      }
      table{
        width: 82%;
        margin-left: -41%;
        td{
          font-size: 12px;
          padding: 2% 0;
        }
      }
      .bt{
        margin: 65px auto;
        width: 200px;
        height: 40px;
        margin-left: -100px;
        top: 60%;
        font-size: 20px;
        line-height: 40px;
        border-radius: 0px;
      }
    }
  }
}
  // padding-top: 15px;
  // &__login {
  //   margin-bottom: 15px;
  //   i {
  //     margin-right: 4px;
  //   }
  // }
  // &__item {
  //   color: #000;
  //   background-color: #44a8f2;
  //   overflow: hidden;
  //   margin-bottom: 30px;
  //   font-size: 18px;
  //   line-height: 100%;
  //   height: 100%;
  //   position: relative;
  //   &:after {
  //     content: "";
  //     display: block;
  //     margin-top: 100%;
  //   }
  //   &-text {
  //     color: #fff;
  //     position: absolute;
  //     top: 50%;
  //     left: 50%;
  //     transform: translate(-50%, -50%);
  //     width: 100%;
  //     text-align: center;
  //   }
  // }


</style>
