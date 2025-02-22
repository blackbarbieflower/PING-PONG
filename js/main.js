let on= true;
ball.draw();

function drawFrame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGridSystem();
  ball.draw();
  ball.updatePosition(); 
  paddle_machine.draw();
  paddle_player.draw();
  paddle_machine.followBall();
  drawPoints();
  if (checkGameOver()) on = false;
}
canvas.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseY = event.clientY - rect.top;
    paddle_player.y = mouseY - paddle_machine.height / 2;
  });
setInterval(() => {
  if (on) drawFrame();
}, 1000 / 60);

