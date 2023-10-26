// Iteration 5: Store the player score and display it on the game over screen
let play_btn=document.getElementById("play-again-button")
console.log(play_btn)
play_btn.addEventListener("click",redirect)

function redirect(){
    location.href="./game.html"
    
}

let sr=document.getElementById("score-board")
let finalScore = localStorage.getItem("score:");
sr.textContent= finalScore;