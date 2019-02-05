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
- pendding 进行中
- rejected 已失败
- fullfilled 已成功
  - resolve和reject函数
  由Promise提供的函数，
  resolve触发Promise.Prototype.then中成功的回调
  reject触发Promise.Prototype.then中失败的回调
  `resolve`和`reject`函数调用时如果带了参数，会传递给`.then()`方法中的回调函数

  - fullfilled 和 rejected状态
  Promise对象一开始是`pendding`状态
  执行了`resolve`之后，状态变为`fullfilled`,不会再改变
  执行了`reject`之后，状态变为`rejected`,不会再改变

  - 异常捕获
  - .then捕获
  - .catch捕获

`Promise在新建(new Promise())时就会立即执行`

```
let promise = new Promise(()=>{
  console.log(1)
})

promise.then(()=>{
  consolr.log(2)
})

console.log(3)

// 以上输出的顺序为 1 3 2
// 即new Promise()时，内部代码会立即执行(输出1)，然后执行同步任务(输出3)，在本轮同步任务完成后执行.then的微任务(输出2)
```
调用`resolve()`和`reject()`不会像`return`一样终结后续代码的执行，（所以一般情况下会把resolve和reject给return出去，避免了后续代码的执行，产生意外的Bug）
```
new Promise((resolve,reject)=>{
  resolve(1)
  console.log(2)
}).then( rs =>{
  console.log(rs)
})

//输出顺序 2 > 1
// 首先调用resolve后，console.log(2)还是会执行
// 其次立即resolved的Promise仍是微任务，还是在本轮循环结束时候作为// 微任务执行

// 所以 2 比 1 先输出
```

#### Promise.prototype.then

Promise`实例`有.then()方法,
then方法是定义在原型对象`Promise.prototype`上的
- 第一个参数是`resolved`状态的回调函数
- 第二个参数(可选)，是`rejected`状态的回调函数
- then方法返`回一个新的Promise实例`(注意，不是原来那个`Promise`实例),因此可以采用链式写法（即then方法后调用另一个then）



### 基本用法

### 手写promise
