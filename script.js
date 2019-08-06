//Game Value
let min=1;
    max=10;
    winningNum=getRandomNum(min,max);
    guessesLeft=3;

//UI elements

const game= document.querySelector('#game'),
      minNum=document.querySelector('.min-num'),    
      maxNum=document.querySelector('.max-num'),
      input=document.querySelector('.inputValue'),
      guessBtn=document.querySelector('#guess-btn'),
      text=document.querySelector('.text');


//Assign UI min and max

minNum.textContent= min;
maxNum.textContent=max;

//Play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className==='play-again'){
    window.location.reload();
    }
    });

//listen for guess

guessBtn.addEventListener('click',function(){
//console.log(input.value); //it will show string number

let guess= parseInt(input.value);

//console.log(guess);  //it will show number value

if(isNaN(guess) || guess < min || guess > max){

    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    return;
}

if(guess === winningNum){
    //disable the input value if it is true
    input.disabled=true;
    input.style.borderColor= 'green';
    setMessage(`${winningNum} is correct, YOU WON!`, 'green');
    guessBtn.value= "Play Again";
    guessBtn.className+="play-again";
}
else{
    
    guessesLeft-=1;

    if(guessesLeft===0){
        //game over
        input.disabled=true;
        input.style.borderColor= 'red';
        setMessage(`Game Over, YOU LOST!, The correct number was ${winningNum}`, 'red');
        guessBtn.value= "Play Again";
        guessBtn.className+="play-again";
    }
    else{
        //game continue
        setMessage(`${guess} is not correct, You have ${guessesLeft} guess left`, 'red');
    }
}

});



//get radom Number

function getRandomNum(min, max){
return Math.floor(Math.random()*(max-min+1)+min);
}
//setMessage Function

function setMessage(msg,color){
    text.style.color=color;
    text.textContent=msg;
   
}
    