# 学习笔记

## 1. 持续集成
  ### 1.1 发布前检查的相关知识
   - 概念：daily build & build verification test (BVT)
   - git hook来完成检查的时机
   - ESLint一种轻量级的代码检查方案
   - PhantomJS基于无头浏览器对最后生成的代码做一些规则的校验和检查
  ### 1.2 Git Hooks基本用法
   - reference: https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks
   - pre-commit
   - pre-push
   - pre-receive
  ### 1.3 ESLint基本用法
   - reference: https://eslint.org
   - 常用命令：
      - npm install eslint --save-dev
      - npx eslint --init
      - npx eslint <file_name>
  ### 1.4 ESLint API及其高级用法
   - 常用命令：
      - git stash push
      - git stash push -k
  ### 1.5 使用无头浏览器检查DOM
   - Chrome推出Headless，因为PhantomJS已经过于老旧
   - reference: https://developers.google.com/web/updates/2017/04/headless-chrome
   - chrome --headless --dump-dom about:blank
   - nodeJS库: puppeteer