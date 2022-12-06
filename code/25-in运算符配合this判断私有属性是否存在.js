/* 
  这种用法的in，也可以跟this一起配合使用。
  注意，判断私有属性时，in只能用在类的内部。

*/

class A {
  #foo = 0;
  m() {
    // 通过in判断当前实例中是否有私有属性
    console.log(#foo in this);    // true
    console.log(#bar in this);    // false
  }
}

// 上面示例中，SubA从父类继承了私有属性#foo，in运算符也有效。

