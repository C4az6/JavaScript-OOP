/* 
  前面说过，直接访问某个类不存在的私有属性会报错，但是访问不存在的公开属性不会报错。这个特性可以用来判断，某个对象是否为类的实例。
*/


/* class C {
  #brand;

  static isC(obj) {
    try {
      // 如果obj.#brand能正常运行，说明obj就是C的实例对象
      obj.#brand;
      return true;
    } catch (error) {
      return false;
    }
  }
}

console.log(C.isC({ name: 'alex' }));   // false
console.log(C.isC(new C));    // true
 */

/* 
  上面示例中，类C的静态方法isC()就用来判断，某个对象是否为C的实例。它采用的方法就是，访问该对象的私有属性#brand。如果不报错，就会返回true；如果报错，就说明该对象不是当前类的实例，从而catch部分返回false。

  因此，try...catch结构可以用来判断某个私有属性是否存在。但是，这样的写法很麻烦，代码可读性很差，ES2022 改进了in运算符，使它也可以用来判断私有属性。
*/


class C {
  #brand;
  static isC(obj) {
    /* if (#brand in obj) {
      // 私有属性 #brand 存在
      return true;
    } else {
      // 私有属性 #foo 不存在
      return false;
    } */

    // 三元表达式写法
    // return #brand in obj ? true : false;

    return #brand in obj || false
  }
}

console.log(C.isC({ name: 'aleex' }));
console.log(C.isC(new C));

/* 上面示例中，in运算符判断某个对象是否有私有属性#foo。它不会报错，而是返回一个布尔值。 */


