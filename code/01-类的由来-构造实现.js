function Point(x, y) {
  this.x = x;
  this.y = y;
}

// 给Point构造函数的原型上挂载toString方法
Point.prototype.toString = function () {
  return (this.x + this.y);
}

var p = new Point(1, 2);
console.log(p.toString());    // 3

