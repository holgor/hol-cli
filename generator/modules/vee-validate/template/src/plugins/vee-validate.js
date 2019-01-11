import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate, {
  errorBagName: 'veeErrors', // 重写errorBagName命名空间 以防与其他框架混淆
  dictionary: {
    chinese: {
      // 自定义自带检验规则的错误提示
      messages: {
        // TODO 需补全所有规则
        min: (field, n) => `${field}至少${n}位`,
        required: field => `${field}不能为空`,
        mobile: field => `${field}不符合手机规则`
      }
    }
  }
})

VeeValidate.Validator.extend('mobile', {
  validate: value => /^1[34578]\d{9}$/.test(value.trim())
})

VeeValidate.Validator.localize('chinese')
