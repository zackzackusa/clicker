
var coins = 0;
var workers = 0;
var levels = 0;

function gameLoop() {
    addCoins();
    addLevel();
    updateCoinsDisplay();
    updateWorkerDisplay();
    updateLevelDisplay();
}

function addCoins() {
    coins += workers/10;

}

function addLevel(){
    if (workers >= 100){        
        levels = workers/100;
    }    
    
}

function updateCoinsDisplay() {
    document.getElementById("coinsDisplay").innerText = coins.toFixed(0);
}

function updateWorkerDisplay() {
    document.getElementById("workersDisplay").innerText = workers;

}

function updateLevelDisplay() {
    document.getElementById("countDisplay").innerText = levels.toFixed(0);
}

function incrementCoins() {
    coins++;
    
}

function buyWorker() {
    if(coins >= 10) {
        coins -= 10;
        workers++;

    }
}


console.log("Start");
let loop = setInterval(gameLoop,100);
