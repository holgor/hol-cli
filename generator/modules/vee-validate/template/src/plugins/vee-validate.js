import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate, {
  errorBagName: 'veeErrors', // 重写errorBagName命名空间 以防与其他框架混淆
  dictionary: {
    chinese: {
      // 自定义自带检验规则的错误提示
      messages: {
        // 例：根据项目需要补全规则翻译
        alpha: field => `${field}只能由英文字母组成`,
        alpha_dash: field => `${field}只能由英文字母和下划线组成`,
        alpha_num: field =>  `${field}只能由英文字母和数字组成`,
        alpha_spaces: field => `${field}只能由英文字母和空格组成`,
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
