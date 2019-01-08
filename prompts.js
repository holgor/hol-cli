const plugins = [
  'router',
  'vuex',
  'qs+axios',
  'cookies+token',
  'fastclick',
  'lib-flexible+postcss-pxtorem'
]

module.exports = [
  {
    name: 'plugins',
    type: 'checkbox',
    message: '请选择使用的插件（多选）',
    choices: plugins.map(v => {
      return {
        name: v,
        value: v,
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
