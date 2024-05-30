let randomNum = parseInt(Math.random()*100 + 1)

const userNum = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const prevGuess = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

let p = document.createElement('p')

let prevGuessArr = []
let currGuesses = 1

let playGame = true

if(playGame){

    submit.addEventListener('click', function (e){

        e.preventDefault()
        const guess = parseInt(userNum.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){

    if(isNaN(guess)){
        alert('Enter a valid guess!')
    }
    else if(guess <= 0){
        alert('Enter 1 or more!')
    }
    else if(guess > 100){
        alert('Enter 100 or less!')
    }
    else{
        prevGuessArr.push(guess)
        if(currGuesses === 10){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNum}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuesses(guess)
        }
    }
}

function displayGuess(guess){

    userNum.value = ''
    prevGuess.innerHTML += `${guess}, `
    currGuesses++
    remaining.innerHTML = `${11-currGuesses}`
}

function checkGuesses(guess){

    if(guess === randomNum){
        displayMessage(`You Guessed It Right!`)
        endGame()
    }
    else if(guess > randomNum){
        displayMessage(`Number is Too high`)
    }
    else{
        displayMessage(`Number is Too low`)
    }
}

function displayMessage(msg){
    lowOrHi.innerHTML = msg
}

function endGame(){
    userNum.innerHTML = ''
    userNum.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){

    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', function (e){
        randomNum = parseInt(Math.random()*100 + 1)
        prevGuessArr = []
        currGuesses = 0
        prevGuess.innerHTML = ''
        remaining.innerHTML = `${10-currGuesses}`
        userNum.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}