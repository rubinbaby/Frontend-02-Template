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
        2.1.1 Completion Record
            组成结构：
            1. 类型[[type]]：normal、 break、 continue、 return、 throw
            2. 返回值[[value]]：基本类型
            3. [[target]]：label ==> 一般break和continue后面会带有target
    2.2 简单语句和复合语句
        2.2.1 简单语句
            a. 表达式语句：完全有表达式组成，最后加上一个分号
            b. 空语句：单独的一个分号，只是为了满足语言的完备性
            c. 调试语句：debugger关键字加上一个分号，当在调试的时候，专门会触发一个debugger的断点，但在实际运行的时候不会发生任何作用
            d. 抛出（throw）语句：会抛出一个异常，通过throw关键字加上一个表达式来抛出
            e. continue和break语句：和循环语句相匹配，continue表示结束当次循环，之后的循环继续，而break结束整个循环
                后面可以加上label，可以实现跳出多层的循环，以此来节省很多if语句的判断和逻辑处理
                [[type]]：break contiue，[[value]]：未知，[[target]]：label
            f. return语句：一定在函数中使用，返回函数的值
        2.2.2 复合语句
            a. block语句：一对花括号中间有一个语句列表
                [[type]]：normal，[[value]]和[[target]]不明
            b. 条件（if）语句：一种分支结构
            c. switch语句：一种多分支结构，不建议使用，建议使用条件语句来取代
            d. 迭代（Iteration）语句：while循环、do while循环、for循环、for await循环等
            e. with语句：一般在JS中不太或者拒绝使用
            f. labelled语句：在简单语句或复合语句前面加上一个label，相当于给一个语句取个名字
            g. try语句：有try、catch和finally三段结构组成，try里面的不是block语句，而是由try语句定义的
                [[type]]：return，[[value]]：未知，[[target]]：label
    2.3 声明
