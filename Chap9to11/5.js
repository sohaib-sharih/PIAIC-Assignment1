// Section A
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
} 
// SECTION A IS TRUE
console.log("OUTPUT for SECTION A => Alert message will be displayed.")


// Section B
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// SECTION B IS FALSE
console.log("OUTPUT for SECTION B => Alert message for SECTION B will not be displayed")


// Section C
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

console.log("OUTPUT for SECTION C => Alert message will display condition 2 AND Condition 4, because iteration for c is POST INCREMENT in the first condition, therefore 2nd condition is true. And 4th condition is true because iteration of c is PRE INCREMENT so C at the 4th conditional statement equals to 14.")

//Section D

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

console.log("OUTPUT for SECTION D => will be displayed because the Sum of materialCost + laborCost is equivalent to totalCost ")

// Section E

if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
console.log("OUTPUT FOR SECTION E => will display Alert message TRUE, because default value of boolean is TRUE and variable is not defined or a criteria is not set.")

// Section F

if("car" < "cat"){
    alert("car is smaller than cat");
}
console.log("OUTPUT for SECTION F => is True, because characters of CAR are less than CAT, therefore ALERT Message will appear.")

