/* 
  私有属性和私有方法前面，也可以加上static关键字，表示这是一个静态的私有属性或私有方法。

  回顾：
    私有属性：只能在类的内部使用，在外部使用会报错
    静态属性：只能通过类自身进行调用，实例无法继承静态属性
*/

class FakeMath {
  static PI = 22 / 7;
  // 静态私有属性
  static #totallyRandomNumber = 4;

  static #computedRandomNumber() {
    return FakeMath.#totallyRandomNumber;
  }

  static random() {
    console.log('i heard you like random numbers');
    return FakeMath.#computedRandomNumber();
  }
}

console.log(FakeMath.PI);
console.log(FakeMath.random());

// FakeMath.#totallyRandomNumber;    // 报错
// FakeMath.#computedRandomNumber();   // 报错

/* 
  上面代码中，#totallyRandomNumber是私有属性，#computeRandomNumber()是私有方法，只能在FakeMath这个类的内部调用，外部调用就会报错。
*/