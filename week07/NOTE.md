# 学习笔记

## 1. CSS排版
  ### 1.1 盒
  1. 盒模型
     - content-box
     - border-box（content-box width + padding width + border width）
  ### 1.2 正常流
  1. 正常流排版
      - 收集“盒”进“行”
      - 计算“盒”在“行”中的排布
      - 计算“行”的排布
      - 有IFC（inline-level-formatting-context）和BFC（block-level-formatting-context）
  2. 正常流的行级排布
      - baseline（基线）
  3. 正常流的块级排布
      - float：影响生成的“行”盒尺寸，不只影响float所在“行”盒，还会影响其高度所占据的范围内所有的“行”盒
      - clear：
      - margin：前后两个元素的margin collapse只发生在BFC，同时会选取最大的元素margin值作为其值
  ### 1.3 BFC合并
  1. Block
      - Block Container：里面有BFC的
         - block
         - inline-block
         - table-cell
         - flex item
         - grid cell
         - table-caption
      - Block-level Box：外面有BFC的
         - display:block  <==> display:inline-block
         - display:flex  <==>  display:inline-flex
         - display:table  <==> display:inline-table
         - display:grid  <==>  display:inline-grid
         - display:run-in（根据其上一个元素来判断是inline level的还是block level的）
      - Block Box = Block Container + Block-level Box：里外都有BFC的
         - block box && overflow:visible的时候，会发生BFC合并，里面的“行”盒对float和边距折叠产生一定的影响
  ### 1.4 Flex排版
   - 收集“盒”进“行”
      - 根据主轴尺寸，把元素分进“行”
      - 若设置了no-wrap，则强行分配进第一行
   - 计算“盒”在主轴方向的排布
      - 找出所有Flex元素
      - 把主轴方向的剩余尺寸按比例分配给所有Flex元素
      - 若剩余空间为负数，所有Flex元素为0，等比压缩剩余元素
   - 计算“盒”在交叉轴方向的排布
      - 根据每一行中最大元素尺寸计算行高
      - 根据行高flex-align和item-align，确定元素具体位置
## 2. CSS动画与绘制
  ### 2.1 动画
   - @keyframes定义
      - 百分比（0%-100%）
      - from&to，from相当于0%，to相当于100%
   - animation：使用
      - animation-name动画名字
      - animation-duration动画时长
      - animation-timing-function动画时间曲线
      - animation-delay动画开始前的延迟
      - animation-iteration-count动画的播放次数
      - animation-direction动画方向
   - transition
      - transition-property要变换的属性
      - transition-duration变换的时长
      - transition-timing-function时间曲线（和三次贝塞尔曲线有关）
      - transition-delay变换延迟
  ### 2.2 颜色
   - CMYK与RGB
   - HSL与HSV
      - H（hue）色相
      - S表示纯度，值越高越鲜艳
      - L表示亮度，V（value）表示明度
  ### 2.3 绘制
   - 几何图形
      - border
      - box-shadow
      - border-radius
   - 文字
      - font
      - text-decoration
   - 位图
      - background-image
