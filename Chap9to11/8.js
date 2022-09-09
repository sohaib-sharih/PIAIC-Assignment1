var ask = Number(prompt("Enter a number that is divisible by 3"));
var division = ask / 3

var remainder = ask%3
if(remainder === 0){
    console.log("Congratulations! Your number is divisible by 3");
    alert("Congratulations! Your number is divisible by 3");
}else if(remainder !== 0){
    console.log("Sorry your number is not divisible by 3");
    alert("Sorry your number is not divisible by 3");
}

