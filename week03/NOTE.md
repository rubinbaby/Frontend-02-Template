学习笔记

1. JS表达式
    1.1 运算符与表达式
        语法数和运算符优先级
        a. 优先级最高的是Member运算，比如：
            成员访问 ==> a.b、a[b]（可以支持运行时的字符串）
            函数Function ==> foo`string`
            使用super关键字，在class的构造函数中才会使用 ==> super.b，super['b']
            new.target，固定结构
            new Foo()，区别于New表达式的new Foo，其优先级低于前者，比如new a()()和new new a()
        b. 引用类型Reference
            object、key、delete、assign
            引用类型在运行时来处理删除或者赋值等写相关的操作
        c. 函数调用call
            最基础的是函数名后面跟上一对圆括号，优先级低于new和member运算
            另外就是函数名带一对圆括号，然后使用点运算或者一对中括号或者反引号 ==> foo()['b']、foo().b、foo()`abc`
        d. 左手和右手运算
            只有左手运算可以放到等号的左边
        e. update expression
            就是右手运算，a++、a--、++a、--a
        f. 单目运算符Unary
            最典型的是delete a.b
            void foo()：类似于空白、回车，可以起到改变语法结构的作用
            typeof
            正号（+）和负号（-）：其中，正号不会改变后面表达式的值，如果是字符串，就会发生类型的转换
            ～：一个位运算，把一个整数按位取反，若不为整数，就会强制转换为整数
            ！非运算：一个正对boolean型的运算，使用两个非（!!）来把一个任何类型的数强制转换为布尔型
            await
        g. Exponental
            **乘方，唯一一个右结合运算符，
        h. 乘除运算：* / %（取余） ==> 变量必须都是Number类型
            加减运算：+、-
            移位运算：<<、>>、>>>
            关系比较：<、>、<=、>=、instanceof（这些运算符两侧变量需要数字）、in（比较字符串字典顺序）
        i. 相等运算：==、!=、===、!==
            位运算：按位与（&）、异或（^）、按位或（｜）
        j. 逻辑运算：与（&&）、或（||）
            条件运算（?:）：唯一一个三目运算符，由一个问号和一个冒号分成三部分
    1.2 类型转换
        1.2.1 拆箱转换unboxing
            a. 将一个object装成一个基本类型，其中一个主要的过程是toPrimitive
            b. 对于一个object来说，有三个方法的定义会影响其toPrimitive方法，分别为toString、valueOf、Symbol.toPrimitive
            c. 如果定义了Symbol.toPrimitive就会忽略toString和valueOf
            d. 对于object的加法来说，会优先调用其valueOf，若有Symbol.toPrimitive的话，就一定优先调用该方法
            e. 对于object作为属性名时，则会优先调用其toString方法
        1.2.2 装箱转换boxing

2. JS语句
    2.1 运行时Runtime基本概念

