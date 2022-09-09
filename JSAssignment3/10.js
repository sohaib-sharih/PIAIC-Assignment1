var a = [20,53,78,4,91,12];
// output:  [4,12,20,53,78,91]
var b = []

// var smallest = Math.min(...a)
// console.log(smallest)

for(var i = 0; i < a.length; i++){
    for(var m = 0; m < a.length; m++){
        if(a[i] < a[m] || a[i] === Math.min(...a)){
            b.push(a[i])

    }
    }
}
console.log(b)















/*BELOW IS ROUGH WORK*/



// for(var i = 0; i < a.length; i++){
//     if(a[i] > 0 && a[i] < 20) {
//         b.push(a[i])
//     }
// }
// console.log(b)

// FOURTH METHOD

// for(var i = 0; i < a.length; i++){
//     for(var j = 1; j < a.length; j++){
//         if(a[i] < a[j] || a[i] > a[j]) {
//             // if(a[i] < a[j] && a[i]!== b[i]) {
//             if(a[i] > 0 && a[i] <= 10){
//                 b.push(a[i])
//             }else if(a[i] > 10 && a[i] <= 20){
//                 b.push(a[i])
//             }else if(a[i] > 20 && a[i] <= 30){
//                 b.push(a[i])
//             }else if(a[i] > 30 && a[i] <= 40){
//                 b.push(a[i])
//             }else if(a[i] > 40 && a[i] <= 50){
//                 b.push(a[i])
//             }else if(a[i] > 50 && a[i] <= 60){
//                 b.push(a[i])
//             }else if(a[i] > 60 && a[i] <= 70){
//                 b.push(a[i])
//             }else if(a[i] > 70 && a[i] <= 80){
//                 b.push(a[i])
//             }else if(a[i] > 80 && a[i] <= 90){
//                 b.push(a[i])
//             }else if(a[i] > 90 && a[i] <= 100){
//                 b.push(a[i])
//             }else{
//                 console.log("NIL")
//             }
//         }else{
//             console.log("NIL")
//         }
//     }
// }


// below is the THIRD try
// for(var i = 0; i < a.length; i++){
//     for(var j = 1; j < a.length; j++){
//         // if(a[i] < a[j]) {
//         if(a[i] < a[j] && a[i]!== b[i]) {
//             b.push(a[i])
//         }
//     }
// }
// console.log(b)


// for(var i = 0; i < a.length; i++){
        
//     if(a[i] > 0 && a[i] < 10){
//         b.push(a[i]) // add lowest number
//         console.log(b)
//         break;
//     }else if(a[i] > 9 && a[i] < 20){
//         b.push(a[i])
//         console.log(b)
//         break;
//     }else if(a[i] > 19 && a[i] < 30){
//         b.push(a[i])
//         console.log(b)
//         break;
//     }else if(a[i] > 29 && a[i] < 40){
//         b.push(a[i])
//         console.log(b)
//         break;
//     }else if(a[i] > 39 && a[i] < 50){
//         b.push(a[i])
//         break;
//     }else if(a[i] > 50 && a[i] < 60){
//         b.push(a[i])
//         break;
//     }else if(a[i] > 59 && a[i] < 70){
//         b.push(a[i])
//         break;
//     }else if(a[i] > 69 && a[i] < 80){
//         b.push(a[i])
//         break;
//     }else{
//         console.log("NIL")
//     }
// }
    
// console.log(b)
// b.push(a[2])
// console.log(b)
