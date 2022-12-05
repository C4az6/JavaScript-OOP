class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return this.x + this.y;
  }
}

var p1 = new Point(2, 3);
var p2 = new Point(3, 2);
console.log(p1.toString())
p1.__proto__.printName = function () {
  return 'Oops'
}

console.log(p1.printName());

// 创建一个新实例
var p3 = new Point(4, 2);
console.log(p3.printName());
console.log(p3.toString());
console.log(p3.printName === p1.printName);   // ture，说明共享的是Point原型上的同一个方法，而且还是同一块内存地址
/* 
  可以通过实例的__proto__属性为“类”添加方法。
  上面代码在p1的原型上添加了一个printName()方法，由于p1的原型就是p2的原型，因此p2也可以调用这个方法。而且，此后新建的实例p3也可以调用这个方法。这意味着，使用实例的__proto__属性改写原型，必须相当谨慎，不推荐使用，因为这会改变“类”的原始定义，影响到所有实例。
*/

/* 
  __proto__ 并不是语言本身的特性，这是各大厂商具体实现时添加的私有属性，虽然目前很多现代浏览器的 JS 引擎中都提供了这个私有属性，但依旧不建议在生产中使用该属性，避免对环境产生依赖。生产环境中，我们可以使用 Object.getPrototypeOf() 方法来获取实例对象的原型，然后再来为原型添加方法/属性。
*/

var p1_prototype = Object.getPrototypeOf(p1);
console.log(p1_prototype);
console.log('p1_prototype exec: ', p1_prototype.printName());