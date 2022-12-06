/* 
  私有方法和私有属性

  私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。这是常见需求，有利于代码的封装，但早期的 ES6 不提供，只能通过变通方法模拟实现。
 */


class Widget {
  // 公有方法
  foo(baz) {
    return this._bar(baz);
  }

  // 私有方法
  _bar(baz) {
    return this.snaf = baz;
  }
}

var w1 = new Widget();
console.log(w1.foo(666));
// 上面代码中，_bar()方法前面的下划线，表示这是一个只限于内部使用的私有方法。但是，这种命名是不保险的，在类的外部，还是可以调用到这个方法。

