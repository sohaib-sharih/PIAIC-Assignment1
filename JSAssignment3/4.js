var arrA = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
console.log(arrA)
document.write("<b>Names of Cities:</b> " + arrA + "<br>")
var selectedCities = arrA.slice(2,4);
console.log(selectedCities);
document.write("<b>Selected Cities:</b> "+ selectedCities);