let currentWord=document.querySelector("#current-word")
let inputWord=document.querySelector("#word-input")
let message=document.querySelector("#message")
let timeLeft=document.querySelector("#time")
let totalScore=document.querySelector("#score")
let restart = document.querySelector(".restart")
let score = 0
let time = 5;

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'defintion'
    ];

//window load

window.addEventListener("DOMContentLoaded",init)

//intial function

function init()
{
    showWord(words)
    inputWord.addEventListener("input",startGame)
    setInterval(timer,1000)
    setInterval(checktime,500)
}

//to change current word

function showWord(words){
    const ranIndex = Math.floor(Math.random()*words.length)
    currentWord.innerHTML=words[ranIndex]  
}

// start game

function startGame(){
    if(matchWords())
   {
    showWord(words)
    message.innerHTML='Correct Word'
    inputWord.value = ''
    score++
    time = 6
    // time--
   }
   else{
    message.innerHTML='Incorrect Word'
   }
   totalScore.innerHTML = score
}
//check the words

function matchWords(){
    if(inputWord.value===currentWord.innerHTML){
        return true
    }
    else{
        return false
    }
}

//timer 

function timer()
{
    console.log("time called")
    if(time>0)
    {
        time--
        timeLeft.innerHTML = time
    }
    
}
function checktime()
{
    if(time === 0){
        message.innerHTML = 'GAMEOVERRRR:('
        inputWord.disabled = true
        totalScore.innerHTML = 0
       
    }
}
restart.addEventListener("click",()=>{
    inputWord.disabled = false
    inputWord.value= ''
    totalScore.innerHTML = 0
    score=0
    time = 5

    showWord(words)
    message.innerHTML = ''
    timeLeft.innerHTML = time

})
