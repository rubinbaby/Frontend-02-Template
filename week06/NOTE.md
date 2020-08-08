# 学习笔记

## 1. CSS总论
  ### 1.1 CSS语法的研究
  1. CSS总体结构
     - @charset
     - @import
     - rules （可以重复出现且没有顺序规则）
        - @media
        - @page
        - rule
  2. CSS由at-rules和rule组成，其中at-rules包含@charset、@import、@media、@page
  ### 1.2 CSS at-rules的研究
  1. @rules根据研究可以包含：
      - @charset
      - @import
      - @media **
      - @page
      - @counter-style
      - @keyframes **
      - @fontface **
      - @support
      - @namespace
  2. 其中，主要关注的是@media、@keyframes、@fontface
  ### 1.3 CSS rule的结构
  1. CSS规则分成选择器部分和声明部分（K-V列表，key和value）
  2. CSS规则的声明部分，Key包含属性和变量（变量通常以两个减号“--”开头），Value包含正常的值和一些函数类型的值
  ### 1.4 收集标准
  1. https://w3.org/TR/
  2. 通过执行脚本进行CSS标准自动抓取
  ### 1.5 计算选择器与元素匹配
  1. 根据选择器的类型和元素属性来计算其是否与当前元素相匹配
  2. 在真实浏览器中，需要处理复合选择器
  ### 1.6 生成computed属性
  1. 一旦选择匹配，就会把选择器运用到元素上，形成computed属性
  ### 1.7 specificity的计算逻辑
  1. 优先级：inline CSS > id > class > tag name，specificity是一个四元祖，越左边权重越高（也就是只要高位能够比较出来，就不考虑低位）
  2. CSS规则是根据specificity和后来优先规则覆盖
  3. 一个CSS规则的specificity根据包含的简单选择器相加而成
## 2. 排版
  ### 2.1 根据浏览器属性进行排版
   - flex-direction:row
      - Main：width，x，left，right
      - Cross：height，y，top，bottom
   - flex-direction:column
      - Main：height，y，top，bottom
      - Cross：width，x，left，right
  ### 2.2 收集元素进行
   - 分行
      - 根据主轴尺寸，把元素分进行（hang）
      - 若设置了no-wrap，则强行分配进第一行
  ### 2.3 计算主轴
   - 计算主轴方向
      - 找出所有Flex元素
      - 把主轴方向的剩余尺寸按比例分配给这些元素
      - 当剩余空间为负数的时候，所有Flex元素设置为0，剩余元素等比例压缩
  ### 2.4 计算交叉轴
   - 计算交叉轴方向
      - 根据每一行中最大元素尺寸计算行高
      - 根据行高flex-align和item-align，确定元素具体位置
## 3. 渲染
  ### 3.1 绘制单个元素
  1. 如果把单个元素绘制成一张图片，需要依赖一个图形环境，比如采用npm包images
  2. 单个元素会绘制到一个viewport上
  3. 与绘制相关的属性包含background-color，border，background-image等，不过对于gradient属性，需要webGL库来实现
  ### 3.2 绘制DOM树
  1. 采用递归的方式，调用单个元素绘制的方法进行绘制整个DOM树
  2. 对于简易的浏览器，一些不需要绘制的节点进行了忽略处理
  3. 在实际浏览器中，文字绘制是难点，需要依赖各种字体库，把字体变成图片来渲染
  4. 在实际浏览器中，还会对一些图层进行compositing
