与其他语言相比，函数的 this 关键字在 JavaScript 中的表现略有不同，此外，在严格模式和非严格模式之间也会有一些差别。

- 在绝大多数情况下，函数的调用方式决定了this的值。
- this不能在执行期间被赋值，并且在每次函数被调用时this的值也可能会不同。
- ES5引入了bind方法来设置函数的this值，而不用考虑函数如何被调用的，
- ES2015 引入了支持this词法解析的箭头函数（它在闭合的执行环境内设置this的值）。
- 箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this
### 全局环境
无论是否在严格模式下，在全局执行环境中（在任何函数体外部）this 都指代全局对象。
```
// 在浏览器中, window 对象同时也是全局对象：
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b)  // "MDN"
console.log(b)         // "MDN"
```

### 函数（运行内）环境







参考：
  - [this | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)