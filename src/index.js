import Ship from './Ship';

initializeBoards();

function initializeBoards(){

    let playerGrid = document.getElementById("playerGrid");
    let computerGrid = document.getElementById("computerGrid")
    for(let i = 0; i < 100; i++){
        let cellPlayer = document.createElement('div');
        let cellComputer = document.createElement('div');
       
        cellPlayer.classList.add("playerCell");
        cellComputer.classList.add("computerCell");

        cellComputer.id = i;
        cellPlayer.id = i;
    
        playerGrid.appendChild(cellPlayer);
        computerGrid.appendChild(cellComputer);
    }

}
