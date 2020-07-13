学习笔记

1. JS语言通识
    1.1 泛用语言分类方法
        1.1.1 按语法分类
            a. 非形式化语言 --> 我们平时使用的语言（中文、英文）
            b. 形式化语言 --> 计算机语言
                根据乔姆斯基谱系分类，分为：
                    0型 无限制文法 --> 自己随意定义表达式
                    1型 上下文相关文法 --> 上下文有联系
                    2型 上下文无相关文法 --> 上下文没有联系，这个表达式是固定不变的
                    3型 正则文法 --> 使用正则表达式表达的文法
                以上几种分类都是针对词和语句，并且按顺序具有包含关系（充分非必要条件），0型>1型>2型>3型。
    1.2 产生式（BNF）概念
        a. 采用巴斯克-诺尔范式
        b. 语法结构名 ==> 用尖括号括起来的名称 （if语句、函数、字符串直接量）
        c. 语法结构分类
            基础结构 ==> 终结符
            复合结构（需要用其它语法结构定义的） ==> 非终结符
        d. 引号和中间的字符表示终结符
        e. 可以有括号
        f. 和正则表达式一样，*表示重复多次，｜表示或，+表示至少一次
    1.3 产生式理解乔姆斯基谱系
        Javascript是上下文无关文法，但是也有特例（比如：**乘方）
        其它产生式：EBNF & ABNF自定义
    1.4 现代语言的分类
        a. 现代语言的特例
            C++： *表示乘号或者指针，具体要根据星号前面的标示符是否被声明为类型
            VB： <表示小于号或者XML直接量的开始，具体要根据当前位置是否可以接受XML直接量
            Python： 行首的Tab符和空格会根据上一行的行首空白以一定规则被处理成虚拟终结符indent或者dedent
            Javascript： /表示除号或者正则表达式开头，处理方式类似VB，字符串模版中也需要特殊处理}，还有自动插入分号规则
        b. 分类
            根据用途：数据描述语言和编程语言
            根据表达方式：声明式（只是告诉结果）和命令式（展示实现结果所需要的每个具体步骤）
    1.5 编程语言的性质
        a. 图灵完备性（所有可计算的问题都可用来描述的语言就是具备图灵完备性）
            命令式 --> 图灵机
                goto或者if和while
            声明式 --> Lambda
                递归
        b. 动态和静态
            动态：一般在产品实际运行时，在用户的设备或者在线服务器上进行，相对应的概念就是Runtime
            静态：一般在产品开发的时候，在程序员的设备上进行的，在编写代码开发的时候就可以进行类型检查，相对应的概念就是Compiletime，对于JS来说没有Compiletime
        c. 类型系统
            动态类型系统和静态类型系统，和b中的动态静态类似，JS是一种动态类型系统，而C++就是一种静态类型系统，主要还是区分保留在用户还是程序员的设备上
            强类型和弱类型，JS就是弱类型（比如：String+Number或者String==Boolean）
            复合类型（结构体和函数签名）
            子类型：只要父类型可以使用的，子类型也适合
            范型（逆变/协变）：凡是能用Array<Parent>的地方也能用Array<Child>这就是协变，凡是能用Function<Child>的地方也能用Function<Parent>这就是逆变
    1.6 一般命令式编程语言
        原子级：最小的组成单位，包含关键字、直接量、变量名
        表达式：原子级与运算符连接，加上一些辅助符号组成，它是一种级联结构
        语句：表达式加上特定标示符、特定的关键字、特定的符号组成
        结构化层级：Function、Class，分成复用的结构；Process、Namespace
        Program：管理语言的模块和安装，JS使用npm
