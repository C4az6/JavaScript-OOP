class Foo {
  // 私有属性
  #privateValue = 42;
  // 静态方法,接收一个Foo的实例对象
  static getPrivateValue(foo) {
    return foo.#privateValue;
  }
}

console.log(Foo.getPrivateValue(new Foo));

/* 
  私有属性不限于从this引用，只要是在类的内部，实例也可以引用私有属性。
*/