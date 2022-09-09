var color = prompt("What is the color of the Road Traffic Signal light?")

switch(color.toLowerCase()){
    case "red" :
        alert("Must Stop");
        break;
    case "yellow" :
        alert("Ready to move");
        break;
    case "green" :
        alert("Move now")
        break;
        default :
        alert("Please enter a color option from Red, Yellow or Green. Thank You!")
}