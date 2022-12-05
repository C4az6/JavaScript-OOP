/* 
  静态方法：
  类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。


*/

class Foo {
  static classMethod() {
    return 'hello';
  }
}

console.log(Foo.classMethod());

var foo = new Foo();
// foo.classMethod();    直接报错,因为classMethod是静态方法不能被实例继承

