var studentName = ["Michael", "John", "Tony"];
var score = [64, 46, 96];

for(var i = 0; i <studentName.length; i++){
    // console.log(studentName);
    for(var i = 0; i <score.length; i++){
        // console.log(score);
        console.log("Score of "+ studentName[i] + " is " + score[i] + "%")
        document.write("Score of "+ studentName[i] + " is " + score[i] + "% <br>")
    }
}