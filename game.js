// Iteration 2: Generate 2 random number and display it on the screen
var num1;
var num2;

let num1box= document.getElementById("number1")
let num2box= document.getElementById("number2")
let score = 0;

generate()


function generate(){
    num1=Math.floor(Math.random()*100)
    num2=Math.floor(Math.random()*100)
    num1box.textContent=num1
    num2box.textContent=num2
}




// Iteration 3: Make the options button functional
// let score=0;

let greaterthan=document.getElementById("greater-than")
let equalto=document.getElementById("equal-to")
let lessThan=document.getElementById("lesser-than")

greaterthan.onclick=()=>{
    if (num1>num2){
        score++;
        localStorage.setItem("score:",score)
        generate();
        clearInterval(interval)
        startinterval()
    }
    else{
        window.open("./gameover.html")
    }
}
lessThan.onclick=()=>{
    if (num1<num2){
        score++;
        localStorage.setItem("score:",score)
        generate();
        clearInterval(interval)
        startinterval()
    }
    else{
        window.open("./gameover.html")
    }
}
equalto.onclick=()=>{
    if (num1==num2){
        score++;
        localStorage.setItem("score:",score)
        generate();
        clearInterval(interval)
        startinterval()
    }
    else{
        window.open("./gameover.html")
    }
}


// Iteration 4: Build a timer for the game
let time =5;
let timer=document.getElementById("timer")
let interval;

timer.textContent=time
function startinterval(){
    time=5
 interval= setInterval(() => {
     timer.textContent=time;
    time--;
    if(time==0){
        window.location.href="./gameover.html"
    }
},1000)
}
startinterval()

localStorage.setItem("score:", "0")
