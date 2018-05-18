<template lang="pug">
  div.login
    div.login-wx(v-if='loginByWX')
      div(style='text-align: center')
        div#qr-code
        img.qr-code(src='http://via.placeholder.com/300x300', width='160', height='160')
      div.login-wx__guide
        div.login-wx__icon
        p 打开<span style='color: #44a8f2;'>微信</span><br />扫一扫登录
      span.login-wx__link 密码登录
    div.reset-pass(v-if='resetPass')
      div(v-if='!emailIsSend')
        h1 重置密码
        el-form.login__form(:rules='resetRules', :model='resetForm')
          el-form-item(prop='email')
            div.login__form-icon
              img(src='static/img/icon-email.png')
            el-input(
              type='text',
              v-model='resetForm.email',
              placeholder='请输入你的邮箱'
            )
          el-form-item
            el-button(
              type='primary',
              @click='sendEmail',
              :loading='resetLoading'
            ) 重置
      div.reset-pass__sent(v-else)
        p 重置密码的邮件已经发送至您的邮箱<br />请前往邮箱修改密码
    div.login-tra(v-else)
      el-form.login__form(:model='loginForm', :rules='loginRules', ref='loginForm')
        el-form-item(prop='username')
          div.login__form-icon
            img(src='static/img/icon-user.png')
          el-input(
            type='text',
            v-model='loginForm.username',
            placeholder='用户名/邮箱',
            @keyup.enter.native='submitForm()'
          )
        el-form-item(prop='password')
          div.login__form-icon
            img(src='static/img/icon-pass.png')
          el-input(
            type='password',
            v-model='loginForm.password',
            placeholder='密码',
            @keyup.enter.native='submitForm()'
          )
        div.login__form-wechat(@click='openWxLogin')
          img(src='static/img/wechat.png')
          span 微信登录
        el-form-item
          el-button(
            type='primary',
            @click='submitForm()',
            :loading='loading'
          ) 确定
        span.forgot-pass(@click='resetPass = true') 忘记密码
        div.login__form-wechat-mobile(@click='openWxLogin' style='display:none')
          div.line.line-1
          div.weiBox
            img(src='static/img/wechat.png')
            span 微信登录
          div.line.line-2

        
</template>

<script>
import Api from '@/apis'
import { addCookie } from '@/util/cookie'
import axios from 'axios'

const COOKIE_NAME = 'gancube_logged'
const APPID = 'wx924aef0bb0c188c8'
const SECRET = 'e50b92d2526f56a7f43ace2c30c075c7'
const REDIRECT_URI = window.location.href

export default {

  data () {
    var emailValidator = (rule, value, callback) => {
      if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)) {
        callback()
      } else {
        callback(new Error('请输入正确的邮箱'))
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      resetForm: {
        email: ''
      },
      loginRules: {
        username: { required: true, message: '请输入用户名', trigger: 'blur' },
        password: { required: true, message: '请输入密码', trigger: 'blur' }
      },
      resetRules: {
        email:[
          { required: true, message: '请输入正确格式的邮箱', trigger: 'blur' },
          { validator: emailValidator, trigger: 'blur' }
        ]
      },
      loading: false,
      loginByWX: false,
      resetPass: false,
      emailIsSend: false,
      resetLoading: false
    }
  },
  methods: {
    openWxLogin () {
      window.open(`https://open.weixin.qq.com/connect/qrconnect?appid=${APPID}&redirect_uri=${this.urlEncode('https://www.gancube.com/wp-content/on-pack-promo/')}&response_type=code&scope=snsapi_login#wechat_redirect`)
    },

    submitForm () {
      this.loading = true
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.sendLoginInfo()
        } else {
          this.loading = false
        }
      })
    },

    urlEncode (str) {
      return escape(str).replace(/\+/g, '%2B').replace(/\"/g,'%22').replace(/\'/g, '%27').replace(/\//g,'%2F');  
    },

    sendLoginInfo () {
      let params
      if (/\@/.test(this.loginForm.username)) {
        params = {
          email: this.loginForm.username,
          password: this.loginForm.password,
          // 同时在WP上登录
          signin: 1,
          remember: 1
        }
      } else {
        params = {
          ...this.loginForm,
          // 同时在WP上登录
          signin: 1,
          remember: 1
        }
      }
      Api.generateAuthCookie(params).then(res => {
        if (res.data.status === 'ok') {
          addCookie(COOKIE_NAME, res.data.cookie, 336) // 保留14天
          this.$emit('success')
          this.loading = false
        } else {
          this.$alert('用户名或密码错误', '提示', {
            confirmButtonText: '确定'
          })
          this.loading = false
        }
      })
    },

    sendEmail () {
      this.resetLoading = true
      Api.retrievePassword(this.resetForm.email).then(res => {
        this.resetLoading = false
        if (res.data.status === 'ok') {
          this.emailIsSend = true
        } else {
          this.$alert('该邮箱不存在', '提示', {
            confirmButtonText: '确定'
          })
        }
      }).catch(err => {
        this.resetLoading = false
        this.$alert('该邮箱不存在', '提示', {
          confirmButtonText: '确定'
        })
      })
    },

    initForm () {
      this.loginForm.username = ''
      this.loginForm.password = ''
    }
  }
}
</script>

