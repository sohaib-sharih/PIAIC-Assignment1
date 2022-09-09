var numA = [24, 53, 78, 91, 12];
var numB = [];
var numC = 200;
var counter = 1;

for(var m = 0; m < numA.length; m++){
    if(numA[m] < 20){
        var storeNum = numA[m]
        var largest = Math.max(storeNum, ...numA);
    }
}
console.log("Array items ==>" + numA)
document.write("Array items ==>" + numA + "<br>")
console.log("The largest number is: " + largest)
document.write("The largest number is: " + largest)


/*BELOW IS ROUGH WORK*/        

/*
var largestNum = Math.max(counter, ...numA) 
console.log(largestNum)
//==>The above Math.max can store 2 or multiple numbers, or numbers inside variables, numbers inside an array called by arrayName + index position.
*/

// for(var m = 0; m < numA.length; m++){
//     for(var n = 1; n < numA.length; n++){
//         if(numA[m] > numA[n] || numA[m] < numA[n]){
//             var largest = Math.max(numA[m], numA);
//         }else{
//             console.log("Not greatest")
//         }
//     }
// }
// console.log(numB)