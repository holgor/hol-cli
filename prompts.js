const plugins = [
  {
    name: 'router（Vue.js官方的路由管理器，实现SPA应用）',
    value: 'router'
  },
  {
    name: 'vuex（Vue.js官方的状态管理器，实现全局数据状态管理）',
    value: 'vuex'
  },
  {
    name: 'qs+axios（qs:请求参数处理器，axios:http请求框架）',
    value: 'qs+axios'
  },
  {
    name: 'cookies+token（使用cookies管理权限令牌）',
    value: 'cookies+token'
  },
  {
    name: 'fastclick（移动端点击响应优化）',
    value: 'fastclick'
  },
  {
    name: 'lib-flexible+postcss-pxtorem（移动端响应式+自适应方案）',
    value: 'lib-flexible+postcss-pxtorem'
  },
  {
    name: 'vee-validate（vue表单验证插件）',
    value: 'vee-validate'
  }
]

module.exports = [
  {
    name: 'plugins',
    type: 'checkbox',
    message: '请选择使用的插件（多选）',
    choices: plugins.map(v => {
      return {
        ...v,
        checked: true
      }
    })
  },
  {
    name: 'cssPreprocessor',
    type: 'list',
    message: `请选择一个css预处理器`,
    choices: [
      {
        name: 'sass',
        value: 'sass',
        short: 'sass'
      },
      {
        name: 'less',
        value: 'less',
        short: 'less'
      },
      {
        name: 'stylus',
        value: 'stylus',
        short: 'stylus'
      }
    ]
  },
  {
    name: 'dependencies',
    type: 'checkbox',
    message: '请选择使用的依赖（多选）',
    choices: [
      {
        name: 'moment （常用时间字符串处理工具）',
        value: {
          name: 'moment',
          version: '^2.23.0'
        }
      },
      {
        name: 'weixin-js-sdk （微信网页jsSDK）',
        value: {
          name: 'weixin-js-sdk',
          version: '^1.4.0-test'
        }
      }
    ]
  }
]
