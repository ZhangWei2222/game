<template lang="pug">
 div.site-header__wrapper
  div.row
    div.container
      router-link(to='/')
        img.site-header__logo(src='./images/header-logo.png')
        img.site-header__logo-mb(src='https://www.gancube.com/wp-content/uploads/2017/12/logo_02-1.png')
      ul.site-header__menu
        li.site-header__menu-item 产品
        li.site-header__menu-item RSC
        li.site-header__menu-item 世界纪录
        li.site-header__menu-item 服务与支持
      div.site-header__right-menu
        div.site-header__store.site-header__right-menu-item
          span 商店
          img(src='./images/nav-shop-icon.svg')
        router-link(to='/login')
          div.site-header__lang.site-header__right-menu-item
            img(src='./images/language-icon.svg')
            span 简体中文
        div.site-header__user.site-header__right-menu-item(@click='modalShow = true', v-if="userDisplayname === ''")
          i.fa.fa-user-o
          span 登录
        div.site-header__user.site-header__right-menu-item(v-else)
          el-dropdown
            span.el-dropdown-link
              i.fa.fa-user-o
              span {{ userDisplayname }}
            el-dropdown-menu(slot='dropdown')
              el-dropdown-item 我的钱包
              el-dropdown-item
                div(@click='cancelLogin()') 注销
  div.user-modal__wrapper(v-if='modalShow')
    div.user-modal
      i.user-modal__close.fa.fa-times-circle-o(@click='modalShow = false')
      div.user-modal__tab
        span.user-modal__tab-item(:class="{active: activeTab === 1}", @click='activeTab = 1') 登录
        span.user-modal__tab-item(:class="{active: activeTab === 2}", @click='activeTab = 2') 注册
      div.user-modal__content
        Login(v-if='activeTab === 1', @success='getLoginInfo')
        Register(v-if='activeTab === 2', @success='getLoginInfo')

</template>

<script>
import { mapActions, mapState } from 'vuex'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Api from '@/apis'
import { getCookie, delCookie, addCookie } from '@/util/cookie'
import axios from 'axios'

const COOKIE_NAME = 'gancube_logged'

export default {

  data () {
    return {
      activeTab: 1,
      modalShow: false,
      // userInfo: {},
      userDisplayname: '',
      loading: false,
      code: ''
    }
  },

  mounted () {
    // 第一步 验证是否为微信用户
    const search = window.location.search
    let code = null
    if (search !== '') {
      code = search.split('?')[1].split('=')[1]
    }
    if (code !== null) {
      Api.generateAuthCookieByWechat(code).then(res => {
        if (res.data.status === 'ok') {
          addCookie(COOKIE_NAME, res.data.cookie, 336)
          this.getLoginInfo()
          return false
        }
      })
    }
    // // 第二步 验证是否为wp用户
    let info = {}
    Api.refreshAuthCookie(info).then(res => {
      console.log(res)
      if (res.data.status === 'ok') {
        addCookie(COOKIE_NAME, res.data.cookie, 336)
      }
      this.getLoginInfo()
    }).catch(err => {
      console.log(err)
      // 第三步 验证本地是否有cookie
      this.getLoginInfo()
    })
  },

  methods: {

    ...mapActions([
      'setUserInfo',
      'initUserInfo'
    ]),

    cancelLogin () {
      this.setUserInfo(null)
      this.userDisplayname = ''
      delCookie('gancube_logged')
    },

    getLoginInfo () {
      const cookie = getCookie('gancube_logged')
      if (!cookie) {
        return false
      }
      Api.getCurrentuserinfo(cookie).then(res => {
        if (res.data.status === 'ok') {
          this.setUserInfo(res.data.user)
          // this.userInfo = res.data.user
          this.modalShow = false
          this.userDisplayname = res.data.user.displayname
        }
      }).catch(err => {
        console.log(err)
      })
    }

  },

  computed: {
    ...mapState({
      userInfo: state => {
        return state.app.userInfo
      }
    })
  },

  components: {
    Login,
    Register
  }

}
</script>

<style lang="scss">
@import '../style/user-modal';

.site-header {

  &__wrapper {
    z-index: 99;
    position: relative;
    // border-bottom: 1px solid #000;
    height: 56px;
  }

  &__logo {
    width: 96px;
    height: auto;
    float: left;
    margin-right: 24px;
    position: absolute;
    &-mb {
      display: none;
    }
  }

  &__menu {
    list-style: none;
    padding-left: 0;
    float: left;
    margin-left: 96px;
    margin-bottom: 0;
    margin-top: 0;
    &-item {
      display: inline-block;
      line-height: 56px;
      margin: 0 24px;
      font-size: 12px;
    }
  }

  &__right-menu {
    float: right;
    padding: 13px 0;
    &-item {
      display: inline-block;
      font-size: 12px;
      margin: 0 12px;
    }
    i {
      margin-right: 4px;
    }
  }

  &__store {
    background-color: #44a8f2;
    color: #fff;
    padding: 0 32px;
    height: 30px;
    line-height: 30px;
    border-radius: 2px;
    img {
      margin-right: 0;
      margin-left: 4px;
      height: 12px;
      width: auto;
      position: relative;
      top: -2px;
    }
  }

  &__lang {
    color: #333;
    img {
      height: 14px;
      width: auto;
      position: relative;
      top: -1px;
      margin-right: 4px;
    }
  }

  &__user {
    color: #333;
    cursor: pointer;
  }

}

@media (max-width: 992px) {
  .site-header {
    &__logo {
      display: none;
      &-mb {
        display: inline-block;
        height: 40px;
        width: auto;
        margin: 8px 0;
      }
    }
    &__menu {
      display: none;
    }
    &__store {
      display: none;
    }
    &__right-menu {
      padding: 18px 0;
    }
    &__lang {
      display: none;
    }
  }
}


</style>
