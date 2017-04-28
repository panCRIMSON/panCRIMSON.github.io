var snake = {
  body: null,
  direction: null,
  head: null,

  init: function(x, y, direction) {
    console.log("Stworzenie węża!")
    this.body = [];
    this.direction = direction;

    this.grow(x, y);
  },
  grow: function(x, y) {
    this.body.unshift({
      x: x,
      y: y
    });
    this.head = this.body[0];
  },
  makeSmaller: function () {
    return this.body.pop();
  }
}
