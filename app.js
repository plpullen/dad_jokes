let jokeEl = document.getElementById("joke")
let jokeBtn = document.getElementById("jokeBtn")
let noJokeBtn = document.getElementById("noJokeBtn")
let loopJokeBtn = document.getElementById("loopJokeBtn")
let theLoop
//make function call generateJoke
generateJoke()

function generateJoke(){
    const config = {
        headers: {'Accept': 'application/json'}
    }
    fetch('https://icanhazdadjoke.com/', config)
    .then(response => response.json())
    .then(data => {
        jokeEl.innerHTML = data.joke
    })
}

jokeBtn.addEventListener('click', generateJoke)
loopJokeBtn.addEventListener('click', loopIt)
noJokeBtn.addEventListener('click', stopLoopIt)


function loopIt(){ 
theLoop = setInterval(generateJoke, 5000);
}

function stopLoopIt(){
    clearInterval(theLoop);
}