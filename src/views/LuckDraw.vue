<template lang="pug">
  div.luck-draw
      div.luck-draw__step-wrapper
        el-steps(:active='active', finish-status='success')
          el-step(title='步骤 1')
          el-step(title='步骤 2')
          el-step(title='步骤 3')
      div.luck-draw__content-wrapper
        div.luck-draw__content-item(v-if='active === 0')
          h1.luck-draw__content-title 手机号验证
          LoginCard(@result='handleLoginResult')
        div.luck-draw__content-item(v-if='active === 1')
          h1.luck-draw__content-title 刮刮卡验证
          div.luck-draw__code-validate
            el-form(:model='luckDrawForm', :rules='luckDrawRules')
              el-form-item(:prop='code')
                el-row
                  el-col(:span='14')
                    el-input(
                      type='text',
                      v-model='luckDrawForm.code',
                      placeholder='请输入刮刮卡号码'
                    )
                  el-col(:span='10')
                    el-button(@click='submitLuckDrawCode') {{ rightLuckDraw ? '验证通过 ' : '验证' }}
                      i.fa.fa-check(v-if='rightLuckDraw')
        div.luck-draw__content-item(v-if='active === 2')
          h1.luck-draw__content-title 开始刮卡
          ScratchCard
      div.luck-draw__content-controler
        el-button(@click='next', v-if='finished') 下一步
</template>

<script>
import LoginCard from '@/components/LoginCard'
import ScratchCard from '@/components/ScratchCard'

export default {
  data () {
    return {
      active: 0,
      finished: false,
      luckDrawForm: {
        code: ''
      },
      luckDrawRules: {
        code: [
          { required: true, message: '请输入刮刮卡号码' }
        ]
      },
      rightLuckDraw: false
    }
  },
  components: {
    LoginCard,
    ScratchCard
  },
  methods: {
    next () {
      this.active++
      this.finished = false
    },
    handleLoginResult (result) {
      console.log('验证中', result.msg)
      if (result.msg === 'success') {
        this.finished = true
      }
    },
    submitLuckDrawCode () {
      this.rightLuckDraw = true
      this.finished = true
    }
  }
}
</script>

<style lang="scss">
.luck-draw {
  padding: 24px;
  &__content-wrapper {
    margin-top: 30px;
  }
  &__code-validate {
    .el-col-10 {
      padding-left: 20px;
    }
    .el-button {
      width: 100%;
      i {
        color: #67c23a;
      }
    }
  }
}
</style>
