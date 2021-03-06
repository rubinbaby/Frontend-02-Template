# 学习笔记

## 1. 浏览器工作原理总论
  ### 1.1 浏览器页面基础渲染流程
  1. 浏览器首先使用 HTTP 协议或者 HTTPS 协议，向服务端请求页面
  2. 把请求回来的 HTML 代码经过解析，构建成 DOM 树（文本分析）
  3. 计算 DOM 树上的 CSS 属性
  4. 最后根据 CSS 属性对元素逐个进行渲染，得到内存中的位图
  5. 一个可选的步骤是对位图进行合成，这会极大地增加后续绘制的速度
  6. 合成之后，再绘制到界面上。
## 2. 状态机
  ### 2.1 有限状态机
   - 特征：
      - 每一个状态都是一个机器；每一个机器里面都可以进行计算、存储、输出等；每一个机器接收的输入是一致的；每一个机器本身没有状态，如果用函数表示就是纯函数（无副作用）
      - 每一个机器知道下一个状态；Moore状态机（每个机器都有确定的下一个状态）和Mealy状态机（每个机器根据输入决定下一个状态）
## 3. HTTP请求
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
