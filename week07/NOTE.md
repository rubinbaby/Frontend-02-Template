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
