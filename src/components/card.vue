<template lang="pug">
  div.cardBox
    p 参与线上选拔，赢取红牛世锦赛决赛外卡
    div.cardImg
        p 红牛魔方世锦赛决赛外卡
        img(src='static/img/my-card.png')
    router-link.prize-button(to='/practice') 马上挑战

          

</template>

<script>
export default {
}
</script>

<style lang="scss">
.cardBox{
    display:flex;
    flex-direction: column;
    align-items: center;
    p{
        color: #333;
        font-size: 20px;
        margin: 70px;
    }
    .cardImg{
        display: flex;
        justify-content: center;
        position: relative;
        p{
            font-size: 30px;
            color: #333;
            font-weight: bold;
            position: absolute;
            z-index: 1;
            top: 30%;
            margin: 0;
        }
        img {
            height: 250px; 
            width: auto;
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
        margin-top: 80px;
        &:hover {
            text-decoration: none;
            color: inherit;
        }
        &:focus {
            outline: none;
        }
    }
}
@media (max-width:992px) {
    .cardBox{
        p{
            font-size: 17px;
            margin: 30px;
        }
        .cardImg{
            p{
                font-size: 22px;
                top: 40%;
            }
            img {
                height: 190px; 
            }
        }
    }
}
</style>
