/* 
  属性表达式
  类的属性名，可以采用表达式
*/

let methodName = 'getArea';
class Square {
  constructor(length) {

  }

  [methodName]() {
    console.log('hello~')
  }
}

// 上面代码中，Square类的方法名getArea，是从表达式得到的。
let s1 = new Square();
console.log(s1.getArea());
// 打印类的内部原型属性
console.log(Object.getOwnPropertyNames(Square.prototype));

