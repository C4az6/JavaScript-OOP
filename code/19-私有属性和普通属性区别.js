/*
  不管在类的内部或外部，读取一个不存在的私有属性，也都会报错。这跟公开属性的行为完全不同，如果读取一个不存在的公开属性，不会报错，只会返回undefined。
  上面示例中，#myCount是一个不存在的私有属性，不管在函数内部或外部，读取该属性都会导致报错。
*/

/* class IncreasingCounter {
  // 私有属性
  #count = 0;
  getValue() {
    console.log('getting the current value~');
    return this.#myCount;   // 报错，因为#myCount私有属性不存在
  }
  increment() {
    this.#count++;
  }
}
const counter = new IncreasingCounter();
counter.#myCount;   // 报错

 */

// 注意，私有属性的属性名必须包括#，如果不带#，会被当作另一个属性。

class Point {
  #x;
  constructor(x = 0) {
    // 转成number类型
    this.#x = +x;
  }
  get x() {
    console.log('exec get x attr')
    return this.#x;
  }

  set x(value) {
    console.log('exec set x attr')
    this.#x = +value;
  }
}
/* 
  上面示例中，#myCount是一个不存在的私有属性，不管在函数内部或外部，读取该属性都会导致报错。

  注意，私有属性的属性名必须包括#，如果不带#，会被当作另一个属性。
*/

var p1 = new Point('666');
console.log(p1.x);
p1.x = '777';
console.log(p1.x);
