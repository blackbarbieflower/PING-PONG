const playersPoints = {
    player1:0,
    player2:0,
};
const MAX_POINTS = 5;

function drawPoints(){
    ctx.font = "30px Monospace"
    ctx.fillStyle = "lightblue"
    ctx.fillText(playersPoints.player1, 100,50);
    ctx.fillText(playersPoints.player2, canvas.width - 100, 50);


}

function checkGameOver(){
    if(playersPoints.player1 >= MAX_POINTS || playersPoints.player2 >= MAX_POINTS) {
        ctx.font = "30px monospace";
        ctx.fillStyle = "orange"
        ctx.fillText("Fin de la partida", canvas.width / 2 - 100, canvas.height /2);
        return true
    }
        return false
    

}