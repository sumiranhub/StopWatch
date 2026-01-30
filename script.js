const display = document.getElementById("display");
let timer = null; //setinterval() ko id lai store garcha so pachi stop garna kaam lagos
let startTime = 0; // start garepachi ko time store garcha
let elapsedTime = 0; // resume garna ko lagi time store garhca also kati time passed vayo vanera
let isRunning = false; //watch running cha ki chaina vanera boolen store garcha

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime; //date.now() le current time milliseconds ma dincha
        timer = setInterval(update, 10); //updates timer after every 10 milliseconds
        isRunning = true; 
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer); //update() function lai stop garcha
        elapsedTime = Date.now() - startTime; //yesma current time save garcha
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0; //reset
    elapsedTime = 0; //reset
    isRunning = false;    
    display.textContent = "00:00:00:00";
}

function update(){ //setinterval() le call garne function
    
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime; //kati time gairako cha vanera store garirakcha

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)); //miliseconds lai hour ma convert garcha
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60); //miliseconds lai minutes ma convert garcha and %60 le 0-59 ko range ma rakcha
    let seconds = Math.floor(elapsedTime / 1000 % 60); //miliseconds lai seconds ma convert garcha
    let milliseconds = Math.floor(elapsedTime % 1000 / 10); //0-99 milliseconds display garcha

    hours = String(hours).padStart(2, "0"); // number lai string ma convert garcha  as 03 is only possible in string not in numbers
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`; //display in html
}