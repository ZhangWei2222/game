<template lang="pug">
  div.prizeBox
    div.prizeBox__intro
        h1 买GAN红牛世锦赛活动装，“刮”分 4 重大奖
        p (截止兑奖日期：2018年10月31日)
    div.prizeBox__prizes
        div.prize
            div.prize__title 千元 GAN </br> 战神装备包
            div.prize__img
                img(src='../../static/img/prize-1.png')
            div.prize__confirm 马上兑奖
        div.prize
            div.prize__title GAN356 Air SM </br> 战斗版 
            div.prize__img
                img(src='../../static/img/prize-2.png')
            div.prize__confirm 马上兑奖
        div.prize
            div.prize__title 天猫 <br> 优惠券
            div.prize__img.voucher
                img(src='../../static/img/prize-3.png')
            div.prize__confirm 马上兑奖
        div.prize
            div.prize__title 天猫 <br> 优惠券
            div.prize__img.voucher
                img(src='../../static/img/prize-4.png')
            div.prize__confirm 马上兑奖
        div.prize
            div.prize__title 天猫 <br> 优惠券
            div.prize__img.voucher
                img(src='../../static/img/prize-5.png')
            div.prize__confirm 马上兑奖
        div.prize
            div.prize__title 官网<br>优惠券
            div.prize__img.voucher
                img(src='../../static/img/prize-6.png')
            div.prize__confirm 点击查看
        div.prize
            div.prize__title 官网<br>优惠券
            div.prize__img.voucher
                img(src='../../static/img/prize-7.png')
            div.prize__confirm 点击查看
        div.prize
            div.prize__title 官网<br>优惠券
            div.prize__img.voucher
                img(src='../../static/img/prize-8.png')
            div.prize__confirm 点击查看
    router-link.prize-button(to='/practice') 我要中奖
</template>

<script>
export default {
}
</script>

<style lang="scss">
.prizeBox{
    display: flex;
    flex-direction: column;
    align-items: center;
    &__intro{
        color: #333;
        margin:70px;
        h1{
            font-size: 22px;
        }
        p{
            font-size: 20px;
        }
    }
    &__prizes{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 30px;
        .prize{
            background-color: #f2f2f2;
            position: relative;
            display: flex;
            justify-content: center;
            flex-direction: column;
            width: 250px;
            height: 205px;
            margin-bottom: 250px;
            align-items:center;
            &__title{
                position: absolute;
                color: #333;
                font-size: 18px;
                top: 35px;
                line-height: 1.5;
                text-align:center;
            }
            &__img{
                position: absolute;
                top: 110px;
                img {
                    height: 165px; 
                    width: auto;
                }
            }
            .voucher{
                padding: 36px;
                img {
                    height: 110px; 
                    width: auto;
                }
            }
            &__confirm{
                position: absolute;
                display: inline-block;
                line-height: 50px;
                font-size: 24px;
                text-align: center;
                min-width: 200px;
                background-color: #ffd602;
                color: #333;
                font-weight: bold;
                border: none;
                margin-top: 80px;
                top: 210px;
            }
        }
    }
}
.prize-button{
    display: inline-block;
    line-height: 50px;
    font-size: 24px;
    text-align: center;
    min-width: 200px;
    background-color: #1897f2;
    color: #fff;
    font-weight: bold;
    border: none;
    &:hover {
        text-decoration: none;
        color: inherit;
    }
    &:focus {
        outline: none;
    }
}
// @media (max-width:1200px) {
//     .rb-act {
//         &__views {
//             height: 1700px;
//         }
//     }
// }
@media (max-width:992px) {
    .prizeBox{
        &__intro{
            margin:30px;
            h1{
                font-size: 17px;
                margin:0;
                margin-bottom: 15px;
            }
            p{
                font-size: 14px;
            }
        }
        &__prizes{
            padding: 0 30px;
            .prize{
                width: 150px;
                height: 128px;
                margin-bottom: 170px;
                &__title{
                    font-size: 16px;
                    top: 25px;
                    line-height: 1.5;
                }
                &__img{
                    top: 80px;
                    img {
                        height: 100px; 
                    }
                }
                .voucher{
                    padding: 5px;
                    img {
                        height: 70px; 
                    }
                }
                &__confirm{
                    line-height: 40px;
                    font-size: 18px;
                    min-width: 150px;
                    margin-top: 0px;
                    top: 200px;
                }
            }
        }
    }
}
</style>
