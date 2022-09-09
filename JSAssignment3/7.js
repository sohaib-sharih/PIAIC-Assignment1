var a = [10,20,4,40,60,70]
var b = [1,2,3,4,5,6,7,8,9,10]

// Output should be [1,2,3,4,5,6,7,8,9,10,20,40,60,70]


for(var i = 0; i < a.length; i++){
    for(var j = 0; j < b.length; j++){
        if(a[i] === b[j]){
            var removeA = a.splice(i, 1)
            console.log(b.concat(a))
            document.write("<br>" + b.concat(a))

    }

}
}

