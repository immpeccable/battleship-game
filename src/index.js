import Ship from './Ship';
import GameBoard from './GameBoard';

let placingGrid = document.getElementById("placingGrid");
let playerGrid = document.getElementById("playerGrid");
let computerGrid = document.getElementById("computerGrid")
let rotateButton = document.getElementById("rotateButton");
let playAgain = document.getElementById("p-a-button");


initializeBoards();

let game = new GameBoard();



rotateButton.addEventListener('click', () => {
    game.setRotation();
})

playAgain.addEventListener('click', () => {
    resetTheGame();
})

function loadEndGame(q) {
    document.getElementById("placeGrid-div").classList.add("passive");
    document.getElementById("play-again").classList.add("active");
    document.querySelector("body").classList.add("passive");
    if(q == 1){
        document.getElementById("who-win-txt").textContent = "You won!"
    }else{
        document.getElementById("who-win-txt").textContent = "Computer won!"
    }
}

function resetTheGame() {
    
    placingGrid.innerHTML = "";
    playerGrid.innerHTML = "";
    computerGrid.innerHTML = "";
    document.getElementById("play-again").classList.remove("active");
    //document.querySelector("body").classList.remove("passive");
    document.getElementById("placeGrid-div").classList.remove("passive");
    initializeBoards();
    game = new GameBoard();

}

function initializeBoards() {

    for (let i = 0; i < 100; i++) {
        let cellPlayer = document.createElement('div');
        let cellComputer = document.createElement('div');
        let cellPlacingGrid = document.createElement('div');

        cellPlayer.classList.add("playerCell");
        cellComputer.classList.add("computerCell");
        cellComputer.classList.add("active");
        cellPlacingGrid.classList.add('placingGridCell');

        cellComputer.id = i;
        cellPlayer.id = i;
        cellPlacingGrid.id = i;

        playerGrid.appendChild(cellPlayer);
        computerGrid.appendChild(cellComputer);
        placingGrid.appendChild(cellPlacingGrid);

    }

}
export { resetTheGame, loadEndGame }
