import Ship from './Ship';
import GameBoard from './GameBoard';

let placingGrid = document.getElementById("placingGrid");
let playerGrid = document.getElementById("playerGrid");
let computerGrid = document.getElementById("computerGrid")
let rotateButton = document.getElementById("rotateButton");
initializeBoards();
let game = new GameBoard();

rotateButton.addEventListener('click', () => {
    game.setRotation();
})


function initializeBoards(){

    for(let i = 0; i < 100; i++){
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

