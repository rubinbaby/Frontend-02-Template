# 学习笔记

## 1. 发布系统
  ### 1.1 初始化server
   - 安装VM和Ubuntu
   - 安装最新版node和npm，命令：
      - sudo apt install nodejs
      - sudo apt install npm
      - sudo npm install -g n
      - sudo n latest
      - npm run test
  ### 1.2 利用Express编写服务器
   - reference: http://expressjs.com/en/starter/generator.html
   - npx express-generator
   - npm install
   - remove routes和views文件夹（可以不需要）
   - 部署到服务器端：
      - scp远程复制到服务器上
      - npm start
  ### 1.3 用node启动一个简单的server
   - 常用命令：
      - npm init
      - node server.js
  ### 1.4 编写简单的发送请求功能
   - 常用命令：
      - npm init
      - node publish.js
  ### 1.5 简单了解Node.js的流
   - reference: https://nodejs.org/docs/latest-v13.x/api/stream.html#stream_class_stream_readable
  ### 1.6 改造server
   - 添加FS文件系统
  ### 1.7 实现多文件发布
   - 添加npm包：archiver包和unzipper包
   - pipe流处理
   - 一个文件夹里面的文件进行压缩 npm install --save archiver
   - 在服务器端进行解压 npm install --save unzipper
  ### 1.8 用Github oAuth做一个登录实例
   - reference: https://github.com/settings/apps/toy-publish-yinxzhu