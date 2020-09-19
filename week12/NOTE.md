# 学习笔记

## 1. 组件的基本知识
  ### 1.1 基本概念和基本组成部分
   1. 基本概念
       - 和UI强相关
       - 某种意义上，是一种特殊的模块或对象
       - 特点：以树形结构来进行组合，并且有一定的模板化的配置能力
   2. 和对象的区别
       - 对象
          - Properties
          - Methods
          - Inherit
       - 组件
          - Properties
          - Methods
          - Inherit
          - Attribute 特性
          - Config & State
          - Event（事件，往外传递）
          - Lifecycle
             - created
             - mount/unmount
             - JS change/set
             - User Input
             - render/update
             - destroyed
          - Children
             - Content型
             - Template型
  ### 1.2 为组件添加JSX语法
   1. 安装
       - cd `<file_folder>`
       - npm init
       - npm install -g webpack webpack-cli
       - npm install --save-dev webpack babel-loader
       - npm install --save-dev @babel/core @babel/preset-env
       - npm install --save-dev @babel/plugin-transform-react-jsx
   2. JSX基本使用方法
## 2. 轮播组件
  - 使用interval自动播放
  - 使用mouse拖拽