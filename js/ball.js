const ball = {
    x: 100,
    y: 50,
    dx: 2,
    dy: 2,
    radius: 8,
    color: "lightblue",
    draw: function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = ball.color;
      ctx.fill();
      ctx.closePath();
    },
    updatePosition: function () {
      this.x += this.dx;
      this.y += this.dy;
      this.checkCollision();
      this.checkCollisionWithPaddle();
    },
    checkCollision: function () {
      //colisión derecha
      if (this.x + this.radius > canvas.width) {
        playersPoints.player1++;
        this.reverseDirection("x");
      
      }
      //colisión izquierda
      if (this.x - this.radius < 0){
        playersPoints.player2++
        this.reverseDirection("x");
      }
      //colisión arriba-abajo
      if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
        this.reverseDirection("y");
      }
     
    },
    checkCollisionWithPaddle: function () {
      if (
        this.x + this.radius > paddle_player.x &&
        this.y > paddle_player.y &&
        this.y < paddle_player.y + paddle_player.height
      ) {
        this.reverseDirection("x");
        synth.triggerAttackRelease("B3", "8n");
      }
      if (
        this.x - this.radius < paddle_machine.x + paddle_machine.width &&
        this.y > paddle_machine.y &&
        this.y < paddle_machine.y + paddle_machine.height
      ) {
        this.reverseDirection("x");
        synth.triggerAttackRelease("G3", "8n");
      }
    },
    reverseDirection: function (axis) {
      if (axis === "x") {
        this.dx = -this.dx;
      } else if (axis === "y") {
        this.dy = -this.dy;
      }
    },
  };