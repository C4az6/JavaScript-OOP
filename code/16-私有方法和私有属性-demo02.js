class Widget {
  foo(baz) {
    // this指向实例对象
    return bar.call(this, baz)
  }
}

// 将私有方法移出类，因为类内部的方法都是对外可见的
function bar(baz) {
  return this.snaf = baz;
}

var w1 = new Widget;
console.log(w1.foo('youkewang.top'))