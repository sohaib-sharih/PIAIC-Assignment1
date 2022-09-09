var Pakistan = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
var counter = 0
document.write("Qualifications <br><br>")
console.log("Qualifications: \n\n")
for(var i = 0; i < Pakistan.length; i++){
    counter++
    console.log(counter + ". " + Pakistan[i])
    document.write(counter + ". " + Pakistan[i] + "\n <br>")
}
