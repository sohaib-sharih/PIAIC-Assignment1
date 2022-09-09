// PART A

var counter= 0
document.write("PART A ==>> ")
for(var i = 0; i < 15; i++){
    counter++
    console.log(counter)
    document.write(counter + ",");
    
}

// PART B

// OUTPUT: Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

var rev = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var reverse = [];

var count = 11

for(var n = 0; n < rev.length; n++){
    count--
    reverse.push(count)
}
console.log("Reverse Counting: " + reverse)
document.write("<br>PART B ==>> Reverse Counting: " + reverse + "<br>")


// PART C

// output Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

var countB = 0
var arrB = [];
var arrEven = [];

for(var n = 0; n < 21; n++){
   arrB.push(n)
      
}
console.log(arrB)

for(var m = 0; m < arrB.length; m++){
    if(arrB[m]%2 === 0){
        arrEven.push(arrB[m])
    }
}
console.log(arrEven)
document.write("PART C ==>> EVEN: " + arrEven + "<br>")



// PART D

// OUTPUT: Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

var odd = [];

for(var p = 0; p < arrB.length; p++){
      
    if(arrB[p]%2 !== 0){
        var remB = arrB.slice(p, p+1)
        odd.push(arrB[p])
    }    
    
}
console.log("remB: " + remB)
console.log("ODD NUMBERS: " + odd)
document.write("PART D ==>> ODD NUMBERS: " + odd + "<br>")



// else if(arrB[p]%3 === arrB[p]/arrB[p]){ // helps to identify Prime numbers that are divisible by 3 or by itself.



// PART E

// output: Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// arrEven contains an array of even numbers
var series = [];
document.write("PART E ==>> SERIES: ")
    for(var y = 1; y < arrEven.length; y++){
        console.log(arrEven[y] + "k")
        document.write(arrEven[y] + "k,")
    }
