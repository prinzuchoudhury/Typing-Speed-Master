window.addEventListener('load',init);

//Globals

//available levels
const levels={
	easy:5,
	medium:3,
	hard:1
}

// to change level
const currentLevel= levels.easy;

let time = currentLevel;
let score=0;
let isplaying;

//DOM Elements
const wordInput=document.querySelector('#word-input');
const currentWord=document.querySelector('#current-word');
const scoreDisplay=document.querySelector('#score');
const timeDisplay=document.querySelector('#time');
const message=document.querySelector('#message');
const seconds=document.querySelector('#seconds');

const words=[
	'dog',
	'endgame',
	'bucket',
	'nevertheless',
	'stubborn',
	'never',
	'william',
	'javascript'
	];

// initialise the game

function init() {
	//show numbers of seconds in UI
	seconds.innerHTML=currentLevel;
	// load word from array
	showWord(words);
	//start matching on word input
	wordInput.addEventListener('input',startMatch);
	//call countdown every second
	setInterval(countdown, 1000);
	//check game status
	setInterval(checkStatus,50);
}

//pick and show random words
function showWord(words){
	// generate random array index
	const randIndex=Math.floor(Math.random()*words.length);
	//output random word
	currentWord.innerHTML=words[randIndex];
}


//start match
function startMatch() {
	if(matchWords()){
		isplaying=true;
		time=currentLevel+1;
		showWord(words);
		wordInput.value='';
		score++;
	}
	if(score<0){
		scoreDisplay.innerHTML=0;
	}
	else
		scoreDisplay.innerHTML=score;
}

//match current words to word input
function matchWords(){
	if(wordInput.value===currentWord.innerHTML){
			message.innerHTML='Correct!!!!';
			return true;
	}
	else{
		message.innerHTML='Try Harder !!';
		return false;
	}
}


//Countdown timer
function countdown(){
	// Make sure time is not run out
	if(time>0){
		//decrement
		time--;
	} else if(time==0){
		isplaying=false;
	}
	//show display time
	timeDisplay.innerHTML=time;
}

//chack game status
function checkStatus(){
	if(!isplaying&&time==0){
		message.innerHTML='Game Over!!!!!!!';
		score=-1;
	}
}
