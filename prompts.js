// 公共插件 不分终端的 
const plugins = [{
    name: "router（Vue.js官方的路由管理器，实现SPA应用）",
    value: "router",
    checked: true
  },
  {
    name: "vuex（Vue.js官方的状态管理器，实现全局数据状态管理）",
    value: "vuex",
    checked: true
  },
  {
    name: "qs+axios（qs:请求参数处理器，axios:http请求框架）",
    value: "qsAxios",
    checked: true
  },
  {
    name: "cookies+token（使用cookies管理权限令牌）",
    value: "cookiesToken",
    checked: true
  },
  {
    name: "vee-validate（vue表单验证插件）",
    value: "vee-validate",
    checked: true
  },
  {
    name: "echarts（图表、数据可视化）",
    value: "echarts"
  },
  {
    name: "高德地图（高德地图引擎）",
    value: "aMap"
  },
  {
    name: "百度地图（百度地图引擎）",
    value: "bMap"
  }
]

// 移动端专用插件
const mobilePlugins = [{
    name: "fastclick（移动端点击响应优化）",
    value: "fastclick",
    checked: true
  },
  {
    name: "lib-flexible+postcss-pxtorem（移动端响应式+自适应方案）",
    value: "flexibleRem",
    checked: true
  }
]

// PC端专用插件
const PCPlugins = [{
  name: "element-ui 组件库",
  value: "element-ui",
  checked: true
}]


module.exports = [{
    name: "plugins",
    type: "checkbox",
    message: "请选择使用的插件（多选）",
    choices: plugins
  },
  {
    name: "cssPreprocessor",
    type: "list",
    message: `请选择一个css预处理器`,
    choices: [{
        name: "sass",
        value: "sass",
        short: "sass"
      },
      {
        name: "less",
        value: "less",
        short: "less"
      },
      {
        name: "stylus",
        value: "stylus",
        short: "stylus"
      }
    ]
  },
  {
    name: "runtimeConsole",
    type: "list",
    message: `项目终端类型`,
    choices: [{
        name: "移动端",
        value: "mobile"
      },
      {
        name: "PC端",
        value: "PC"
      }
    ]
  },
  {
    name: "mobliePlugins",
    type: "checkbox",
    message: "请选择使用的移动端插件（多选）",
    choices: mobilePlugins,
    when: options => options.runtimeConsole === "mobile"
  },

  {
    name: "PCPlugins",
    type: "checkbox",
    message: "请选择使用的PC端插件（多选）",
    choices: PCPlugins,
    when: options => options.runtimeConsole === "PC"
  },
  {
    name: "cssReset",
    type: "list",
    message: "请选择一个初始化的css默认样式",
    choices: [{
        name: "reset-css (全部样式设置为null)",
        value: {
          name: "resetCss",
          version: "^4.0.1"
        }
      },
      {
        name: "normalize.css (清楚大部分基本样式，保持默认语义化的样式模式)",
        value: {
          value: {
            name: "normalizeCss",
            version: "^2.1.2"
          }
        }
      }
    ]
  },

  {
    name: "dependencies",
    type: "checkbox",
    message: "请选择使用的依赖（多选）",
    choices: [{
        name: "moment （常用时间字符串处理工具）",
        value: {
          name: "moment",
          version: "^2.23.0"
        }
      },
      {
        name: "weixin-js-sdk （微信网页jsSDK）",
        value: {
          name: "weixin-js-sdk",
          version: "^1.4.0-test"
        }
      }
    ]
  }
]