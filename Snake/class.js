class Snake {
  constructor(props) {
    this.body = props.body;
    this.direction = props.direction;
  }
  changeDirection(code) {
    this.direction = code;
  }
  Move(increX, increY){
    let [x, y] = this.body[this.body.length - 1];
    this.body.shift();
    this.body.push([x + this.increX, y + this.increY]);
  }
  drawn(context, widthSquare, heightSquare) {
    // context.clearRect(0,0,canvas.width, canvas.height);

    for (let i = 0; i < this.body.length; i++) {
      const [x, y] = this.body[i];
      context.fillStyle = "orange";
      context.fillRect(
        x * widthSquare,
        y * heightSquare,
        widthSquare,
        heightSquare
      );
    }
  }
}
