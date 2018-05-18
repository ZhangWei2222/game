<template lang="pug">
  div.register
    el-form.register__form(:model='registerForm', :rules='registerRules', ref='registerForm')
      el-form-item(prop='username')
        div.login__form-icon
          img(src='static/img/icon-user.png')
        el-input(
          type='text',
          v-model='registerForm.username',
          placeholder='用户名'
        )
      el-form-item(prop='email')
        div.login__form-icon
          img(src='static/img/icon-email.png')
        el-input(
          type='text',
          v-model='registerForm.email',
          placeholder='邮箱'
        )
      el-form-item(prop='password')
        div.login__form-icon
          img(src='static/img/icon-pass.png')
        el-input(
          type='password',
          v-model='registerForm.password',
          placeholder='密码'
        )
      el-form-item(prop='passwordAgain')
        div.login__form-icon
          img(src='static/img/icon-pass.png')
        el-input(
          type='password',
          v-model='registerForm.passwordAgain',
          placeholder='确认密码',
          @keyup.enter.native='submitForm()'
        )
      el-form-item
        el-button(
          type='primary',
          @click='submitForm()',
          :loading='loading'
        ) 提交
</template>

<script>
import Api from '@/apis'
import { addCookie, getCookie } from '@/util/cookie'

const COOKIE_NAME = 'gancube_logged'

export default {
  data () {

    var emailValidator = (rule, value, callback) => {
      if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)) {
        callback()
      } else {
        callback(new Error('请输入正确的邮箱'))
      }
    }

    var passwordValidator = (rule, value, callback) => {
      if (value === this.registerForm.password) {
        callback()
      } else {
        callback(new Error('两次输入的密码不一致'))
      }
    }
  
    return {

      registerForm: {
        username: '',
        email: '',
        password: '',
        passwordAgain: '',
      },

      registerRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { validator: emailValidator, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 8, max: 16, message: '密码长度为8-16位字符', trigger: 'blur'}
        ],
        passwordAgain: [
          { required: true, message: '请确认密码', trigger: 'blur' },
          { validator: passwordValidator, trigger: 'blur' }
        ]
      },

      loading: false

    }
  },

  methods: {

    submitForm () {
      this.loading = true
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          this.sendRegisterInfo()
        } else {
          this.loading = false
        }
      })
    },

    sendRegisterInfo () {
      Api.getNonce('register').then(res => {
        const { password, email, username } = this.registerForm
        const info = {
          user_pass: password,
          email: email,
          username: username,
          display_name: this.registerForm.username,
          nonce: res.data.nonce
        }
        console.log(info)
        Api.sendUserInfo(info).then(res => {
          console.log(res)
          if (res.data.status && res.data.status === 'ok') {
            const params = {
              username: this.registerForm.username,
              password: this.registerForm.password
            }
            Api.generateAuthCookie(params).then(res => {
              if (res.data.status === 'ok') {
                addCookie(COOKIE_NAME, res.data.cookie, 336) // 保留14天
                this.loading = false
                this.$emit('success')
              } else {
                this.$alert('自动登录失败，请手动登录', '提示', {
                  confirmButtonText: '确定',
                  callback: action => {
                    this.$emit('success')
                  }
                })
              }
            }).catch(err => {
              console.log(err)
            })
          }
        }).catch(err => {
          if (err.response) {
            this.$alert(err.response.data.error, '注册失败', {
              confirmButtonText: '确定'
            })
          } else {
            console.log(err.message)
          }
          this.loading = false
        })
      })
    },

    // autoLogin () {
    //   const cookie = getCookie(COOKIE_NAME)
    //   Api.validateCookie(cookie).then(res => {
    //     console.log(res)
    //   })
    // },

    initForm () {
      this.registerForm.username = ''
      this.registerForm.email = ''
      this.registerForm.password = ''
    }
  }
}
</script>

<style lang="scss">
.register {
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
  .register {
    .el-form-item {
      margin-bottom: 20px;
    }
    .el-input__inner {
      height: 40px;
    }
    .el-button {
      margin-top: 0px;
      height: 35px;
      line-height:0;
    }
  }
}
</style>
