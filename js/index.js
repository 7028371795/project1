//json array element
var i = 0;
var correctCount = 0;
//initialise first que
generate(0);
//generate from json data with index
function generate(index){
    document.getElementById("question").innerHTML = jsonData[index].q ;
    document.getElementById("optt1").innerHTML = jsonData[index]. opt1;
    document.getElementById("optt2").innerHTML = jsonData[index].opt2 ;
    document.getElementById("optt3").innerHTML = jsonData[index].opt3 ;
}

function checkAnswer(){
    if(document.getElementById("opt1").checked && jsonData[i].opt1 == jsonData[i].answer){
            correctCount++;
    }
    if(document.getElementById("opt2").checked && jsonData[i].opt2 == jsonData[i].answer){
        correctCount++;
    }
    if(document.getElementById("opt3").checked && jsonData[i].opt3 == jsonData[i].answer){
        correctCount++;
    }
    //increment i
    i++;
    if(jsonData.length-1 < i){
        document.write("*********** Your Score is "+correctCount+"***********");
    }
    //callback to generate
    generate(i);
    
    
}