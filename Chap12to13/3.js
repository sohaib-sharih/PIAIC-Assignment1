
var ask = Number(prompt("Please enter your number to check if its a POSITIVE, NEGATIVE or a ZERO?"));
console.log(ask, typeof ask)
var check;
// var positive = ask > 0;
// var negative = ask < 0;
// var zero = ask === 0;

if(ask > 0){
    console.log("POSITIVE");
    alert("POSITIVE");

}else if(ask < 0){
    console.log("NEGATIVE!");
    alert("NEGATIVE!");

}else if(ask === 0){
    console.log("ZERO!");
    alert("ZERO!");

}else{
    console.log("You need to enter a value that is a Numerical, please try again!")
}