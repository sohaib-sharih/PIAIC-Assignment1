var arrCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var letters = ["th","st","nd","rd"];

for(var i = 0; i<arrCities.length-1; i++){
    for(var j=0; j<letters.length; j++){
        if(letters[j] == "st" && arrCities[i] === "Karachi"){
            console.log("1" + letters[j] + " choice is " + arrCities[i])
            document.write("1" + letters[j] + " choice is " + arrCities[i] + "<br>")
                     
        }else if(letters[j] == "nd" && arrCities[i] === "Lahore"){
            console.log("2" + letters[j] + " choice is " + arrCities[i])
            document.write("2" + letters[j] + " choice is " + arrCities[i] + "<br>")
            
        }else if(letters[j] == "rd" && arrCities[i] === "Islamabad"){
            console.log("3" + letters[j] + " choice is " + arrCities[i])
            document.write("3" + letters[j] + " choice is " + arrCities[i] + "<br>")
        }
    }
}