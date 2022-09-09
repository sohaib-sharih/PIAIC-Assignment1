var gNum = Math.floor((Math.random() * 10) + 1)
console.log("SECRET NUMBER: " + gNum);

var ask = Number(prompt("Guess the number between 1 and 10"))
console.log(typeof ask);

switch(ask){
    case gNum:
        console.log("Bingo! Correct answer")
        break;
        
    case gNum + 1 :
        console.log("Close enough to the correct answer")
        break;

    default :
        console.log("Try again")
        break;
        
}