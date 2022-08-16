
let numberPicked = null;
let squarePicked = null;
let errors = 0;

let easy1 = [
    [9, ' ', ' ', 2, ' ', ' ', 4, ' ', ' '],
    [' ', 3, 2, ' ', 4, ' ', ' ', ' ', ' '],
    [' ', 4, ' ', 8, ' ', ' ', ' ', ' ', 7],
    [' ', ' ', 7, ' ', 5, ' ', ' ', ' ', 9],
    [' ', ' ', 1, 7, ' ', 2, 3, ' ', ' '],
    [3, ' ', ' ', ' ', 8, ' ', 1, 7, ' '],
    [5, ' ', ' ', ' ', ' ', 9, ' ', 8, ' '],
    [' ', ' ', ' ', ' ', 2, 8, 5, 4, ' '],
    [' ', ' ', 8, ' ', ' ', ' ', ' ', ' ', 1]
]

let solutionEasy1 = [
    [9, 7, 6, 2, 1, 5, 4, 3, 8],
    [8, 3, 2, 9, 4, 7, 6, 1, 5],
    [1, 4, 5, 8, 6, 3, 9, 2, 7],
    [4, 2, 7, 3, 5, 1, 8, 6, 9],
    [6, 8, 1, 7, 9, 2, 3, 5, 4],
    [3, 5, 9, 4, 8, 6, 1, 7, 2],
    [5, 1, 4, 6, 7, 9, 2, 8, 3],
    [7, 9, 3, 1, 2, 8, 5, 4, 6],
    [2, 6, 8, 5, 3, 4, 7, 9, 1]
]

window.addEventListener('load', () => {
    startGame();
})

function startGame() {
    for (let i = 1; i <= 9; i++) {
        let number = document.createElement('div');
        number.id = i;
        number.innerText = i;
        number.addEventListener('click', pickNumber);
        number.classList.add('number');
        document.getElementById('solution-numbers').appendChild(number);
    }

    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 0; y++) {
            let square = document.createElement('div');
            square.id = x.toString() + '-' + y.toString();
            if (easy1[[x]][[y]] != '') {
                square.innerText = easy1[[x]][[y]];
                square.classList.add('first-square');
            }
            if (x === 2 || x === 5) {
                square.classList.add('x-line');
            }
            if (y === 2 || y === 5) {
                square.classList.add('y-line');
            }
            square.addEventListener('click', pickSquare);
            square.classList.add('square');
            document.getElementById('sudoku-board').append(square);
        }
    }
}

function pickNumber(){
    if (numberPicked != null) {
        numberPicked.classList.remove("number-selected");
    }
    numberPicked = this;
    numberPicked.classList.add("number-selected");
}

function pickSquare() {
    if (numberPicked) {
        if (this.innerText != '') {
            return;
        }

        let grid = this.id.split('-');
        let x = parseInt(grid[0]);
        let y = parseInt(grid[1]);

        if (solutionEasy1[x][y] === numberPicked.id) {
            this.innerText = numberPicked.id;
        } else {
            errors += 1;
            document.getElementById('error-counter').innerText = errors;
        }
    }
}


    

    
