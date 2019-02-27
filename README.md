# mcvue-cli

#### 介绍
自定义vue脚手架

#### 软件架构
1.preset.json
vue-cli 3 预设配置文件 可配置必用插件

2.prompts.js
命令行对话 用于控制脚手架选项

3.generator
代码生成器、文件操作、模板生成

#### 安装教程

git clone

#### 使用说明

先安装vue-cli 3
在工作空间内使用命令clone下此项目
git clone https://gitee.com/holgor/mcvue-cli.git
接着使用命令，根据此配置构建vue项目
vue create -p ./mcvue-cli my-project -n