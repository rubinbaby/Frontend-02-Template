# 学习笔记

## 1. 手势与动画
  ### 1.1 初步建立动画与时间线
   1. 处理帧的方式（一般60帧）
       - setInterval（容易产生积压，不管是否执行完）
       - setTimeout（只执行一次，使用tick函数来调用）
       - requestAnimationFrame（浏览器执行下一帧所需的操作，支持现代浏览器）& cancelAnimationFrame
   2. 实现时间线Timeline
       - start
       - pause
       - resume
       - reset
       - get rate / set rate