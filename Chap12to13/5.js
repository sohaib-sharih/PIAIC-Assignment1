var correctPass = "adMin123";
var ask = prompt("Please enter your password?");


if(ask.length === 0){
    console.log("You have left the space BLANK. Please enter your password");
    alert("You have left the space BLANK. Please enter your password");
}else if(ask === correctPass){
    console.log("Correct! The password you entered matches the original password");
    alert("Correct! The password you entered matches the original password");
}else if(ask !== correctPass){
    console.log("Incorrect password");
    alert("Incorrect password");
}

ask.slice(0);
console.log(ask.length);