<style lang="scss">
.forgot-pass {
  float: right;
  margin-bottom: 40px;
  cursor: pointer;
}
.reset-pass {
  &__sent {
    p {
      font-size: 16px;
      text-align: center;
      line-height: 2em;
      margin: 40px 0 60px;
    }
  }
}
.login {
  &-wx {
    &__guide {
      margin-top: 25px;
      text-align: center;
      margin-bottom: 40px;
    }
    &__icon {
      width: 28px;
      height: 28px;
      background: url('../assets/common/qrcode-guide.png') center no-repeat;
      background-size: 100% 100%;
      display: inline-block;
      margin-right: 12px;
    }
    &__link {
      float: right;
      margin-bottom: 40px;
      cursor: pointer;
    }
    p {
      display: inline-block;
      text-align: left;
    }
  }
  &__form {
    &-wechat {
      line-height: 22px;
      cursor: pointer;
      img {
        height: 22px;
        margin-right: 6px;
      }
      span {
        color: #414141;
        font-size: 14px;
      }
    }
    .el-form-item {
      margin-bottom: 30px;
    }
    .el-input__inner {
      border-radius: 0;
      height: 50px;
      padding-left: 60px;
    }
    .el-button {
      border-radius: 0;
      height: 50px;
      width: 100%;
      margin-top: 40px;
      background-color: #ffd602;
      border: none;
      color: #333;
      font-weight: bold;
      font-size: 20px;
      &:focus {
        outline: none;
      }
    }
    &-icon {
      height: 48px;
      width: 48px;
      line-height: 48px;
      text-align: center;
      position: absolute;
      left: 1px;
      top: 1px;
      background-color: #ccc;
      z-index: 2;
    }
  }
}

@media (max-width:992px) {
  .forgot-pass {
    margin-bottom: 20px;
    color: #ccc;
    text-align: right;
  }
  .login {
    &__form {
      display:flex;
      flex-direction: column;
      &-wechat {
        display: none;
      }
      &-wechat-mobile {
        display: flex !important;
        .line {
          width: 72px;
          height: 2px;
          display: inline-block;
          position: relative;
          top: 15px;
          background-color: #ccc;
        }
        .weiBox{
          display:flex;
          flex-direction: column;
          align-items: center;
          img{
            width:60%;
          }
          span{
            font-size: 14px;
            color:#ccc;
            margin-top: 5px;
          }
        }
      }
      .el-form-item {
        margin-bottom: 20px;
      }
      .el-form-item {
        margin-bottom: 20px;
      }
      .el-input__inner {
        height: 40px;
      }
      .el-button {
        height: 35px;
        line-height: 13px;
        width: 100%;
        margin-top: 10px;
        font-size: 17px;
      }
      &-icon {
        width : 40px;
        height: 40px;
        line-height: 40px;
        left:0;
        top:0;
      }
    }
  }
}
</style>
