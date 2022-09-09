var ask = Number(prompt("Please enter a number to check if it's EVENT or ODD?"))
var even = ask%2

var odd = ask%3
if(even === 0){
    console.log("This is an EVEN number!")
    alert("This is an EVEN number!")
}else if(odd === 0 || odd === 1 || odd === 2){
    console.log("This is an ODD number!")
    alert("This is an ODD number!")
}else{
    console.log("The entered number is not an Integer! Please try again")
    alert("The entered number is not an Integer! Please try again")
}
