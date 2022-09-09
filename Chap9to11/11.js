var askA = Number(prompt("Enter your First Number?"))
var askB = Number(prompt("Enter your Second Number?"))
var askC = prompt("Enter an Operation you want to perform from +, -, *, /, % ?")

var multiply = "*"
var division = "/"
var subtract = "-"
var add = "+"
var percentage = "%"

if(askC == add){
    alert(askA + askB);
    console.log(askA + askB);
    
}else if(askC == subtract){
    alert(askA - askB);
    console.log(askA - askB);
    
}else if(askC == multiply){
    alert(askA * askB)
    console.log(askA * askB)
}else if(askC == division){
    alert(askA / askB)
    console.log(askA / askB)
}else if(askC == percentage){
    alert((askA / askB)*100)
    console.log((askA / askB)*100)
}else{
    alert("You may have entered the wrong Values or Operation Symbol, please try again.")
    console.log("You may have entered the wrong Values or Operation Symbol, please try again.")
}