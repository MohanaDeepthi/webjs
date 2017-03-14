//click on start or reset 
var playing=false;
var score;
var timeremaining;
var action;
var correctAnswer;
document.getElementById("startreset").onclick =
    function(){
    
    if(playing==true){
        location.reload();//reload page
    }else{
        playing=true;
        score=0;
        hide("gameover");
        document.getElementById("scorevalue").innerHTML=score;
        show("timeremaining");
        document.getElementById("startreset").innerHTML="Reset Game";
        timeremaining=60;
    }
    //start count down
    countDown();
    
    //generate multiple Q&A
    generateQA();
}

for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick=function(){
    //check if we are playing
    if(playing==true){
        if(this.innerHTML==correctAnswer){
            score++;
            document.getElementById("scorevalue").innerHTML=score;
            
            //hide the wrong box
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000)
            
            
            //generatenew question
            generateQA();
        }
        else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000)
        }
    }
}

}
    
//functions

//Start countdown
function countDown(){
    action = setInterval(function(){
        timeremaining-=1;
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        if(timeremaining==0){
            stopCountDown();
            show("gameover");
           
            document.getElementById("gameover").innerHTML="<p>Game Over</p><p>Your score is :"+score+"</p>"
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing=false;
            document.getElementById("startreset").innerHTML="Start Game";
        }
    },1000); 
}
//stop the counter
function stopCountDown(){
    clearInterval(action);
}
//hides an element
function hide(id){
    document.getElementById(id).style.display="none";
}
//show an element
function show(id){
    document.getElementById(id).style.display="block";
}

//generate question and multiple answers


function setValue(id,value){
   // alert("inside setValue")
    document.getElementById(id).innerHTML=value.toString();
}



function generateQA(){
    var value1=Math.floor(Math.random()*10+1);
    var value2=Math.floor(Math.random()*10+1);
    //alert(value1+value2);
    correctAnswer=value1*value2;
    
    
    var choice=Math.floor((Math.random()*4)+1);
    //alert(choice);
    console.log(choice);
    document.getElementById("question").innerHTML=value1.toString()+"X"+value2.toString();
    document.getElementById("box"+choice).innerHTML=correctAnswer;
    
    var answers=[correctAnswer];
    for(i=1;i<5;i++){
        if(i!=choice){
            var wrongAnswer;
            do{
                wrongAnswer=Math.floor(Math.random()*100+1);    
            }while(answers.indexOf(wrongAnswer)>-1)
            
            document.getElementById("box"+i).innerHTML=wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
    
    
    
}