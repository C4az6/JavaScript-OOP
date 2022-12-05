/* 
  类的实例：
  1.创建实例必须使用new关键字，否则报错
  2.类的属性和方法，除非显示定义在this上，否则都定义在原型上（class）上
*/

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `${this.x + this.y}`
  }
}

var point = new Point(2, 3);

console.log(point.toString())

point.toString();
console.log(point.hasOwnProperty('x')) // true
console.log(point.hasOwnProperty('y')) // true
console.log(point.hasOwnProperty('toString')) // false
// 判断point实例对象的原型对象上面是否有toString属性
console.log(point.__proto__.hasOwnProperty('toString')) // true

/* 
  上面代码中，x和y都是实例对象point自身的属性（因为定义在this对象上），所以hasOwnProperty()方法返回true，而toString()是原型对象的属性（因为定义在Point类上），所以hasOwnProperty()方法返回false。
  这些都与 ES5 的行为保持一致。
*/

// 与 ES5 一样，类的所有实例共享一个原型对象。
var p1 = new Point(2, 3);
var p2 = new Point(3, 2);
console.log(p1.__proto__ === p2.__proto__)
// 上面代码中，p1和p2都是Point的实例，它们的原型都是Point.prototype，所以__proto__属性是相等的。

