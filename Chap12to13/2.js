var numA = Number(prompt("Enter the first number please?"));
var numB = Number(prompt("Enter the second number please?"));

if(numA === numB){
    console.log("Both the numbers are equal!");
    alert("Both the numbers are equal!");
}else if(numA > numB){
    console.log("Your FIRST number is LARGER than the 2nd number!");
    alert("Your FIRST number is LARGER than the 2nd number!");
}else if(numA < numB){
    console.log("Your SECOND number is LARGER than the 1st number!")
    alert("Your SECOND number is LARGER than the 1st number!")
}else{
    console.log("Your values should be in numeric form, please try again!")
    alert("Your values should be in numeric form, please try again!")
}