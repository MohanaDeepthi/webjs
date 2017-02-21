var computerGuess=0;
var guessLogArray=[];
var attempts=0;
var maxAttempts=10;

function newGame(){
    window.location.reload();
}
function init(){
    computerGuess=(Math.floor(Math.random()*100+1));
    document.getElementById('newGameBtn').style.display='none';
}

function endGame(){
    document.getElementById('newGameBtn').style.display='inline';
    document.getElementById('easyBtn').style.display='';
    document.getElementById('hardBtn').style.display='';
     document.getElementById("inputBox").setAttribute('readonly','readonly');
}


function easyMode(){
    maxAttempts=10;
    document.getElementById('easyBtn').className='active';
    document.getElementById('hardBtn').className='';
    
}

function hardMode(){
    maxAttempts=5;
    document.getElementById('hardBtn').className='active';
    document.getElementById('easyBtn').className='';
}

function compareGuess(){
    var userGuess=0;
    userGuess=document.getElementById("inputBox").value;
    guessLogArray.push(userGuess);
    document.getElementById("guessLog").innerHTML=guessLogArray;
    
    //console.log(userGuess);
    
    attempts++;
    
    document.getElementById("attempts").innerHTML=attempts;
    
    if(guessLogArray.length<maxAttempts){
    
    if(userGuess > computerGuess){
        document.getElementById("output").innerHTML="Your guess is high";
        document.getElementById("inputBox").value="";
    }
    else if(userGuess < computerGuess){
        document.getElementById("output").innerHTML="Your guess is low";
        document.getElementById("inputBox").value="";
    }
    else{
        document.getElementById("output").innerHTML="Correct ! You got it in "+attempts+" attempts";
        document.getElementById("container").style.backgroundColor='green';
        endGame();
    }
       
        
    }
    else{
        if(userGuess > computerGuess){
        document.getElementById("output").innerHTML="You Lose!"+'<br> the number was '+computerGuess;
        document.getElementById("inputBox").value="";
        document.getElementById("container").style.backgroundColor='red';    
        endGame();
    }
    else if(userGuess < computerGuess){
        document.getElementById("output").innerHTML="You Lose!"+'<br> the number was '+computerGuess;
        document.getElementById("inputBox").value="";
        document.getElementById("container").style.backgroundColor='red';
        endGame();
    }
    else{
        document.getElementById("output").innerHTML="Correct ! You got it in "+attempts+" attempts";
        document.getElementById("container").style.backgroundColor='green';
        endGame();
    }
    
}

}