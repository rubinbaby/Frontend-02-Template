# 学习笔记

## 1. 工具链
  ### 1.1 单元测试工具
   - 目前流行的测试工具：Mocha和Jest
   - 命令：
      - npm install --save-dev @babel/core @babel/register
      - mocha --require @babel/register
      - npm install --save-dev @babel/preset-env
      - ./node_modules/.bin/mocha --require @babel/register
      - npm run test
  ### 1.2 code coverage
   - 常用工具nyc（github.com/istanbuljs/nyc）
   - npm install --save-dev nyc
   - nyc ./node_modules/.bin/mocha --require @babel/register
   - 使用babel：
      - babel-plugin-istanbul
      - npm install --save-dev @istanbuljs/nyc-config-babel
      - npm install --save-dev babel-plugin-istanbul
  ### 1.3 对html-parser进行单元测试
   - 完全独立于webpack的一套独立系统
   - 作用：新版本的JS编译成老版本的JS
   - 命令中需要输入和输出
   - 安装：npm install --save-dev @babel/core @babel/cli
   - 通过npx babel来使用