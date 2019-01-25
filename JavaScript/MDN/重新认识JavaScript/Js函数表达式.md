目录
- 概述
- 递归
- 闭包
  
定义函数的方式
- 函数声明
```
function funcName(){
  ......
}
```
关于函数声明，一个重要特征：`函数声明提升`
意思是在执行代码之前会先读取安徽念书声明。(这意味着可以把函数声明放在调用它的语句后面)

```
sayHi();
function sayHi(){......}
```
- 函数表达式
  - 匿名函数
```
var sayHi=function(){
  ......
}
```
### 递归
函数调用自身

使用arguments.callee()调用自身更安全，
arguments.callee是一个指向正在执行的函数的指针

```
function A(num){
  return num+arguments.callee(num-1);
}
```

### 闭包
`闭包`是指有权访问另一个函数作用域中的变量的函数

创建闭包
- 在函数内部创建另一个函数

##### 函数
- 声明
- 调用
- 参数
  - arguements
- 伪重载
##### 作用域链



