import Player from './Player';
import Ship from './Ship'

export default class GameBoard {


    constructor() {
        this.player1 = new Player();
        this.aiPlayer = new Player();
        this.rotation = 1;
        this.gameBoard = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

        this.whichShip = "Carrier";
        this.placeShip();
    }

    receiveAttack(x, y) {

        this.gameBoard[x][y] = 1;

    }
    setRotation(){
        if(this.rotation == 1){
            this.rotation = 10;
        }
        else{
            this.rotation = 1;
        }
    }
    placeShip() {

        let placeText = document.getElementById("placeText");

        let placingGridCells = document.querySelectorAll(".placingGridCell");

        for (let i = 0; i < placingGridCells.length; i++) {

            //console.log(placingGridCells[i]);
            placingGridCells[i].addEventListener('mouseover', (event) => {

                for (let i = 0; i < 100; i++) {
                    placingGridCells[i].style.backgroundColor = "white";
                }

                let id = parseInt(event.target.id);



                let x = Math.floor(id / 10);
                let y = id % 10;

                if (this.whichShip == "Carrier") {
                    if ((this.rotation == 1 && y <= 5) || (this.rotation == 10 && x<=5)) {
                        for (let i = 0; i < 5; i++) {

                            placingGridCells[id + i*this.rotation].style.backgroundColor = "aquamarine";

                        }
                    }
                }
                if (this.whichShip == "Battleship") {
                    if ((this.rotation == 1 && y <= 6) || (this.rotation == 10 && x<=6)) {
                        for (let i = 0; i < 4; i++) {

                            placingGridCells[id + i*this.rotation].style.backgroundColor = "aquamarine";

                        }
                    }
                }
                if (this.whichShip == "Destroyer") {
                    if ((this.rotation == 1 && y <= 7) || (this.rotation == 10 && x<=7)) {
                        for (let i = 0; i < 3; i++) {

                            placingGridCells[id + i*this.rotation].style.backgroundColor = "aquamarine";

                        }
                    }
                }
                if (this.whichShip == "Submarine") {
                    if ((this.rotation == 1 && y <= 7) || (this.rotation == 10 && x<=7)) {
                        for (let i = 0; i < 3; i++) {

                            placingGridCells[id + i*this.rotation].style.backgroundColor = "aquamarine";

                        }
                    }
                }
                if (this.whichShip == "Patrol Boat") {
                    if ((this.rotation == 1 && y <= 8) || (this.rotation == 10 && x<=8)) {
                        for (let i = 0; i < 2; i++) {

                            placingGridCells[id + i*this.rotation].style.backgroundColor = "aquamarine";

                        }
                    }
                }
            })

            placingGridCells[i].addEventListener('click', (event) =>{
                console.log(event.target.id);
            })

            

        }

    }

    isOver() {

    }

}
