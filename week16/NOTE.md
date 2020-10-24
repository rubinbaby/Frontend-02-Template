# 学习笔记

## 1. 工具链
  ### 1.1 初始化与构建
   - generator称为脚手架
   - yeoman称为脚手架生成器（https://yeoman.io/）
      - 特点1：顺序执行class里面的方法
      - 安装yo命令（npm install -g yo）
      - npm link （link local module to global one）
      - 特点2：支持异步的method方法（async），里面可以使用await
      - 如果用户需要输入的话，需要使用this.prompt
      - yeoman文件系统交互
      - yeoman依赖管理
  ### 1.2 Webpack构建
   - 核心思路：打包一个JS文件，然后HTML手工引入这个JS文件
   - 多文件合并、文本转换
   - 配置：
      - entry：可以多个入口打包，但是一个webpack的整个过程就只支持一个文件及其它所有依赖的文件的打包
      - output：输出文件名和文件路径
      - loader：在module.rules下进行配置，类似一种文本的转换
  ### 1.3 Babel
   - 完全独立于webpack的一套独立系统
   - 作用：新版本的JS编译成老版本的JS
   - 命令中需要输入和输出
   - 安装：npm install --save-dev @babel/core @babel/cli
   - 通过npx babel来使用