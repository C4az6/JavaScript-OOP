/* 
  私有属性的正式写法
    ES2022正式为class添加了私有属性，使用方式是在属性名之前使用#表示
*/

class IncreasingCounter {
  #count = 0;
  getValue() {
    console.log('Getting the current value!');
    return this.#count;
  }

  increment() {
    this.#count++;
  }
}


const counter = new IncreasingCounter();
// console.log(counter.#count)   // 报错
// 正确的调用方式
console.log(counter.getValue());
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getValue());
/* 
  上面代码中，#count就是私有属性，只能在类的内部使用（this.#count），如果在类的外部使用，就会报错。
  上面例子中，如果在类的外部读取或写入私有属性#count，都会报错
*/