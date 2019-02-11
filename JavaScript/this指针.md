参考：
  https://juejin.im/post/59bfe84351882531b730bac2
### this的指向
> ES5中 this永远指向最后调用它的那个对象
> ES5中 this永远指向最后调用它的那个对象
> ES5中 this永远指向最后调用它的那个对象

```
fn()
/*
  ===window.fn()     
 最后调用fn()的是window,
 this指向window对象
*/


window.a.fn()   
//最后调用fn()的是对象a
//this指向a对象

```
### 怎么改变this指向
- ES6的箭头函数
- 在函数内部使用`_this=this`
- 使用`apply`,`call`,`bind`
- new实例化一个对象

#### 箭头函数
- 箭头函数的this始终指向函数定义时的this，而非执行时（调用时）
- **箭头函数中没有this指针，必须通过作用域链来查找。**
- **箭头函数this指针指向最近一层非箭头函数的this，否则，this为undefined**

#### 使用`_this=this`
不使用ES6的前提下最简单的方式，将调用整个函数的对象保存在`_this`中，然后都使用`_this`的话指针就不会出错了
```
    var name = "windowsName";

    var a = {

        name : "Cherry",

        func1: function () {
            console.log(this.name)     
        },

        func2: function () {
            var _this = this;
            setTimeout( function() {
                _this.func1()
            },100);
        }

    };

    a.func2()       // Cherry

```

#### 使用apply、call、bind
- apply和call
apply和call类似，都可以改变this指向为传入的对象，并传入参数，区别在于传入参数的方法有些差异。

call接受的是若干个参数，第一个为this指向的对象，其余为函数的参数。
而apply接受的是一个对象和一个参数的数组

- bind和前两者都不同
区别在于前两者是直接改变原函数执行时候的this，而bind是`返回一个改变了this的新的函数`,需要手动去调用


### 补充：JS中函数的调用
- 1 作为一个`普通函数调用`
  根据`this指向最后调用它的对象`，指向window
- 2 `作为对象的方法调用`
根据`this指向最后调用它的对象`，指向`最后(右)调用它的对象`
- 3 使用`构造函数调用`(new关键字调用)

new的操作符的执行步骤：
```
1 创建一个新对象
2 将构造函数的作用域赋给新对象（因此this指向了这个新对象）
3 执行构造函数中的代码(为新对象添加属性)
4 返回新对象
```
根据`new关键字的执行过程`，指向`实例对象`

- 4 作为`函数的方法调用`(匿名函数,apply,call,setTimeout)
**匿名函数的this永远指向window**,
按照`this指针永远指向最后调用它的那个对象`来解释，匿名函数没有名字，所以无法被其他对象调用，所以this永远指向window。

而通常匿名函数都是自执行的，比如setTimeout中定义的函数，或者在后面加`()`使其自执行。



