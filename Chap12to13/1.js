var ask = prompt("Enter a single Character to check whether its a number, uppercase or lowercase letter?");

if(ask > 0 || ask < 0){
    console.log("This character is a Number!");
    alert("This character is a Number!");

}else if(ask === ask.toLowerCase()){
    console.log("This character is a LOWERCASE!")
    alert("This character is a LOWERCASE!")
}else if(ask === ask.toUpperCase()){
    console.log("This character is an UPPERCASE!")
    alert("This character is an UPPERCASE!")
}else{
    console.log("You have not entered a number nor a letter, please try again!")
    alert("You have not entered a number nor a letter, please try again!")
}