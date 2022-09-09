var arrA = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var arrB = []

// output Sample Output : [3, ‘a’, 2, 4, 9]

for(var i = 0; i < arrA.length; i++){
    
    if(arrA[i] === arrA[i+1]){
        arrA.splice(i,1)
        arrB.push(arrA[i])

    }else if(arrA[i] !== arrA[i+1]){
        // arrA.splice(i,1)
        var rem = i+1
        arrA.slice(i,rem)
        arrB.push(arrA[i])
    }
}
console.log(arrA)
console.log(arrB)
console.log(arrB.length)













//  CLOSE ENOUGH BELOW

// for(var i = 0; i < arrA.length; i++){
//     for(var j = 0; j < arrA.length; j++){
//         if(arrA[i] === arrA[j]){ // at index 5, 3 is repeating

//             var addj = j + 1
//             var storeB = arrA.slice(j, addj)
//             arrB.push(storeB)
//             break;
            
//         }
//     }
// }
// console.log(arrB)
// console.log("This is storeB " + storeB)


// if(storeB === arrA[i] && storeB === arrA[j]){
                
// }



// for(var i = 0; i < arrA.length; i++){
//     console.log(arrA[i])
//     for(var j = 0; j < arrA.length; j++){
//         if(arrA[j] === arrA[i]){
//             console.log(arrA[i].splice(i,1))
//         }
//         // break;
// }
// }

// && arrA[i+1] !== arrA[j+1 ]&& arrA[i+2] !== arrA[j+2] && arrA[i+3] !== arrA[j+3] && arrA[i+4] !== arrA[j+4] && arrA[i] !== arrB[j]