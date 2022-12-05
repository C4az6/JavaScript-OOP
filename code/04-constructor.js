/* 
  constructor方法总结：
    1. constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用这个方法，一个类必须有constructor方法，如果没有显示定义，会自动添加一个空的constructor
    2. constructor()方法默认返回实例对象（即this），完全可以指定返回另外一个对象。
    3. 类生成实例必须使用new关键字，否则会报错
*/


// demo1 code...
/* class Point {

}

// 等同于
class Point {
  constructor() { }
} */


class Foo {
  constructor() {
    return Object.create(null);
  }
}

// constructor函数返回一个全新的对象，导致实例对象不是Foo类的实例
console.log(new Foo() instanceof Foo)   // false

