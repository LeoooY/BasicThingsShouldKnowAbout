function Promise(fn){
  //设置回调函数
  let callback=null;

  //定义then方法
  this.then=function(cb){
    callback=cb;
  }

  function resolve(value){
    setTimeout(()=>{
      callback(value);
    })
  }

  fn(resolve)



}

function doSome(){
  return new Promise(function(resolve){
    let num=42;
    resolve(42);
  })
}


doSome().then((num)=>{
  console.log(num);
})
console.log(1);