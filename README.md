# hol-cli

### 介绍

根据个人习惯定制的 vue-cli3 预设配置。  

构建新项目时总有一些常用的组件/插件/惯用代码要引入。  
利用 Vue-cli3 的配置、插件生成器功能，解决这种重复的搭建工作。  

### 配置选项 

#### css：  
1.预处理器（scss/less/stylus） 

2.默认样式（reset-css/normalize.css）

#### 公共：  
1.router（Vue.js 官方的路由管理器，实现 SPA 应用）  
2.vuex（Vue.js 官方的状态管理器，实现全局数据状态管理）  
3.qs+axios（qs:请求参数处理器，axios:http 请求框架）  
4.cookies+token（使用 cookies 管理权限令牌）  
5.vee-validate（vue 表单验证插件）  
6.echarts（图表、数据可视化）  
7.高德地图（高德地图引擎及api）  
8.百度地图（百度地图引擎及api）  
9.TinyMCE（富文本编辑器）  

#### 移动端：  
1.fastclick（移动端点击响应优化）  
2.lib-flexible+postcss-pxtorem（移动端响应式+自适应方案）  

#### PC：  
1.element-ui  

### 使用说明
先安装 vue-cli 3  
#### 1.本地下载使用  
clone 此项目  
接着使用命令，根据此配置构建 vue 项目  
vue create -p ./hol-cli my-project  
#### 2.线上版  
vue create -p holgor/hol-cli my-project  