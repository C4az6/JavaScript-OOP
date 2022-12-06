const bar = Symbol('bar');
const snaf = Symbol('snaf');

/* 
  还有一种方法是利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值。
*/
class myClass {

  // 公有方法
  foo(baz) {
    this[bar](baz);
  }

  // 私有方法
  [bar](baz) {
    return this[snaf] = baz;
  }

  // ...
};

// 上面代码中，bar和snaf都是Symbol值，一般情况下无法获取到它们，因此达到了私有方法和私有属性的效果。但是也不是绝对不行，Reflect.ownKeys()依然可以拿到它们。


const inst = new myClass();

console.log(Reflect.ownKeys(myClass.prototype))
// [ 'constructor', 'foo', Symbol(bar) ]

// 上面代码中，Symbol 值的属性名依然可以从类的外部拿到。


