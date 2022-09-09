document.write("<h2>MARK SHEET</h2>")

var Maths = prompt("What did you score in MATHS?")
var English = prompt("What did you score in ENGLISH?")
var Islam = prompt("What did you score in ISLAM?")

var totalScore = Number(Maths) + Number(English) + Number(Islam)
var avgScore = totalScore / 3
var grade = ["A-one", "A", "B", "Fail"];
var calGrade;

for(var i = 0; i < grade.length; i++){

    if(avgScore >= 80){
        console.log(grade[i])
        break;
    }else if(avgScore >= 70){
            calGrade = grade[i + 1];
            console.log(grade[i + 1])
            break;
    }else if(avgScore >= 60){
        calGrade = grade[i + 2]
        console.log(grade[i + 2])
        break;
    }else{
        calGrade = grade[i + 3]
        console.log(grade[i+3])
        break;
    }
}

console.log("TOTAL MARKS: 300" )
document.write("TOTAL MARKS: 300 <br>" )
console.log("MARKS OBTAINED: " + totalScore)
document.write("MARKS OBTAINED: " + totalScore)
console.log("PERCENTAGE: " + avgScore)
document.write("<br>PERCENTAGE: " + avgScore)

console.log("GRADE: " + calGrade)
document.write("<br>GRADE: " + calGrade)