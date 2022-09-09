var time = Number(prompt("What is the time? Use 24 hour format to enter, example => 2300 => 11 pm"));
// var time;

if(time >= 0000 && time < 1200){
    console.log("Good Monring");
    alert("Good Monring");
}else if(time >= 1200 && time < 1700){
    console.log("Good Afteroon");
    alert("Good Afteroon");
}else if(time >= 1700 && time < 2100){
    console.log("Good Evening!");
    alert("Good Evening!");
}else if(time >= 2100 && time <= 2359){
    console.log("Good night!");
    alert("Good night!");
}
