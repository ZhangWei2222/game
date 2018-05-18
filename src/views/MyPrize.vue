<template lang="pug">
  div.rb-act.my-prize
    div.rb-act__bg(style="background: url('static/img/my-prize-bg.png') center no-repeat; background-size: 100% auto; background-position-y: 0;")
      div.rb-act__content
        div.rb-act__title
          img(src='static/img/my-prize-text.png')
    div.rb-act__views-wrapper
        div.container
            div.rb-act__views
                div.routerBox
                    div.prize(@click="toggleTab('prize')" :class="[isprize ? 'prizeActive' : 'send']") 奖品
                    div.line
                    div.bad(@click="toggleTab('badge')" :class="[isbadge ? 'badActive' : 'send']") 徽章
                    div.line
                    div.card(@click="toggleTab('card')" :class="[iscard ? 'cardActive' : 'send']") 外卡
                prince(:is='currentTab' :badges="badges" keep-alive)


          

</template>

<script>
import prize from '../components/prize';
import badge from '../components/badge';
import card from '../components/card';
export default {
    data () {
        return {
            currentTab: 'prize', // currentTab 用于标识当前触发的子组件
            isprize: true,
            isbadge: false,
            iscard: false,
            badges:{
                windNum: 13,
                starNum: 1,
                eleNum: 2,
                cloudNum: 1,
                mineNum: 1,
            }
        };
    },
    components: { // 声明子组件
        prize,
        badge,
        card
    },
    methods: {
        toggleTab: function(tab) {
            this.currentTab = tab; // tab 为当前触发标签页的组件名


            let yy = 'is'+ tab
            if( yy == 'isprize'){
                this.isprize = true;
                this.isbadge = false;
                this.iscard = false;
            }else if(yy == 'isbadge'){
                this.isbadge = true;
                this.iscard = false;
                this.isprize = false;
            }else if(yy == 'iscard'){
                this.iscard = true;
                this.isprize = false;
                this.isbadge = false;
            }
        }
    }
}
</script>

<style lang="scss">
@import '../style/rb-act';
.my-prize{
    .rb-act{
        &__bg{
            padding: 75px 0 200px;
        }
        &__views {
            width: 100%;
            background-color: #fff;
            // height: 600px;
            position: relative;
            padding: 0px 0;
            .routerBox{
                height: 80px;
                background-color: #1897f2;
                display: flex;
                text-align: center;
                align-items:center;
                .prize,.bad,.card{
                    flex:1;
                    font-size: 22px;
                    color:#333;
                    position: relative;
                    // background-color: #1897f2;
                    // font-weight: normal;
                    cursor: pointer;
                }
                .prizeActive,.badActive,.cardActive{
                    color: #fff;
                    &:after{
                        content:""; 
                        display:block; 
                        width:0; 
                        height:0; 
                        position:absolute; 
                        left:182px; 
                        top:56px; 
                        border-left: 5px solid transparent;
                        border-right: 5px solid transparent;
                        border-top: 12px solid #1897f2;
                    }
                }
                .line{
                    float:left;
                    width: 1px;
                    height: 20px; 
                    background: #333;
                }
            }
        }
    }
}
@media (max-width:992px){
    .container{
        padding: 0;
    }
    .rb-act{
        &__bg{
            background: url('../../static/img/my-prize-mobile.png') center no-repeat !important;
            background-size: 100% !important;
        }
        &__title{
            img{
                    height: 46px;
                }
        }
    }
    .my-prize{
        .rb-act{
            &__bg{
                padding: 45px 0 57px;
            }
            &__views {
                margin-top: 120px;
                .routerBox{
                    height: 45px;
                    .prize,.bad,.card{
                        font-size: 18px;
                    }
                    .prizeActive,.badActive,.cardActive{
                        color: #fff;
                        &:after{
                            left:60px; 
                            top:35px; 
                            border-top: 7px solid #1897f2;
                        }
                    }
                    .line{
                        height: 18px; 
                    }
                }
            }
        }
    }
}
</style>
