var askTemp = Number(prompt("What is the temperature in your city?"));

if(askTemp > 40){
    console.log("It is too hot outside.")
    alert("It is too hot outside.")
}else if(askTemp > 30 && askTemp <= 40){
    console.log("The Weather today is Normal.")
    alert("The Weather today is Normal.")
}else if(askTemp > 20 && askTemp <= 30){
    console.log("Today’s Weather is cool.")
    alert("Today’s Weather is cool.")
}else if(askTemp > 10 && askTemp <= 20){
    console.log("OMG! Today’s weather is so Cool.")
    alert("OMG! Today’s weather is so Cool.")
}else{
    console.log("Your number is invalid")
    alert("Your number is invalid")
}