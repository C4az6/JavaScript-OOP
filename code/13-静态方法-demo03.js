class Foo {
  static classMethod() {
    return 'hello'
  }
}


class Bar extends Foo {
  // 静态方法也可以从super上调用
  static classMethod() {
    // 静态方法也是可以从super对象上调用的。
    return super.classMethod() + ', too';
  }
}

console.log(Bar.classMethod());    // hello