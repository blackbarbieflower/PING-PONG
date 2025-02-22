const paddle_machine = {
    x: 10,
    y: canvas.height / 2 - 30,
    width: 10,
    height: 60,
    color: "#656be6",
    speed: 5,
    side: "left",
    draw: function () {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    },
    followBall: function () {
      if (ball.y < this.y + this.height / 2) {
        this.y -= this.speed -4;
      }else{
        this.y += this.speed -4;
      }
      
       canvas.height - this.height;
        
    }
    
  };
  
  const paddle_player = {
    x: canvas.width - 20,
    y: canvas.height / 2 - 30,
    width: 10,
    height: 60,
    color: "#2e34a3",
    speed: 5,
    side: "right",
    draw: function () {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    },
    updatePosition: function () {
      this.checkCollision();
    },
    moveUp: function () {
      this.y -= this.speed;
    },
    moveDown: function () {
      this.y += this.speed;
    },
    checkCollision: function () {
      if (this.y < 0) {
        this.y = 0;
      } else if (this.y + this.height > canvas.height) {
        this.y = canvas.height - this.height;
      }
    },
  };