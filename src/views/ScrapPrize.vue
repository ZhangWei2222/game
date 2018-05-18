<template lang="pug">
	div.scrap-prize
		div.bannerBox
			div.textsBox
				div.text
				p 即日起，购买GAN红牛活动装，可获得刮刮卡一张，刮取唯一兑奖码，</br>即可“刮”分四重奖，100%中奖。
			div.Boxs
				div.oneBox
					div.textBox
						h1 一等奖
						h2 千元 GAN 战神装备包
						h3 （全球限量 50 个）
					div.icon
				div.twoBox
					div.textBox
						h1 二等奖
						h2 GAN356 Air SM 战斗版 
						h3 （全球限量 100 只） 
					div.icon
				div.threeBox
					div.textBox
						h1 三等奖
						h2 GAN 天猫优惠券 
						h3 （10元/20元/30元） 
					div.icon
				div.fourBox
					div.textBox
						h1 四等奖
						h2 竞速徽章
						h3 （集齐 5 种，兑 GAN 战神装备包） 
					div.icon
		div.codeBox
			div.inputBox
				input(type='text' placeholder='输入8位兑奖码', v-model='scrapCode')
				div.bt(@click='scrapPrize') 确定
			router-link(to='/')
				p 没有兑奖码？进店购买活动装
			UserModal(@close='modalShow = false', v-if='modalShow')
				div.scrap-modal(slot='content')
					h1.scrap-modal__title {{ status === 0 ? '你输入的兑奖码无效 请查证后再输' : '恭喜你成功领取' }}
					div(v-if='status !== 0')
						div.scrap-modal__name {{ makePrizeMsg }}
						div.scrap-modal__pic-wrapper
							img(:src='makePrizeImg')
						div.scrap-modal__btn-row
							button.app-button 查看我的奖品
		el-carousel(:interval="4000" type="card" height="200px")
			el-carousel-item
				div.oneBox
					div.textBox
						h1 一等奖
						h2 千元 GAN 战神装备包
						h3 （全球限量 50 个）
					div.icon
			el-carousel-item  
				div.twoBox
					div.textBox
						h1 二等奖
						h2 GAN356 Air SM 战斗版 
						h3 （全球限量 100 只） 
					div.icon
			el-carousel-item  
				div.threeBox
					div.textBox
						h1 三等奖
						h2 GAN 天猫优惠券 
						h3 （10元/20元/30元） 
					div.icon
			el-carousel-item  
				div.fourBox
					div.textBox
						h1 四等奖
						h2 竞速徽章
						h3 （集齐 5 种，兑 GAN 战神装备包） 
					div.icon

		div.moreBox
			p 探索更多精彩活动

</template>

<script>
import UserModal from '@/components/UserModal'
import { getCookie } from '@/util/cookie'
import Api from '@/apis'

export default {
	data () {
		return {
			modalShow: false,
			/**
			 * status值
			 * 0: 无效的刮刮卡
			 * 1: 千元装备包
			 * 2： Air SM 战斗版
			 * 3: 天猫优惠券30
			 * 4: 天猫优惠券20
			 * 5: 天猫优惠券10
			 * 6: 徽章1
			 * 7: 徽章2
			 * 8: 徽章3
			 * 9: 徽章4
			 * 10: 徽章5
			 */
			status: 0,
			scrapCode: '',
			prizeMsg: [
				'千元战神装备包',
				'GAN356 Air SM战斗版',
				'天猫/官网优惠券',
				'天猫/官网优惠券',
				'天猫/官网优惠券',
				'徽章',
				'徽章',
				'徽章',
				'徽章',
				'徽章'
			],
			prizeImg: [
				'static/img/prize-1.png',
				'static/img/prize-2.png',
				'static/img/prize-3.png',
				'static/img/prize-4.png',
				'static/img/prize-5.png',
				'static/img/badge-1.png',
				'static/img/badge-2.png',
				'static/img/badge-3.png',
				'static/img/badge-4.png',
				'static/img/badge-5.png'
			]
		}
	},
	computed: {
		makePrizeMsg () {
			return this.prizeMsg[this.status - 1]
		},
		makePrizeImg () {
			return this.prizeImg[this.status - 1]
		}
	},
	components: {
		UserModal
	},
	methods: {
		scrapPrize () {
			const info = {
				token: getCookie('gancube_logged'),
				gift_code: this.scrapCode
			}
			console.log(info)
			Api.checkGiftcode(info).then(res => {
				console.log(res)
			})
			// this.modalShow = true
		}
	}
}
</script>

