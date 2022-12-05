/* 
  取值函数（getter）和存值函数（setter）
*/

/* class MyClass {
  constructor() {
  }

  get prop() {
    return 'getter';
  }

  set prop(value) {
    console.log('setter: ', value);
  }
}

let inst = new MyClass();
inst.prop = 123;    // 触发set函数
console.log(inst.prop)  // 触发get函数 */

/* 
  上面代码中，prop属性有对应的存值函数和取值函数，因此赋值和读取行为都被自定义了。
*/


class CustomHTMLElement {
  constructor(element) {
    this.element = element;
  }

  get html() {
    return this.element.innerHTML;
  }

  set html(value) {
    this.element.innerHTML = value;
  }
}

var descriptor = Object.getOwnPropertyDescriptor(
  CustomHTMLElement.prototype, "html"
);
console.log("descriptor: ", descriptor);