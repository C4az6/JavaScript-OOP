class Foo {
  // 私有属性
  #a;
  #b;
  constructor(a, b) {
    this.#a = a;
    this.#b = b;
  }

  // 私有方法
  #sum() {
    return this.#a + this.#b;
  }
  // 普通方法
  printSum() {
    console.log(this.#sum());
  }
}

var foo = new Foo(666, 777);
foo.printSum();

// 上面例子中，#sum是一个私有方法,另外，私有属性也可以设置getter和setter方法