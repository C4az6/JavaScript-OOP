/* 
  类的注意细节：
  1、类和模块的内部默认就是严格模式
  2、不存在变量提升
  3、name属性
  4、this指向
*/


// 不存在变量提升,类在没定义之前无法通过new创建实例
/* let f1 = new Foo();
console.log(f1.desc);
class Foo {
  desc = 'youkewang.top'
} */


/* {
  let Foo = class { }
  class Bar extends Foo { }
} */

// 由于本质上，ES6 的类只是 ES5 的构造函数的一层包装，所以函数的许多特性都被Class继承，包括name属性。
/* class Point {

}
// name属性总是返回紧跟在class关键字后面的类名。
console.log(Point.name) */



// this指向演示
// 类的方法内部如果含有this，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错。
/* class Logger {
  printName(name = 'there') {
    this.print(`Hello ${name}`)
  }

  print(text) {
    console.log(text)
  }
}

const logger = new Logger();
// const { printName } = logger;
// printName();

// 上面代码中，printName方法中的this，默认指向Logger类的实例。
// 但是，如果将这个方法提取出来单独使用，this会指向该方法运行时所在的环境（由于 class 内部是严格模式，所以 this 实际指向的是undefined），从而导致找不到print方法而报错。

logger.printName();
 */

/* 
  一个比较简单的解决方法是，在构造方法中绑定this，这样就不会找不到print方法了。
*/

class Logger {
  constructor() {
    this.printName = this.printName.bind(this);
  }
  printName(name = 'there') {
    this.print(`Hello ${name}`)
  }

  print(text) {
    console.log(text)
  }
}

const logger = new Logger();
const { printName } = logger;
printName();

// 上面代码中，printName方法中的this，默认指向Logger类的实例。
// 但是，如果将这个方法提取出来单独使用，this会指向该方法运行时所在的环境（由于 class 内部是严格模式，所以 this 实际指向的是undefined），从而导致找不到print方法而报错。

