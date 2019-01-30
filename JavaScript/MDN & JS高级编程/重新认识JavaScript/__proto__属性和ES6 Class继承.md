[__proto__ 属性与 ES6 classes 的继承](https://idiotwu.me/proto-property-and-es6-classes-inheritance/)


babel对继承的实现
```JavaScript

function _inherits(subClass, superClass) {  
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

```