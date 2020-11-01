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
   - coverage的描述要区分大小写
   - 常用命令：
      - npm run test
      - npm run coverage
      - npm run build

  ### Notes
   - 问题：SyntaxError: Unexpected reserved word
      - 解答：升级node版本到v10.x 