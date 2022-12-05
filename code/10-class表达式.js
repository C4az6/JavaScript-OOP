/* 
  Class表达式
  与函数一样，类也可以使用表达式的形式定义。
*/


// 与函数一样，类也可以使用表达式的形式定义,其实就是把一个类赋值给一个变量
/* const MyClass = class Me {
  getClassName() {
    return Me.name;
  }
}

let inst = new MyClass();
console.log(inst.getClassName());  // Me
// Me.name  直接使用会报错

// 上面代码表示，Me只在 Class 内部有定义。
 */

// 采用class表达式，可以写出立即执行的Class
let person = new class {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}('张三');

person.sayName();
