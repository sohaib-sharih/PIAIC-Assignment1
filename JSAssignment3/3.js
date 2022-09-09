// Part A
var colors = ["Pink","Yellow","Blue","Maroon","Orange"];
var counter = 0;
for(var i = 0; i<colors.length; i++){
    counter++;
    console.log(colors[i])
    document.write(counter + ". " + colors[i] + "<br>")
}

var ask = prompt("What color do you want to place at the beginning or the list?")
colors.unshift(ask)
console.log(colors)
document.write("PART A: Updated colors list:==>> "+ colors + "<br>")

// Part B

var ask2 = prompt("What color do you want to add to the END of the list?")
colors.push(ask2)
console.log("Adding color to the END: "+ colors + "<br>")
document.write("PART B: Adding color to the END:==>> "+ colors + "<br>")

// Part C
colors.unshift("Silver", "Gold")
console.log("Part C: Adding 2 more colors at the beginning ==>> " + colors + "<br>")
document.write("Part C: Adding 2 more colors at the beginning ==>> " + colors + "<br>")

// Part D
colors.shift()
console.log("Part D: Deleting the first Color from the beginning ==>> " + colors + "<br>");
document.write("Part D: Deleting the first Color from the beginning ==>> " + colors + "<br>");

// Part E
colors.pop()
console.log("Part E: Deleting the last color of the array ==>> " + colors + "<br>")
document.write("Part E: Deleting the last color of the array ==>> " + colors + "<br>")

// Part F
var ask3 = prompt("Which index do you want to Add the new color?");
var ask4 = prompt("What color do you want to add in the mentioned Index number?");

colors.splice(ask3, 0, ask4);
console.log("Part F: Adding color at CHOSEN Index ==>> " + colors + "<br>");
document.write("Part F: Adding color at CHOSEN Index ==>> " + colors + "<br>");

// Part G

var ask5 = prompt("From which INDEX do you want to DELETE colors?");
var ask6 = prompt("How many colors do you want to delete? Indicate by NUMBERS?")

colors.splice(ask5, ask6);
console.log("Part G: Deleting X number of colors from Index Y ==>> "+ colors + "<br>")
document.write("Part G: Deleting: "+ ask6 + " colors from Index: "+ ask5 + " ==>>" + colors + "<br>")

