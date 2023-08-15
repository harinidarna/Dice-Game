var num1=Math.floor(Math.random()*6)+1;
var image1="images/dice" +num1+ ".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);

var num2=Math.floor(Math.random()*6)+1;
var image2="images/dice" +num2+ ".png";
document.querySelectorAll("img")[1].setAttribute("src",image2); 

if(num1>num2){
    document.querySelector("h1").innerHTML=" 🚩Player1 wins";
}else if(num2>num1){
    document.querySelector("h1").innerHTML="Player2 wins 🚩";
}else{
    document.querySelector("h1").innerHTML="Draw!";
}

