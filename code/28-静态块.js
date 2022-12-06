/* 
  静态块:
  静态属性的一个问题是，如果它有初始化逻辑，这个逻辑要么写在类的外部，要么写在constructor()方法里面。


  每个类允许有多个静态块，每个静态块中只能访问之前声明的静态属性。另外，静态块的内部不能有return语句。

  静态块内部可以使用类名或this，指代当前类。
*/

class C {
  static x = 1;
  static {
    this.x; // 1
    C.x;    // 1
  }
}

// 上面示例中，this.x和C.x都能获取静态属性x。

/* 
  除了静态属性的初始化，静态块还有一个作用，就是将私有属性与类的外部代码分享。
*/

let getX;

export class C {
  #x = 1;
  static {
    getX = obj => obj.#x;
  }
}

console.log(getX(new C())); // 1
/* 
  上面示例中，#x是类的私有属性，如果类外部的getX()方法希望获取这个属性，以前是要写在类的constructor()方法里面，这样的话，每次新建实例都会定义一次getX()方法。现在可以写在静态块里面，这样的话，只在类生成时定义一次。
*/