# 学习笔记

## 1. 编程与算法训练
  ### 1.1 四则运算
   1. 
       - Token Number: 0...9的组合
       - Operator：+、-、*、/之一
       - Whitespace：`<SP>`
       - Line Terminator：`<LF>` `<CR>`
   2. 产生式
       - <Expression>::= <AdditiveExpression><EOF>
       - <AdditiveExpression>::= <MultiplicativeExpression>|<AdditiveExpression><+><MultiplicativeExpression>|<AdditiveExpression><-><MultiplicativeExpression>
       - <MultiplicativeExpression>::= <Number>|<MultiplicativeExpression><*><Number>|<MultiplicativeExpression></><Number>
  ### 1.2 字符串分析算法
   - 字典树：大量高重复字符串的存储与分析
   - KMP：在长字符串里找模式（长字符串中找匹配的短字符串）
   - Wildcard：带通配符的字符串模式（？、*等）
   - 正则：字符串通用模式匹配
   - 状态机：通用的字符串分析
   - LL LR：字符串多层级结构分析