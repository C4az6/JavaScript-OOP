/* 
  注意，in运算符对于Object.create()、Object.setPrototypeOf形成的继承，是无效的，因为这种继承不会传递私有属性。
*/


class A {
  #foo = 0;
  static test(obj) {
    console.log(#foo in obj);
  }
}

const a = new A();

const o1 = Object.create(a);
A.test(o1); // false
A.test(o1.__proto__);   // true

const o2 = {};
Object.setPrototypeOf(o2, a);
A.test(o2);   // false
A.test(o2.__proto__);   // true


// 上面示例中，对于修改原型链形成的继承，子类都取不到父类的私有属性，所以in运算符无效。