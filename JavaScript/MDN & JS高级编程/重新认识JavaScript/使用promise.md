一个Promise就是一个代表了异步操作最终完成或者失败的结果对象
>大多数人仅仅使用Promise，本教程首先说明怎样使用Promise。之后说明如何创建Promise
- [Promise | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises)

- [PromiseBook ](http://liubin.org/promises-book/#_)
- [深入理解Promise运行原理](https://juejin.im/post/5a5ea6f56fb9a01cbf385e62)
>The woods are lovely, dark and deep. But I have promises to keep, and miles to go before I sleep. — Robert Frost


Promise本质上是一个绑定了回调的对象，而不是将回调传进函数内部

- Promise
不同于传统的回调，在应用Promise时候


### 什么是Promise
Promise可以认为是一种用来解决异步处理的代码规范，常见的异步处理是使用回调函数，回调函数有同步回调和异步回调两种模式，一般回调函数指的是异步的回调

`回调地狱`指的就是为了保证正确的执行顺序而写出的多层的嵌套回调

为了等前面的数据都准备号，必须要一层一层嵌套回调函数，就形成了call back hell

如果改用Promise的写法，则是`链式调用`

### Promise对象和状态
- resolve和reject函数
由Promise提供的函数，
resolve触发Promise.Prototype.then中成功的回调
reject触发Promise.Prototype.then中失败的回调
- fullfilled 和 rejected状态
Promise对象一开始是`pendding`状态
执行了`resolve`之后，状态变为`fullfilled`,不会再改变
执行了`reject`之后，状态变为`rejected`,不会再改变

异常捕获
- .then捕获
- .catch捕获

### 手写promise
