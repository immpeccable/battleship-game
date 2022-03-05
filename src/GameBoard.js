import Player from './Player';
import Ship from './Ship'

export default class GameBoard {


    constructor() {
        
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
        this.isfinished = false;
        this.placeShip();
        this.playGame();
    }

    playGame(){

        let computerGridCells = document.querySelectorAll(".computerCell");
        let me = this;
        for(let i = 0; i < 100; i++){

            computerGridCells[i].addEventListener('click', (event) =>{

                let id = event.target.id;
                computerGridCells[id].classList.add("miss");

            })

        } 

        while(!this.isOver()){

            



        }
    }

    receiveAttack(x, y) {

        //this.gameBoard[x][y] = 1;

    }
    setRotation() {
        if (this.rotation == 1) {
            this.rotation = 10;
        }
        else {
            this.rotation = 1;
        }
    }
    placeShip() {

        let placeText = document.getElementById("placeText");
        placeText.textContent = "Place your carrier";

        let placingGridCells = document.querySelectorAll(".placingGridCell");
        let me = this;
        console.log(me);

        for (let i = 0; i < placingGridCells.length; i++) {

            //console.log(placingGridCells[i]);
            placingGridCells[i].addEventListener('mouseover', (event) => {
                let id = parseInt(event.target.id);



                let x = Math.floor(id / 10);
                let y = id % 10;

                for (let i = 0; i < 100; i++) {
                    let xcoor = Math.floor(i / 10);
                    let ycoor = i % 10;
                    if (this.gameBoard[xcoor][ycoor] == 0 || this.gameBoard[xcoor][ycoor] == -1) {
                        placingGridCells[i].style.backgroundColor = "white";
                    }
                }



                if (this.whichShip == "Carrier") {
                    if ((this.rotation == 1 && y <= 5) || (this.rotation == 10 && x <= 5)) {
                        for (let i = 0; i < 5; i++) {

                            placingGridCells[id + i * this.rotation].style.backgroundColor = "aquamarine";

                        }
                    }
                }
                if (this.whichShip == "Battleship") {
                    if ((this.rotation == 1 && y <= 6) || (this.rotation == 10 && x <= 6)) {
                        for (let i = 0; i < 4; i++) {

                            placingGridCells[id + i * this.rotation].style.backgroundColor = "aquamarine";

                        }
                    }
                }
                if (this.whichShip == "Destroyer") {
                    if ((this.rotation == 1 && y <= 7) || (this.rotation == 10 && x <= 7)) {
                        for (let i = 0; i < 3; i++) {

                            placingGridCells[id + i * this.rotation].style.backgroundColor = "aquamarine";

                        }
                    }
                }
                if (this.whichShip == "Submarine") {
                    if ((this.rotation == 1 && y <= 7) || (this.rotation == 10 && x <= 7)) {
                        for (let i = 0; i < 3; i++) {

                            placingGridCells[id + i * this.rotation].style.backgroundColor = "aquamarine";

                        }
                    }
                }
                if (this.whichShip == "Patrol Boat") {
                    if ((this.rotation == 1 && y <= 8) || (this.rotation == 10 && x <= 8)) {
                        for (let i = 0; i < 2; i++) {

                            placingGridCells[id + i * this.rotation].style.backgroundColor = "aquamarine";

                        }
                    }
                }
            })

            placingGridCells[i].addEventListener('click', (event) => {

                let id = parseInt(event.target.id);
                let x = Math.floor(id / 10);
                let y = id % 10;



                if (this.whichShip == "Carrier") {
                    if (((this.rotation == 1 && y <= 5) || (this.rotation == 10 && x <= 5)) && isValid(x, y, me.rotation, 5)) {
                        console.log("hello worl2");
                        for (let i = 0; i < 5; i++) {

                            //this.gameBoard[x][y] = 1;
                            if (this.rotation == 1) {
                                this.gameBoard[x][y + i] = 1;
                            } else {
                                this.gameBoard[x + i][y] = 1;
                            }
                            placingGridCells[id + i * this.rotation].style.backgroundColor = "aquamarine";
                            console.log(me.gameBoard);

                        }
                        this.whichShip = "Battleship";
                        placeText.textContent = "Place your Battleship";
                    }

                }
                else if (this.whichShip == "Battleship") {
                    if (((this.rotation == 1 && y <= 6) || (this.rotation == 10 && x <= 6)) && isValid(x, y, me.rotation, 4)) {
                        for (let i = 0; i < 4; i++) {

                            if (this.rotation == 1) {
                                this.gameBoard[x][y + i] = 1;
                            } else {
                                this.gameBoard[x + i][y] = 1;
                            }
                            placingGridCells[id + i * this.rotation].style.backgroundColor = "aquamarine";

                        }
                        this.whichShip = "Destroyer";
                        placeText.textContent = "Place your Destroyer";
                    }

                }
                else if (this.whichShip == "Destroyer") {
                    if (((this.rotation == 1 && y <= 7) || (this.rotation == 10 && x <= 7)) && isValid(x, y, me.rotation, 3)) {
                        for (let i = 0; i < 3; i++) {

                            if (this.rotation == 1) {
                                this.gameBoard[x][y + i] = 1;
                            } else {
                                this.gameBoard[x + i][y] = 1;
                            }
                            placingGridCells[id + i * this.rotation].style.backgroundColor = "aquamarine";

                        }
                        this.whichShip = "Submarine";
                        placeText.textContent = "Place your Submarine";
                    }

                }
                else if (this.whichShip == "Submarine") {
                    if (((this.rotation == 1 && y <= 7) || (this.rotation == 10 && x <= 7)) && isValid(x, y, me.rotation, 3)) {
                        for (let i = 0; i < 3; i++) {

                            if (this.rotation == 1) {
                                this.gameBoard[x][y + i] = 1;
                            } else {
                                this.gameBoard[x + i][y] = 1;
                            }
                            placingGridCells[id + i * this.rotation].style.backgroundColor = "aquamarine";

                        }
                        this.whichShip = "Patrol Boat";
                        placeText.textContent = "Place your Patrol Boat";
                    }

                }
                else if (this.whichShip == "Patrol Boat") {
                    if (((this.rotation == 1 && y <= 8) || (this.rotation == 10 && x <= 8)) && isValid(x, y, me.rotation, 2)) {
                        for (let i = 0; i < 2; i++) {

                            if (this.rotation == 1) {
                                this.gameBoard[x][y + i] = 1;
                            } else {
                                this.gameBoard[x + i][y] = 1;
                            }
                            placingGridCells[id + i * this.rotation].style.backgroundColor = "aquamarine";

                        }
                        document.getElementById("placeGrid-div").classList.add("passive");
                        document.querySelector("body").classList.remove("passive");
                        let myBoardCells = document.querySelectorAll(".playerCell");
                        for (let i = 0; i < 100; i++) {
                            let xcoor = Math.floor(i / 10);
                            let ycoor = i % 10;
                            console.log(xcoor + " " + ycoor);
                            console.log(this.gameBoard);
                            if (this.gameBoard[xcoor][ycoor] == 1) {
                                myBoardCells[i].style.backgroundColor = "rgb(70,70,70)";
                            }
                        }
                    }
                }

                function isValid(xcoor, ycoor, rotation, sl) {

                    console.log("hello" + xcoor + " " + ycoor);
                    let tmpx = xcoor;
                    let tmpy = ycoor;

                    let valid = true;
                    

                    if (rotation == 1) {
                        for (let i = 0; i < sl; i++) {

                            if(ycoor <= 9){
                                
                                if(me.gameBoard[xcoor][ycoor] == -1 ||me.gameBoard[xcoor][ycoor] == 1 ){
                                    valid = false;
                                    break;
                                }
    
                            }
                            ycoor++;
                        }
                        
                        xcoor = tmpx;
                        ycoor = tmpy;
                        if (valid) {
                            for (let q = 0; q < sl; q++) {

                                if (xcoor - 1 >= 0 && ycoor - 1 >= 0 ) {
                                    me.gameBoard[xcoor - 1][ycoor - 1] = -1;
                                }
                                if (xcoor + 1 <= 9 && ycoor - 1 >= 0 ) {
                                    me.gameBoard[xcoor + 1][ycoor - 1] = -1;
                                }

                                if (q == 0) {



                                    if (ycoor - 1 >= 0 ) {
                                        me.gameBoard[xcoor][ycoor - 1] = -1;
                                    }


                                }
                                else if (q == sl - 1) {

                                    console.log("sondayım" + xcoor + " " + ycoor);
                                    
                                    if ( xcoor - 1 >= 0 ) {
                                        console.log("1");
                                        me.gameBoard[xcoor - 1][ycoor] = -1;
                                        
                                    }
                                    if (xcoor + 1 <= 9 ) {
                                        console.log("2");
                                        me.gameBoard[xcoor + 1][ycoor] = -1;
                                    }
                                    if ( ycoor + 1 <= 9 ) {
                                        
                                        me.gameBoard[xcoor][ycoor + 1] = -1;
                                    }
                                    if ( xcoor -1 >= 0 && ycoor + 1 <= 9 &&  ycoor + 1 <= 9 ) {
                                        
                                        me.gameBoard[xcoor - 1][ycoor + 1] = -1;
                                    }
                                    if ( xcoor + 1<=9 && ycoor + 1 <= 9 ) {
                                        
                                        me.gameBoard[xcoor+1][ycoor + 1] = -1;
                                    }
                                }
                                ycoor++;
                            }
                        }
                        console.log("finishedRow");
                        console.log(me.gameBoard);

                    }
                    else if (rotation == 10) {
                        for (let i = 0; i < sl; i++) {

                            if(xcoor <= 9){
                                
                                if(me.gameBoard[xcoor][ycoor] == -1 ||me.gameBoard[xcoor][ycoor] == 1 ){
                                    valid = false;
                                    break;
                                }
    
                            }
                            xcoor++;
                        }
                        xcoor = tmpx;
                        ycoor = tmpy;
                        if (valid) {
                            for (let q = 0; q < sl; q++) {

                                if (ycoor - 1 >= 0 && xcoor - 1 >= 0 ) {
                                    me.gameBoard[xcoor - 1][ycoor - 1] = -1;
                                }
                                if (ycoor + 1 <= 9 && xcoor - 1 >= 0 ) {
                                    me.gameBoard[xcoor - 1][ycoor + 1] = -1;
                                }

                                if (q == 0) {



                                    if (xcoor - 1 >= 0 ) {
                                        me.gameBoard[xcoor - 1][ycoor] = -1;
                                    }


                                }
                                else if (q == sl - 1) {

                                    console.log("sondayım" + xcoor + " " + ycoor);
                                    
                                    if ( ycoor - 1 >= 0 ) {
                                        console.log("1");
                                        me.gameBoard[xcoor][ycoor - 1] = -1;
                                        
                                    }
                                    if (ycoor + 1 <= 9 ) {
                                        console.log("2");
                                        me.gameBoard[xcoor][ycoor + 1] = -1;
                                    }
                                    if ( xcoor + 1 <= 9 ) {
                                        
                                        me.gameBoard[xcoor+1][ycoor] = -1;
                                    }
                                    if ( ycoor -1 >= 0 && xcoor + 1 <= 9 &&  ycoor + 1 <= 9 ) {
                                        
                                        me.gameBoard[xcoor + 1][ycoor - 1] = -1;
                                    }
                                    if ( ycoor + 1<=9 && xcoor + 1 <= 9 ) {
                                        
                                        me.gameBoard[xcoor+1][ycoor + 1] = -1;
                                    }
                                }
                                xcoor++;
                            }
                        }
                        console.log("finishedCol");
                        console.log(me.gameBoard);
                    }
                    console.log(valid);
                    return valid;

                }


            })
        }

    }



    isOver() {
        return isfinished;
    }

}
