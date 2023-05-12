const randImg = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];

var player1 = Math.floor(Math.random()*randImg.length);
console.log("Player 1 = " + player1);
document.querySelector(".img1").setAttribute("src",randImg[player1]);

var player2 = Math.floor(Math.random()*randImg.length)
console.log("Player 2 = " + player2);
document.querySelector(".img2").setAttribute("src",randImg[player2]);

if (player1>player2) {
    document.querySelector("h1").textContent ="Player 1 Wins! 🥳";
    console.log(h1);
}
else if (player2>player1) {
    document.querySelector("h1").textContent= "Player 2 Wins! 🥳";
}
else{
    document.querySelector("h1").textContent = "It's a Draw";
}