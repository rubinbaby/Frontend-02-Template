# 学习笔记

## 1. 手势与动画
  ### 1.1 手势的基本知识
   1. 类似click事件
       - start
       - tap（直接end)
   2. 没有抬手，发生了一个移动事件
       - start
       - pan start（移动10px，作为容错范围；一倍屏设置成5px）
       - pan（每次move都会发生，持续事件）
       - pan end / flick（end的时候达到一定的速度，swip）
   3. 长按事件（超过0.5s）
       - start
       - press start
       - press end
  ### 1.2 实现鼠标操作
   1. touch的每个操作都有各自专门的identifier标示符，需要指定传递来追踪
   2. touch会有一个特殊的cancel事件，因为受到其他事件的打断
  ### 1.3 封装
   1. 解耦，其中信息流向：listen => recognize => dispatch