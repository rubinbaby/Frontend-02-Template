# 学习笔记

## 1. CSS计算
  ### 1.1 收集CSS规则
  1. 遇到style标签就把CSS规则保存起来
  2. 其中，通过CSS Parser来分析CSS规则
  3. 而且需要重点研究和理解CSS Parser如何分析CSS规则的格式
  ### 1.2 添加调用
  1. 一旦创建元素，就会立即计算CSS
  2. 理论上，当分析一个元素的时候，所有CSS规则都已经收集完毕
  3. 但在真实浏览器中，可能会遇到写在body中的style标签，这时需要重新进行CSS计算
  ### 1.3 获取父元素序列
  1. 在计算CSS的时候，必须知道某个元素的所有父元素才能判断其是否与CSS规则相匹配，因为在CSS规则里有子孙选择器、直接子元素选择器等选择规则
  2. 按照顺序，首先获取的是“当前元素”，所以获得和计算其父元素匹配的顺序就是从内向外的
  ### 1.4 选择器与元素的匹配
  1. 选择器和当前元素的父元素排列的顺序是一致的（从内向外排列，进行匹配）
  2. 复杂选择器可以拆成针对单个元素的选择器，用循环来匹配父元素队列
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
## 3. 渲染
  ### 3.1 HTTP协议解析
  1. 七层网络模型
     - HTTP（应用、表示、会话），TCP（传输），Internet（网络），4G/5G/Wi-Fi（数据链路、物理层），其中HTTP对应nodejs中的require('http')，Internet对应require('net')
  2. TCP与IP
     - TCP层传输数据使用的是流（一种没有明显的分割单位，但前后的顺序保证正确），根据网卡上的端口把相应的数据传给对应的应用程序，所依赖的nodejs库是require('net')包，TCP通过一个个数据包来进行传输，根据网络中间设备的传输能力来决定每个传输包的大小，而通过IP地址就可以确定一个数据包的传输位置（从哪到哪），IP协议的底层库需要调用C++中的libnet（负责构造IP包并且发送）和labpcap（从网卡抓取流经的IP包）
  3. HTTP
     - 一个request对应一个response
     - request格式 ==> request line（method: get/post/put/options）, headers, body
     - response格式 ==> status line（状态码），headers，body
## 4. HTML解析
  ### 4.1 模块的文件拆分
  1. 为了方便文件管理，把parser单独拆到一个文件中
  2. parser接收HTML文本作为参数，然后返回一个DOM树
  ### 4.2 接口的设计
  ### 4.3 解析标签
  1. 标签分类：开始标签、结束标签、自封闭标签
  ### 4.4 用token构建DOM树
  1. 从标签构建DOM树的基本技巧是使用栈
  2. 遇到开始标签时创建元素并入栈，遇到结束标签时出栈
  3. 自封闭节点可视为入栈后立刻出栈
  4. 任何元素的父元素是入栈前的栈顶
