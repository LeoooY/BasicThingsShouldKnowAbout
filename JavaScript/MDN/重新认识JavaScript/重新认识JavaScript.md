### 重新认识JavaScript

JavaScript堪称[世界上被人误解最深的语言](http://crockford.com/javascript/zh/javascript.html)

>`与大多数编程语言不同，JavaScript 没有输入或输出的概念`
>它是一个在主机环境（host environment）下运行的脚本语言，任何与外界沟通的机制都是由主机环境提供的。浏览器是最常见的主机环境，但在非常多的其他程序中也包含 JavaScript 解释器，如 Adobe Acrobat、Photoshop、SVG 图像、Yahoo! 的 Widget 引擎，以及 Node.js 之类的服务器端环境。JavaScript 的实际应用远不止这些，除此之外还有 NoSQL 数据库（如开源的 Apache CouchDB）、嵌入式计算机，以及包括 GNOME （注：GNU/Linux 上最流行的 GUI 之一）在内的桌面环境等等。
-MDN

#### 概览
JavaScript是一种面向对象的动态语言，包含类型、运算符、标准内置（ built-in）对象和方法。

注意，JavaScript不支持类，类这一概念再Js中通过对象原型（Object Prototype）得到延续。
注意，`ES6中的class实际上是Js现有的基于原型的继承的语法糖`

另一主要方面,JavaScript中的函数也是对象。
JavaScript允许函数在包含可执行代码的同时，能像其他对象一样传递。

##### 1 数据类型
原始类型：
- Number
- Boolean
- String
- null
- undefined
- symbol (ES6)

Object:
- Function
- Array
- Date
- RegExp


对象
-创建对象
  - 对象字面量
  - 从类中实例化对象
- 对象成员
  - 名字
  - 值
    - 属性
    - 方法
- 访问对象的属性和方法
  - 链式
  - 点表示法(访问属性和方法)
  - 括号表示法(访问属性)
>数组做了索引数字到值得映射，对象做了名字字符到值得映射
- 设置对象的属性和方法
  - 点表示法=值|方法
  - 括号表示法=值
`注意 设置/访问 使用括号表示法可以使用变量，而点表示法不能使用变量，只能使用字面量的成员的名字`

- 对象中this指针
  - this指向了当前代码运行时的对象



数组
  - 修改器方法
    - 直接改变原来的数组
  - 访问方法
    - 不改变原来的数组，返回一个新数组
  - 迭代方法
    - 使用迭代方法遍历数组时候，不要尝试在遍历过程中对原数组进行任何修改
  - 数组泛型方法
    - 有时会希望在字符串或者其他类数组对象上，使用数组提供的方法，这种操作称为数组泛型方法