<style lang="scss">
.scrap-modal {
	&__title {
		color: #44a8f2;
		text-align: center; 
	}
	&__btn-row {
		text-align: center;
	}
	.app-button {
		margin-top: 20px;
	}
	&__name {
		text-align: center;
		font-size: 18px;
		font-weight: bold;
		margin-top: 40px;
	}
	&__pic-wrapper {
		width: 200px;
		height: 200px;
		margin: 0 auto;
		position: relative;
		img {
			position: absolute;
			max-width: 100%;
			max-height: 100%;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
		}
	}
}
.app-button {
  display: inline-block;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  min-width: 200px;
  background-color: #ffd602;
  color: #333;
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
.scrap-prize{
	.bannerBox{
		// height: 808px;
		height: 0;
		padding-bottom: 52%;
		background-image: url('../assets/ScrapPrize/bg.jpg');   
		background-size: cover;
		background-position: center;
		width: 100%;
		margin-bottom: 200px;
		position: relative;
		.textsBox{
			color: #333;
			width: 70%;
			margin:auto;
			padding: 122px;
			.text{
				background-image: url('../assets/ScrapPrize/text.png');
				background-size: cover;
				background-position: center;
				height: 0;
				padding-bottom: 11%;
				margin-bottom:20px;
			}
			p{
				font-size: 18px;
				text-align: center;
			}
		}
		.Boxs{
			width: 85%;
			margin: auto;
			display: flex;
			height: 50%;
			position: absolute;
			top: 80%;
			left:50%;
			margin-left: -42.5%;
			.oneBox{
				width: 34%;
				height: 0;
				padding-bottom: 22%;
				background-color: #f2f2f2;
				position: relative;
				.textBox{
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					padding-top: 30px;
					// position: relative;
					h1{
						font-size: 30px;
						color: #291b1d;
						font-weight: bold;
						text-align: center;
					}
					h2{
						font-size: 20px;
						color: #291b1d;
						text-align: center;
						margin:0;
					}
					h3{
						font-size: 20px;
						color: #291b1d;
						text-align: center;
					}
				}
				.icon{
					background-image: url('../assets/ScrapPrize/gift.png');
					background-size: cover;
					background-position: center;
					 background-repeat: no-repeat;
					height: 0;
					padding-bottom: 56%;
					position: absolute;
					width: 80%;
					left: 50%;
					margin-left: -40%;
					top: 72%;
				}
			}
			.twoBox{
				width: 34%;
				height: 0;
				padding-bottom: 22%;
				background-color: #e3e3e3;
				position: relative;
				.textBox{
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					padding-top: 30px;
					// position: relative;
					h1{
						font-size: 30px;
						color: #291b1d;
						font-weight: bold;
						text-align: center;
					}
					h2{
						font-size: 20px;
						color: #291b1d;
						text-align: center;
						margin:0;
					}
					h3{
						font-size: 20px;
						color: #291b1d;
						text-align: center;
					}
				}
				.icon{
					background-image: url('../assets/ScrapPrize/mode.png');
					background-size: 153%;
					background-position: center;
					background-repeat: no-repeat;
					height: 0;
					padding-bottom: 74%;
					position: absolute;
					width: 80%;
					left: 50%;
					margin-left: -40%;
					top: 63%;
				}
			}
			.threeBox{
				width: 34%;
				height: 0;
				padding-bottom: 22%;
				background-color: #f2f2f2;
				position: relative;
				.textBox{
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					padding-top: 30px;
					// position: relative;
					h1{
						font-size: 30px;
						color: #291b1d;
						font-weight: bold;
						text-align: center;
					}
					h2{
						font-size: 20px;
						color: #291b1d;
						text-align: center;
						margin:0;
					}
					h3{
						font-size: 20px;
						color: #291b1d;
						text-align: center;
					}
				}
				.icon{
					background-image: url('../assets/ScrapPrize/voucher.png');
					background-size: cover;
					background-position: center;
					 background-repeat: no-repeat;
					height: 0;
					padding-bottom: 56%;
					position: absolute;
					width: 80%;
					left: 50%;
					margin-left: -40%;
					top: 72%;
				}
			}
			.fourBox{
				width: 34%;
				height: 0;
				padding-bottom: 22%;
				background-color: #e3e3e3;
				position: relative;
				.textBox{
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					padding-top: 30px;
					// position: relative;
					h1{
						font-size: 30px;
						color: #291b1d;
						font-weight: bold;
						text-align: center;
					}
					h2{
						font-size: 20px;
						color: #291b1d;
						text-align: center;
						margin:0;
					}
					h3{
						font-size: 20px;
						color: #291b1d;
						text-align: center;
					}
				}
				.icon{
					background-image: url('../assets/ScrapPrize/badge.png');
					background-size: 100%;
					background-position: center;
					 background-repeat: no-repeat;
					height: 0;
					padding-bottom: 56%;
					position: absolute;
					width: 100%;
					// left: 50%;
					// margin-left: -40%;
					top: 63%;
				}
			}
		}
	}
	.el-carousel{
		display: none;
	}
	.codeBox{
		width:100%;
		position: relative;
		margin: 20% auto 10%;
		.inputBox{
			display: flex;
			justify-content:center;
			input{
				color: #333333;
				font-size: 14px;
				text-align: center;
				width: 490px;
				border: none;
				background-color:#999999;
				margin-right: 4px;
				&:focus {
					outline: none;
					background-color: #ccc;
				}
			}
			.bt{
				color: #333333;
				font-size: 14px;
				text-align: center;
				background-color: #ffd602;
				width:80px;
				height: 60px;
				line-height: 60px;
				font-weight: bold;
				cursor: pointer;
			}
		}
		p{
			color: #666666;
			font-size: 16px;
			text-decoration: underline;
			text-align: center;
			margin-top:2%;
		}
	}
	.moreBox{
		background-image: url('../assets/ScrapPrize/more.png');
		background-size: cover;
		background-position: center;
		height: 0;
		padding-bottom: 38%;
		width: 85%;
		margin: auto;
		margin-bottom:10%;
		p{
			color: #fff;
			font-size: 36px;
			text-decoration: underline;
			text-align: center;
			padding-top:19%;
		}
	}
}
@media (max-width:1510px){
	.scrap-prize{
		.bannerBox{
			.Boxs{
				.oneBox{
					.textBox{
						padding-top:20px;
						h1{
							font-size: 28px;
						}
						h2{
							font-size: 18px;
						}
						h3{
							font-size: 18px;
						}
					}
					.icon{
						background-size: 90%;
					}
				}
				.twoBox{
					.textBox{
						padding-top:20px;
						h1{
							font-size: 28px;
						}
						h2{
							font-size: 18px;
						}
						h3{
							font-size: 18px;
						}
					}
					.icon{
						background-size: 153%;
					}
				}
				.threeBox{
					.textBox{
						padding-top:20px;
						h1{
							font-size: 28px;
						}
						h2{
							font-size: 18px;
						}
						h3{
							font-size: 18px;
						}
					}
					.icon{
						background-size: 90%;
					}
				}
				.fourBox{
					.textBox{
						padding-top:20px;
						h1{
							font-size: 28px;
						}
						h2{
							font-size: 18px;
						}
						h3{
							font-size: 18px;
						}
					}
					.icon{
						background-size: 90%;
					}
				}
			}
			.moreBox{
				p{
					font-size: 32px;
				}
			}
		}
		.el-carousel{
			display: none;
		}
	}
}
@media (max-width:1360px){
	.scrap-prize{
		.bannerBox{
			.textsBox{
				p{
					font-size: 17px;
				}
			}
			.Boxs{
				.oneBox{
					.textBox{
						padding-top:15px;
						h1{
							font-size: 26px;
						}
						h2{
							font-size: 16px;
						}
						h3{
							font-size: 16px;
						}
					}
					.icon{
						background-size: 80%;
					}
				}
				.twoBox{
					.textBox{
						padding-top:15px;
						h1{
							font-size: 26px;
						}
						h2{
							font-size: 16px;
						}
						h3{
							font-size: 16px;
						}
					}
					.icon{
						background-size: 153%;
					}
				}
				.threeBox{
					.textBox{
						padding-top:15px;
						h1{
							font-size: 26px;
						}
						h2{
							font-size: 16px;
						}
						h3{
							font-size: 16px;
						}
					}
					.icon{
						background-size: 80%;
					}
				}
				.fourBox{
					.textBox{
						padding-top:15px;
						h1{
							font-size: 26px;
						}
						h2{
							font-size: 16px;
						}
						h3{
							font-size: 16px;
						}
					}
					.icon{
						background-size: 80%;
					}
				}
			}
			.el-carousel{
				display: none;
			}
			.moreBox{
				p{
					font-size: 30px;
				}
			}
		}
	}
}
@media (max-width:1200px){
	.scrap-prize{
		.bannerBox{
			.textsBox{
				p{
					font-size: 16px;
				}
			}
			.Boxs{
				.oneBox{
					.textBox{
						padding-top:10px;
						h1{
							font-size: 24px;
						}
						h2{
							font-size: 14px;
						}
						h3{
							font-size: 14px;
						}
					}
					.icon{
						background-size: 70%;
					}
				}
				.twoBox{
					.textBox{
						padding-top:10px;
						h1{
							font-size: 24px;
						}
						h2{
							font-size: 14px;
						}
						h3{
							font-size: 14px;
						}
					}
					.icon{
						background-size: 153%;
					}
				}
				.threeBox{
					.textBox{
						padding-top:10px;
						h1{
							font-size: 24px;
						}
						h2{
							font-size: 14px;
						}
						h3{
							font-size: 14px;
						}
					}
					.icon{
						background-size: 70%;
					}
				}
				.fourBox{
					.textBox{
						padding-top:10px;
						h1{
							font-size: 24px;
						}
						h2{
							font-size: 14px;
						}
						h3{
							font-size: 14px;
						}
					}
					.icon{
						background-size: 70%;
					}
				}
			}
		}
		.el-carousel{
			display: none;
		}
		.codeBox{
			.inputBox{
				input{
					font-size: 14px;
					width: 490px;
				}
				.bt{
					font-size: 14px;
					width:80px;
					height: 60px;
					line-height: 60px;
				}
			}
			p{
				font-size: 16px;
				margin-top:2%;
			}
		}
		.moreBox{
			p{
				font-size: 28px;
			}
		}
	}
}
@media (max-width:992px){
	.scrap-prize{
		.bannerBox{
			background-image: url('../assets/ScrapPrize/bg2.jpg');   
			padding-bottom:100%;
			margin-bottom: 0;
			.textsBox{
				padding:0;
				padding-top:20px;
				.text{
					background-image: url('../assets/ScrapPrize/text2.png');   
					padding-bottom:46%;
				}
				p{
					font-size: 15px;
				}
			}
			.Boxs{
				display: none;
				.oneBox{
					.textBox{
						padding-top:10px;
						h1{
							font-size: 24px;
						}
						h2{
							font-size: 14px;
						}
						h3{
							font-size: 14px;
						}
					}
					.icon{
						background-size: 70%;
					}
				}
				.twoBox{
					.textBox{
						padding-top:10px;
						h1{
							font-size: 24px;
						}
						h2{
							font-size: 14px;
						}
						h3{
							font-size: 14px;
						}
					}
					.icon{
						background-size: 153%;
					}
				}
				.threeBox{
					.textBox{
						padding-top:10px;
						h1{
							font-size: 24px;
						}
						h2{
							font-size: 14px;
						}
						h3{
							font-size: 14px;
						}
					}
					.icon{
						background-size: 70%;
					}
				}
				.fourBox{
					.textBox{
						padding-top:10px;
						h1{
							font-size: 24px;
						}
						h2{
							font-size: 14px;
						}
						h3{
							font-size: 14px;
						}
					}
					.icon{
						background-size: 70%;
					}
				}
			}
		}
		.codeBox{
			margin:13% auto 10%;
			.inputBox{
				width:70%;
				margin-left: 15%;
				input{
					font-size: 14px;
					width: 490px;
					font-size: 13px;
					width:76%;
				}
				.bt{
					font-size: 14px;
					width:20%;
					height: 50px;
					line-height: 50px;
				}
			}
			p{
				font-size: 13px;
				margin-top:5%;
			}
		}
		.el-carousel{
			display: block;
			margin-bottom:10%;
			&__item{
				.oneBox,.twoBox,.threeBox,.fourBox{
					background-color: #f2f2f2;
				}
				.oneBox{
					width: 100%;
					height: 0;
					padding-bottom: 90%;
					background-color: #f2f2f2;
					position: relative;
					.textBox{
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						padding-top: 10px;
						// position: relative;
						h1{
							font-size: 25px;
							color: #291b1d;
							font-weight: bold;
							text-align: center;
							margin:10px auto;
						}
						h2{
							font-size: 15px;
							color: #291b1d;
							text-align: center;
							margin:0;
						}
						h3{
							font-size: 15px;
							color: #291b1d;
							text-align: center;
							margin:10px auto;
						}
					}
					.icon{
						background-image: url('../assets/ScrapPrize/gift.png');
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						height: 0;
						padding-bottom: 56%;
						position: absolute;
						width: 80%;
						left: 50%;
						margin-left: -40%;
						top: 72%;
					}
				}
				.twoBox{
					width: 100%;
					height: 0;
					padding-bottom: 90%;
					background-color: #e3e3e3;
					position: relative;
					.textBox{
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						padding-top: 10px;
						// position: relative;
						h1{
							font-size: 25px;
							color: #291b1d;
							font-weight: bold;
							text-align: center;
							margin:10px auto;
						}
						h2{
							font-size: 15px;
							color: #291b1d;
							text-align: center;
							margin:0;
						}
						h3{
							font-size: 15px;
							color: #291b1d;
							text-align: center;
							margin:10px auto;
						}
					}
					.icon{
						background-image: url('../assets/ScrapPrize/mode.png');
						background-size: 140%;
						background-position: center;
						background-repeat: no-repeat;
						height: 0;
						padding-bottom: 65%;
						position: absolute;
						width: 80%;
						left: 50%;
						margin-left: -40%;
						top: 63%;
					}
				}
				.threeBox{
					width: 100%;
					height: 0;
					padding-bottom: 90%;
					background-color: #f2f2f2;
					position: relative;
					.textBox{
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						padding-top: 10px;
						// position: relative;
						h1{
							font-size: 25px;
							color: #291b1d;
							font-weight: bold;
							text-align: center;
							margin:10px auto;
						}
						h2{
							font-size: 15px;
							color: #291b1d;
							text-align: center;
							margin:0;
						}
						h3{
							font-size: 15px;
							color: #291b1d;
							text-align: center;
							margin:10px auto;
						}
					}
					.icon{
						background-image: url('../assets/ScrapPrize/voucher.png');
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						height: 0;
						padding-bottom: 56%;
						position: absolute;
						width: 80%;
						left: 50%;
						margin-left: -40%;
						top: 72%;
					}
				}
				.fourBox{
					width: 100%;
					height: 0;
					padding-bottom: 90%;
					background-color: #e3e3e3;
					position: relative;
					.textBox{
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						padding-top: 10px;
						// position: relative;
						h1{
							font-size: 25px;
							color: #291b1d;
							font-weight: bold;
							text-align: center;
							margin:10px auto;
						}
						h2{
							font-size: 15px;
							color: #291b1d;
							text-align: center;
							margin:0;
						}
						h3{
							font-size: 15px;
							color: #291b1d;
							text-align: center;
							margin:10px auto;
						}
					}
					.icon{
						background-image: url('../assets/ScrapPrize/badge.png');
						background-size: 100%;
						background-position: center;
						background-repeat: no-repeat;
						height: 0;
						padding-bottom: 56%;
						position: absolute;
						width: 100%;
						// left: 50%;
						// margin-left: -40%;
						top: 63%;
					}
				}
			}
		}
		.moreBox{
			background-image: url('../assets/ScrapPrize/more2.png');   
			width:100%;
			margin-bottom: 0;
			p{
				font-size: 18px;
				padding-top:15%;
			}
		}
	}
}
</style>