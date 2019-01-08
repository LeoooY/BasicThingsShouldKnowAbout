- require: node 和 es6 都支持的引入
- export / import : 只有es6 支持的导出引入
- module.exports / exports: 只有 node 支持的导出


module.exports 和 exports有什么关系？
- 在一个node执行一个文件时，会给这个文件内生成一个`exports`和`module`对象
- 而`module`又有一个`export`属性
```
//utils.js
let a = 100;

console.log(module.exports); //能打印出结果为：{}
console.log(exports); //能打印出结果为：{}

exports.a = 200; //这里辛苦劳作帮 module.exports 的内容给改成 {a : 200}

exports = '指向其他内存区'; //这里把exports的指向指走

//test.js

var a = require('/utils');
console.log(a) // 打印为 {a : 200}

```

- 而`require`导出的内容是`module.exports`的指向的内存块内容
- 简单地说，`exports`只是`module.expots`的引用
- 结果到最后真正被`require`出去的内容还是`module.exports`的


参考
  - [exports、module.exports 和 export、export default 到底是咋回事](https://juejin.im/post/597ec55a51882556a234fcef)
  - [module.exports vs exports in Node.js | StackOverflow](https://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-node-js)