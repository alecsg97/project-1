let numSelected = null;
let tileSelected = null;
let errors = 0;

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

window.addEventListener('load', () => {
    startGame();
})

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
        }
    }, 1000);
}

window.onload = function () {
    let timerMinutes = 60 * 18,
        display = document.querySelector('#time');
    startTimer(timerMinutes, display);
};


function selectLevel() {
    // let buttonSelect = document.getElementById('btn-light');
    // document.addEventListener('click', selectLevel);
    // buttonSelect.classList.add('selected');
}

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
        } else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
        if (errors === 20) {
            alert `You have lost, better luck next time`
        }
    }
}


    

    
