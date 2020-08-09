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
## 2. CSS选择器
  ### 2.1 选择器语法
   - 简单选择器
      - *（通用选择器）
      - div svg|a（类型选择器）
      - .cls（class选择器）
      - #id（ID选择器：必须严格）
      - [attr=value]（属性选择器：功能强大）
      - :hover（伪类选择器）
      - ::before（伪元素选择器）
   - 复合（combined）选择器
      - <简单选择器><简单选择器><简单选择器>
      - 另外，注意*或者div必须写在最前面
   - 复杂选择器
      - <复合选择器>" "<复合选择器>（子孙选择器）
      - <复合选择器>">"<复合选择器>（父子选择器，直接关系）
      - <复合选择器>"~"<复合选择器>（邻接关系）
      - <复合选择器>"+"<复合选择器>
      - <复合选择器>"||"<复合选择器>
      - 逗号之间是或的关系，可以看做是多个选择器组成的一个列表
  ### 2.2 伪类
   - 链接/行为
      - :any-link（匹配所有的超链接）
      - :link（匹配所有未访问过的超链接）:visited（匹配所有已访问过的超链接）：一旦使用这两个，就无法修改颜色以外的属性
      - :hover（鼠标挪上去以后所处的状态）
      - :active（激活状态）
      - :focus（焦点在的状况）
      - :target（链接到当前目标，供锚点的a标签使用的）
   - 树结构
      - :empty 表示这个元素是否有子元素
      - :nth-child() 表示这个元素是父元素的第几个child，其中括号里写even/odd
      - :nth-last-child() 和nth-child()类似，只不过是从后往前
      - :first-child :last-child :only-child
   - 逻辑型
      - :not伪类，只支持里面写简单选择器的序列
      - :where :has
  ### 2.3 伪元素
   - ::before ::after 表示在元素内容的前面和后面插入一个伪元素
      - declaration里面可以写content属性
      - 写了content属性后，可以像一个真正的DOM元素来生成盒，参与后续的排版和渲染
   - ::first-line 可用属性如下：
      - font系列
      - color系列
      - background系列
      - word-spacing
      - letter-spacing
      - text-decoration
      - text-transform
      - line-height
   - ::first-letter 可用属性如下：
      - font系列
      - color系列
      - background系列
      - text-decoration
      - text-transform
      - letter-spacing
      - word-spacing
      - line-height
      - float
      - vertical-align
      - 盒模型系列：margin，padding，border
