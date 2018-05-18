<template lang="pug">
  div.login-card
    el-form(:model='loginForm', :rules='loginRules', ref='loginForm')
      div.login-card__line-1
        el-form-item(prop='phone')
          el-input(
            type='text',
            v-model='loginForm.phone',
            placeholder='请输入手机号',
            :disabled='messageIsSent'
          )
      div.login-card__line-2
        el-form-item(prop='code')
          el-row
            el-col(:span='14')
              el-input(
                type='text',
                v-model='loginForm.code',
                placeholder='请输入验证码'
              )
            el-col(:span='10')
              el-button(:disabled='messageIsSent', @click='sendMessage') {{ messageIsSent ? countDown + 's' : '获取验证码'}}
      div.login-card__line-3
        el-form-item
          el-button(
            type='primary',
            @click="submitForm('loginForm')",
            v-if='!finished',
            :loading='loading'
          ) 登录
</template>

<script>
export default {
  data () {
    var phoneValidator = (rule, value, callback) => {
      if (/1[3|4|5|7|8][0-9]{9}(?![0-9])/.test(value)) {
        this.canSendMessage = true
        callback()
      } else {
        callback(new Error('请输入合法的手机号'))
      }
    }
    var codeValidator = (rule, value, callback) => {
      callback()
    }
    return {
      finished: false,
      loginForm: {
        phone: '',
        code: ''
      },
      loginRules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: phoneValidator, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入短信验证码', trigger: 'blur' },
          { validator: codeValidator, trigger: 'blur' }
        ]
      },
      canSendMessage: false,
      messageIsSent: false,
      countDown: 10,
      timer: '',
      loading: false
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          setTimeout(() => { // 模拟验证过程
            this.$message({
              message: '验证成功',
              type: 'success'
            })
            this.$emit('result', { msg: 'success' })
            this.finished = true
            this.loading = true
          }, 3000)
        } else {
          this.$message.error({message: '验证失败'})
        }
      })
    },
    sendMessage () {
      // 未填写手机号的情况
      if (!this.canSendMessage) {
        return false
      }
      console.log('发送短信')
      this.messageIsSent = true
      this.startCount()
    },
    startCount () {
      this.timer = setInterval(() => {
        if (this.countDown === 1) {
          clearInterval(this.timer)
          this.messageIsSent = false
          this.countDown = 10
        }
        this.countDown--
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
.login-card {
  margin-top: 30px;
  &__line-2 {
    .el-col-10 {
      padding-left: 20px;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>
