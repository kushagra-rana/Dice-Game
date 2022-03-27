

//Generating Random Number for 1st Player
var randomno1=Math.floor(Math.random() * 6) + 1; //1-6

var randomdiceimage1="images/dice"+randomno1+".png"; //dice1-dice6

document.querySelectorAll("img")[0].setAttribute("src",randomdiceimage1);



//Generating Random Number for 1st Player

var randomno2=Math.floor(Math.random()*6) + 1;

var randomdiceimage2="images/dice"+randomno2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomdiceimage2);



//Comparing Randmom Numbers

if(randomno1 > randomno2)
{
  document.querySelector("h1").innerHTML="PLayer 1 Wins !";
}
else if(randomno2 > randomno1)
{
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else
{
  document.querySelector("h1").innerHTML="Draw!"
}
