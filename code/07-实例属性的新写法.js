/*
  实例属性的新写法：
  1.ES2022 为类的实例属性，又规定了一种新写法。实例属性现在除了可以定义在constructor()方法里面的this上面，也可以定义在类内部的最顶层。
*/

/* class IncreasingCounter {
  constructor() {
    this._count = 0;
  }
  getValue() {
    console.log('Getting the current value!');
    return this._count;
  }
  increment() {
    this._count++;
  }
}

var count1 = new IncreasingCounter();
console.log(count1.getValue())
console.log(count1.increment());
console.log(count1._count); */

// 上面示例中，实例属性_count定义在constructor()方法里面的this上面。
// 现在的新写法是，这个属性也可以定义在类的最顶层，其他都不变。

class IncreasingCounter {
  _count = 0;
  getValue() {
    console.log('Getting the current value');
    return this._count;
  }
  increment() {
    this._count++;
  }
}
var count1 = new IncreasingCounter;
console.log(count1.getValue());
count1.increment();
count1.increment();
count1.increment();
console.log(count1.getValue());
console.log(count1._count);
/* 
  注意，新写法定义的属性是实例对象自身的属性，而不是定义在实例对象的原型上面。
  这种新写法的好处是，所有实例对象自身的属性都定义在类的头部，看上去比较整齐，一眼就能看出这个类有哪些实例属性。
*/