2. JS类型
    原子（Atom）：
        语法 ==>
            字面值（Literal），使语言格式整洁好看，对应Runtime中的Types
            变量（Variable）：对应Runtime的Execution Context
            关键字（Keywords）
            空格（Whitespace）
            行终结符（Line Terminator）
    类型：
        Number、String、Boolean、Object、Null（有值但为空）、Undefined（无定义赋值）、Symbol
        注意：Null的typeof是object，这是JS设计上的一个bug
    2.1 Number
        a. 对应于数学上的有理数
        b. 定义为Double Float（双精度浮点数），小数点可以来回浮动
        c. 有1个符号位（Sign）、11个指数位（Exponent）和52个精度位（Fraction）组成，每个位都是一个bit（0或1）
        d. 语法：
            十进制（DecimalLiteral）==> 0、0.、.2、1e3
            二进制（BinaryIntegerLiteral）==> 只支持整数，0b111
            八进制（OctalIntegerLiteral）==> 0o10
            十六进制（HexIntegerLiteral）==> 0xFF
            注意：如果需要获取0的toString()方法的话，不能写成0.toString()，而是写成0 .toString()，中间有空格
    2.2 String
        a. 字符（Character），计算机无法表示，需要使用Code Point来表示（比如，97代表a），同时需要使用编码（Encoding）来存储
        b. 编码集：
            ASCII ==> 总共127个字符（0-127），但是无法表示中文这种特殊字符，只能是英文
            Unicode ==> 包含所有特殊的字符，分成相应的片区（比如中文有一个自己的片区），0000到FFFF，只是两个字节
            UCS ==> 0000到FFFF
            GB ==> 和Unicode的码点不一致，GB2312、GBK（GB13000）、GB18030（包含全部字符），比起Unicode来说更节省空间
            ISO-8859 ==> 没有中文
            BIG5 ==> 台湾中文使用该格式
        c. Encoding
            UTF：
                UTF8 ==> 一个字节表示一个字符，兼容ASCII，反之不成立
                UTF16 ==> ASCII的话就会在前面加上00000000，因为需要用两个字节表示，需要填位
        d. 语法（Grammar）
            brnftv
            引号（单引号和双引号）
            反引号（`）：
                `..${
                }..${
                }..`
    2.3 其它
        a. Boolean （true和false）
        b. Null & Undefined
            Undefined ==> 全局变量，没有被定义和赋值，使用void 0来产生
            Null ==> 关键字，被定义赋值但为空
3. JS对象
    3.1 对象基础概念
        a. 认知：
            1. 任何一个对象都是唯一的，与自己本身状态无关
            2. 即使状态一致的对象，其也不相等
            3. 使用状态来描述对象，而状态的改变就是行为
        b. 分类（Class）
            1. 类是一种常见的描述对象的方式
            2. 归类 ==> 多继承结构，只要有共性
            3. 分类 ==> 单继承结构，只是层级性（对于计算机语言）
        c. 原型（Prototype）
            1. 一种更接近人类原始认知的描述对象方法
            2. 采用“相似”这种方式去描述对象
            3. 任何对象仅仅需要描述它自己与原型的区别
    3.2 JS中的对象
        a. JS的对象属性既可以用来表示状态，也可以用来表示行为，用内存地址表示对象的唯一性，如果自身没有某个属性，就会去原型（Prototype）上去寻找其属性，这就形成了原型链，直到Nihilo（也就是Null这个对象）
        b. JS属性（KV对）
            K有String和Symbol，对于String，总能拿到其属性，对于Symbol，只能通过对象去获取属性值，从而进行属性访问的权限控制
        c. 数据属性和访问属性
            数据属性：[[value]]、writable、enumerable、configurable，用于描述状态，如果存储函数，也可以用于描述行为；虽然writable设为false，通过点运算不可更改，但是可以用defineProperty去修改writable来进行属性更改；configurable设为false，就会造成enumerable和writable也变成false
            访问属性：get、set、enumerable、configurable，用于描述行为
        d. 原型机制
            每个对象只需要描述自己和原型的区别就可以描述该对象
        e. API和语法
            {} . [] Object.defineProperty
            Object.create / Object.setPrototypeOf / Object.getPrototypeOf
            new / class / extends
            new / function / prototype，建议不要采用
        f. Function Object
            一个行为[[call]]，内置行为，使用function的关键字、箭头运算符或者Function构造器创建的对象都有这个行为
            用类似f()这样的语法把对象当作函数调用时，会访问到[[call]]这个行为，如果对应的对象没有[[call]]行为就会发生报错
        g. Array Object
            会根据数字型的属性增加，长度发生变化而自身也发生变化
        h. Host Object
            比如浏览器中的Window、setTimeout
            有[[call]]、[[construct]]两个方法