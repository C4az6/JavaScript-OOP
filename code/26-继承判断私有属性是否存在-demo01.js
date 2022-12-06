/* 
  注意，判断私有属性时，in只能用在类的内部。
  子类从父类继承的私有属性，也可以使用in运算符来判断
*/

class A {
  #foo = 0;
  static test(obj) {
    console.log(#foo in obj);
  }
}


class SubA extends A { }

A.test(new SubA());   // true

// 上面示例中，SubA从父类继承了私有属性#foo，in运算符也有效。

