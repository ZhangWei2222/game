<template lang="pug">
	div.rb-act.collect-badge
		div.rb-act__bg
			div.rb-act__content
				img.collect-badge__title(src='static/img/collect-title.png')
				img.collect-badge__title_mobile(src='static/img/collect-title-mobile.png')
				img.collect-badge__help(src='static/img/collect-help.png', @click='showRules = true')
				UserModal(v-if='showRules', @close='showRules = false')
					div(slot='content')
						p 活动规则
		div.rb-act__modules
			div.container
				div.row
					div.col-md-4
						div.rb-act__modules-item
							div.rb-act__modules-item-bg(style="background: url('static/img/challenge.png') center no-repeat; background-size: 100% 100%;")
							div.rb-act__modules-intro
								h1.rb-act__modules-intro-title 手速挑战
								router-link.rb-act__modules-intro-to(to='/practice/cstimer?type=speed') 进入活动
							div.rb-act__modules-link-bg
								div.rb-act__modules-link-intro
									h1 手速挑战
									p 参与红牛魔方世锦赛三大项目线上挑战，挑战1次，可获得<br />徽章1枚。
								router-link.rb-act__modules-link.app-button(to='/practice/cstimer?type=speed') 即刻挑战&nbsp;&nbsp;赢取徽章
					div.col-md-4
						div.rb-act__modules-item
							div.rb-act__modules-item-bg(style="background: url('static/img/thumbs-up.png') center no-repeat; background-size: 100% 100%;")
							div.rb-act__modules-intro
								h1.rb-act__modules-intro-title 为TA点赞
								router-link.rb-act__modules-intro-to(to='/thumbsup') 进入活动
							div.rb-act__modules-link-bg
								div.rb-act__modules-link-intro
									h1 为TA点赞
									p 68位各国赢家，将齐聚波士顿，角逐全球冠军。为你支持的选手点赞1次，可获得徽章1枚。
								router-link.rb-act__modules-link.app-button(to='/thumbsup') 即刻挑战&nbsp;&nbsp;赢取徽章
					div.col-md-4
						div.rb-act__modules-item
							div.rb-act__modules-item-bg(style="background: url('static/img/call.png') center no-repeat; background-size: 100% 100%;")
							div.rb-act__modules-intro
								h1.rb-act__modules-intro-title 召唤好友
								router-link.rb-act__modules-intro-to(to='/callfriend') 进入活动
							div.rb-act__modules-link-bg
								div.rb-act__modules-link-intro
									h1 召唤好友
									router-link.rb-act__modules-link-to(to='/callfriend') 进入活动
								router-link.rb-act__modules-link.app-button(to='/callfriend') 即刻挑战&nbsp;&nbsp;赢取徽章
</template>

<script>
import UserModal from '@/components/UserModal'

export default {
	data () {
		return {
			showRules: false
		}
	},
	components: {
		UserModal
	}
}
</script>

<style lang="scss">
@import '../style/rb-act';
@media (max-width:992px){
	.rb-act{
		&.collect-badge {
			.rb-act__bg {
				background: url('../../static/img/bg-mobile.png') center no-repeat !important;
				background-size: contain !important;
				padding: 0 0 105px !important;
			}
			.collect-badge__title {
				display: none;
			}
			.collect-badge__title_mobile{
				display : block !important;
				position: absolute;
				top: 44px;
				left: 50%;
				transform: translateX(-50%);
				width: 98%;
				height: auto;				
				z-index: 2;
			}
			.collect-badge__help{
				display : none;
			}
		}
		&__modules {
			top:0;
			.container{
				padding:0;
			}
			.row{
				display:flex;
			}
			.col-md-4{
				flex:1;
				margin:0;
				padding:0;
			}
			&-intro-title {
				font-size: 20px;
				line-height:35px;
			}
			&-intro-to{
				display:block !important;
				color:#fff;
				text-decoration: underline;
				font-size:14px;
			}
			&-intro{
				bottom:15px;
			}
		}
	}
}
</style>


