// 组合继承

function SuperType(name){
  this.name=name;
  this.color=['blue','red','yellow']
}

SuperType.prototype.sayName=function(){
  console.log(this.name);  
}

function SubType(name,age){
  //继承属性
  SuperType.call(this,name);

  this.age=age;
}

SubType.prototype=new SuperType();
SubType.prototype.constructor=SubType;
SubType.prototype.sayAge=function(){
  console.log(this.age)
}

const instance1=new SubType('Bob',21);
instance1.color.push('new color');
console.log(instance1.color);
instance1.sayName();
instance1.sayAge();

console.log(instance1.__proto__);
console.log(SubType.__proto__);
console.log('^^^^^^^^^^^^^^组合继承^^^^^^^^^^^^^^');


// 原型继承


// ES6类继承
class SuperT{
  getID(){
    return 1;
  }
}

class Sub extends SuperT{

}
console.log(Sub.__proto__);
console.log(Object.getPrototypeOf(Sub));
console.log(Sub.prototype);