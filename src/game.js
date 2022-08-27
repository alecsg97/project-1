let numSelected = null;
let tileSelected = null;
let errors = 0;
let numPicked = 0;

let board = [
    "9--2--4--",
    "-32-4----",
    "-4-8----7",
    "--7-5---9",
    "--17-23--",
    "3---8-17-",
    "5----9-8-",
    "----2854-",
    "--8-----1"
]

let boardMid = [
    "9--2--4--",
    "--2-4----",
    "-4-8----7",
    "--7-5---9",
    "--17--3--",
    "3---8-17-",
    "5----9-8-",
    "----2-54-",
    "--8-----1"
]

let boardHard = [
    "9--2--4--",
    "--2-4----",
    "-4------7",
    "--7-5---9",
    "---7--3--",
    "3---8-1--",
    "5----9-8-",
    "----2-5--",
    "--8-----1"
]


let solution = [
    "976215438",
    "832947615",
    "145863927",
    "427351869",
    "681792354",
    "359486172",
    "514679283",
    "793128546",
    "268534791"
]




function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        } else if (timer === 0) {
            alert `You've ran out of time, try again`
        }
    }, 1000);
}

window.onload = function () {
    let timerMinutes = 60 * 15,
        display = document.querySelector('#time');
    startTimer(timerMinutes, display);
};


function startGame() {
    for (let i = 1; i <= 9; i++) {
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("solutionNums").appendChild(number);
    }

    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            let tile = document.createElement("div");
            tile.id = x.toString() + "-" + y.toString();
            if (board[x][y] != "-") {
                tile.innerText = board[x][y];
                tile.classList.add("tile-start");
            }
            if (x == 2 || x == 5) {
                tile.classList.add("horizontal-line");
            }
            if (y == 2 || y == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);

        }
    }
}

function selectNumber(){
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
        }
        numSelected = this;
        numSelected.classList.add("number-selected");
}

function selectTile() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }        
        let grid = this.id.split("-"); 
        let x = parseInt(grid[0]);
        let y = parseInt(grid[1]);

        if (solution[x][y] == numSelected.id) {
            this.innerText = numSelected.id;
            numPicked += 1;
        } else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
        if (errors === 20) {
            alert `You have lost, better luck next time`
        }
        if (numPicked === 52) {
            alert `Great job! You won!`
        }
    }
}

function startGameMedium() {
    for (let i = 1; i <= 9; i++) {
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("solutionNums").appendChild(number);
    }

    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            let tile = document.createElement("div");
            tile.id = x.toString() + "-" + y.toString();
            if (boardMid[x][y] != "-") {
                tile.innerText = boardMid[x][y];
                tile.classList.add("tile-start");
            }
            if (x == 2 || x == 5) {
                tile.classList.add("horizontal-line");
            }
            if (y == 2 || y == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTileMedium);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectTileMedium() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }        
        let grid = this.id.split("-"); 
        let x = parseInt(grid[0]);
        let y = parseInt(grid[1]);

        if (solution[x][y] == numSelected.id) {
            this.innerText = numSelected.id;
            numPicked += 1;
        } else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
        if (errors === 20) {
            alert `You have lost, better luck next time`
        }
        if (numPicked === 57) {
            alert `Great job! You won!`
        }
    }
}

function startGameHard() {
    for (let i = 1; i <= 9; i++) {
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("solutionNums").appendChild(number);
    }

    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            let tile = document.createElement("div");
            tile.id = x.toString() + "-" + y.toString();
            if (boardHard[x][y] != "-") {
                tile.innerText = boardHard[x][y];
                tile.classList.add("tile-start");
            }
            if (x == 2 || x == 5) {
                tile.classList.add("horizontal-line");
            }
            if (y == 2 || y == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTileHard);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectTileHard() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }        
        let grid = this.id.split("-"); 
        let x = parseInt(grid[0]);
        let y = parseInt(grid[1]);

        if (solution[x][y] == numSelected.id) {
            this.innerText = numSelected.id;
            numPicked += 1;
        } else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
        if (errors === 20) {
            alert `You have lost, better luck next time`
        }
        if (numPicked === 61) {
            alert `Great job! You won!`
        }
    }
}

function checkForAnswer() {
    if (numPicked === 0) {
        alert `You haven't started, why are you checking`
    } else if (numPicked > 40) {
        alert `You're almost done, keep going`
    } else if (numPicked > 28) {
        alert `Halfwaaaaay there`
    } else {
        alert `You're not done yet, keep playing`
    }
}

document.getElementById('btn-clear').onclick = function () {
    location.reload();
}

document.getElementById('btn-beginner').onclick = function () {
    startGame();
}

document.getElementById('btn-intermediate').onclick = function () {
    startGameMedium();
    if (!startGame) {
        return
    }
}

document.getElementById('btn-advanced').onclick = function () {
    startGameHard();
    if (!startGame) {
        return
    }
}

document.getElementById('btn-check').onclick = function () {
    checkForAnswer();
}
    

    
