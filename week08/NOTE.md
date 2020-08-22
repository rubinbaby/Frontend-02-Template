# 学习笔记

## 1. HTML
  ### 1.1 HTML定义
   - 实体定义（&加上字母和分号，比如`&nbsp;`）
  ### 1.2 HTML标签语义
  1. aside, main, hgroup, abbr, figure, figcaption, nav, dfn, pre, `&lt;`, code
  2. strong和em的区别
      - strong：不改变语义，这个词很重要
      - em：辅助的语气表示，表达的是在这个句子里面强调的重点的词是什么
  ### 1.3 HTML语法
  1. 合法元素
      - 元素Element: `<tagname>...</tagname>`
      - 文本节点Text: text
      - 注释节点Comment: `<!-- comments -->`
      - DocumentType: `<!Doctype html>`
      - ProcessingInstruction: `<?a 1?>` 预处理
      - CDATA: `<![CDATA[]]>` 另一种文本节点
  2. 字符引用
      - `&#161;`
      - `&amp;`
      - `&lt;`
      - `&quot;`
## 2. 浏览器API
  ### 2.1 DOM API
   - traversal系列API（不推荐使用）
      - 一个自动迭代工具，可以访问DOM树的所有节点
   - 节点部分API
      - 所有的节点都继承Node类（也就是基类）
      - Element元素型节点（跟标签相对应）
         - HTMLElement
         - SVGElement
      - Document文档根节点
      - CharacterData字符数据
         - Text文本节点
         - Comment注释
         - ProcessingInstruction处理信息
      - DocumentFragment文档片段
      - DocumentType文档类型
   - 事件部分API
      - 所有交互的产生都是通过事件来驱动
   - Range API
      - 理解费劲，使用麻烦
      - 比起节点API，能够更精确的操纵DOM树，性能更好
      - 应用性很差，目前只有少数专业人员使用，比如：做HTML编辑器的专家
  ### 2.2 CSSOM
   - document.styleSheets
      - cssRules
         - CSSStyleRule
            - selectorText String
            - style K-V结构
         - @rule
      - insertRule
      - removeRule
   - window.getComputedStyle
      - elt 想要获取的元素
      - pseudoElt 可选，伪元素
  ### 2.3 CSSOM View
   - window
      - innerHeight, innerWidth
      - outerWidth, outerHeight（整个window的大小）
      - devicePixelRatio（屏幕上的物理像素和代码中的逻辑像素px之间的比值，正常为1:1）
      - screen
         - width, heigth
         - availWidth, availHeight（和设备实际大小相关）
   - window API
      - open
      - moveTo(x, y)：位置
      - moveBy(x, y)：尺寸
      - resizeTo(x, y)
      - resizeBy(x, y)
   - scroll
      - scrollTop
      - scrollLeft
      - scrollWidth
      - scrollHeight
      - scroll(x, y)
      - scrollBy(x, y)
      - scrollIntoView()
   - layout
      - getClientRects()
      - getBoundingClientRect()
  ### 2.4 其它API
   - khronos
      - WebGL
   - ECMA
      - ECMAScript
   - WHATWG
      - HTML
   - W3C
      - webaudio
      - CG/WG