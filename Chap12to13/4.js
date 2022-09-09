

var ask = prompt("Please enter an Alphabet");
console.log(ask.length)

var firstChar = ask.slice(0, 1);
console.log(firstChar)


var vowels = ["a", "e", "i", "o", "u"]

for(var i = 0; i < vowels.length; i++){
    if(firstChar.toLowerCase() === vowels[i]){
        console.log("This letter is a VOWEL")
        break;
    }else if(firstChar.toLowerCase() !== vowels[i]){
        console.log("This letter is NOT a vowel")
        notFound = false;
        break;
    }else{
        console.log("Try Again!");
    }
}

// var convert = Number(firstChar);
// console.log(convert, typeof convert)