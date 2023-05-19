var randomNumber = Math.floor((Math.random()*6))+1;
var randomNumber2 = Math.floor((Math.random()*6))+1;
document.querySelector(".img1").setAttribute("src","./images/dice"+(randomNumber)+".png");
document.querySelector(".img2").setAttribute('src','./images/dice'+(randomNumber2)+'.png');
var text;
if(randomNumber>randomNumber2)text = "Player 1 Wins!";
else if(randomNumber===randomNumber2)text = "Draw!";
else text = "Player 2 Wins!";
document.querySelector("h1").textContent = text;