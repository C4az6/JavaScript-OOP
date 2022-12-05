/* class Point { };
console.log(typeof Point);    // 类的数据类型就是function
console.log(Point === Point.prototype.constructor);   // 类本身就指向构造函数
 */

/* class Point {
  constructor() {
    // ...
  }

  toString() {
    // ...
  }

  toValue() {
    // ...
  }
}

// 等同于

Point.prototype = {
  constructor() {},
  toString() {},
  toValue() {},
}; */


/* class B { }
const b = new B();
console.log(b.constructor === B.prototype.constructor)    // true
 */
// b是B类的实例，它的constructor()方法就是B类原型的constructor()方法。

/* class Point {
  constructor() {

  }
} */

// 类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。
/* Object.assign(Point.prototype, {
  toString() { console.log('toString function exec') },
  toValue() { console.log('toValue function exec') }
})
var p = new Point();
console.log(p.toValue());

// prototype对象的constructor属性，直接指向“类”的本身，这与 ES5 的行为是一致的。
// console.log(Point.prototype.constructor === Point); */

/* class Point {
  constructor(x, y) {

  }
  toString() {

  }
}
// 类的内部所有定义的方法，都是不可枚举的（non-enumerable）。
console.log(Object.keys(Point.prototype));

console.log(Object.getOwnPropertyNames(Point.prototype))
// ["constructor","toString"]

// 注意！！！ES5中构造函数内部定义的方法，是可以被枚举的，这一点和ES6的行为不一致
 */




/* 
  总结：
  1.类的本质就是构造函数的语法糖实现
  2.使用的的时候也是直接对类使用new关键词，和构造函数的用法一致
  3.类的所有方法都定义在类的prototype属性上面
*/

