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


        this.computerBoard = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

        this.whichShip = "Carrier";
        this.firstRandom = true;
        this.isfinished = false;
        this.placeShip();

    }

    createRandomGrid() {


        console.log("şimdi buradayım");
        this.whichShip = "Carrier";
        let flag = true;
        let cnt = 0;
        while (flag && cnt < 200) {

            let randomid = Math.floor(Math.random() * 100);
            let randomrotation = Math.floor(Math.random() * 2);

            if (randomrotation == 0) {
                flag = this.createGrid(randomid, this.computerBoard, 1);
            } else {
                flag = this.createGrid(randomid, this.computerBoard, 10);
            }
            cnt++;


        }

        //let computerGridCells = document.querySelectorAll(".computerCell");

        /*for(let i = 0; i<10; i++){
            for(let j = 0; j<10; j++){
                if(this.computerBoard[i][j] == 1){
                    computerGridCells[i*10+j].style.backgroundColor = "black";
                }
            }
        }*/


        console.log("cnt: " + cnt);
        console.log(this.computerBoard);
        this.playGame();

    }

    playGame() {

        let randomArray = [];
        for(let i = 0; i<100; i++){
            randomArray.push(i);
        }
        let myBoardCells = document.querySelectorAll(".playerCell");

        let me = this;
        let computerGridCells = document.querySelectorAll(".computerCell");
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {

                computerGridCells[i * 10 + j].addEventListener('click', (event) => {

                    let xcoor = Math.floor(event.target.id / 10);
                    let ycoor = event.target.id % 10;
                    if (this.computerBoard[xcoor][ycoor] == 1 ) {

                        computerGridCells[event.target.id].classList.add('hit');
                        
                    }
                    else if(this.computerBoard[xcoor][ycoor] == -1 || this.computerBoard[xcoor][ycoor] == 0 ){
                        computerGridCells[event.target.id].classList.add('miss');
                    }

                    if((this.computerBoard[xcoor][ycoor] != 2)){
                        console.log(this.computerBoard[xcoor][ycoor]);
                        computerGridCells[event.target.id].classList.remove('active');
                        randomArray = me.randomAttack(randomArray, myBoardCells);
                        console.log(randomArray);
                        if(me.checkIsOver()){
                            return;
                        }
                        this.computerBoard[i][j] = 2;
                    }
                })
            }
        }
    }
    checkIsOver(){

        let f = true;

        for(let i = 0; i<10; i++){
            for(let j = 0; j<10; j++){
                if(this.computerBoard[i][j] == 1){
                    f = false;
                }
            }
        }
        if(f){
            console.log("Player won");
            return true;
        }

        for(let i = 0; i<10; i++){
            for(let j = 0; j<10; j++){
                if(this.gameBoard[i][j] == 1){
                    f = false;
                }
            }
        }
        if(f){
            console.log("Computer won");
            return true;
        }
        return false;

    }
    randomAttack(rar, board){

        let rat = rar[Math.floor(Math.random()* rar.length)];
        console.log(rat);
        if(this.gameBoard[Math.floor(rat / 10)][rat % 10] == 1){
            board[rat].style.backgroundColor = "rgb(153, 78, 78)";
        }else{
            board[rat].style.backgroundColor = "aquamarine";
        }
        rar = rar.filter( function(el){
            console.log("el:" + el);
            console.log("rat:" +rat);
            return el!=rat;
        })
        return rar;
        
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
        //console.log(me);

        for (let i = 0; i < placingGridCells.length; i++) {

            //console.log("buraya giriyor musun");
            placingGridCells[i].addEventListener('mouseover', (event) => {
                let id = parseInt(event.target.id);



                let x = Math.floor(id / 10);
                let y = id % 10;

                for (let i = 0; i < 100; i++) {
                    let xcoor = Math.floor(i / 10);
                    let ycoor = i % 10;
                    if (me.gameBoard[xcoor][ycoor] == 0 || me.gameBoard[xcoor][ycoor] == -1) {
                        placingGridCells[i].style.backgroundColor = "white";
                    }
                }



                if (me.whichShip == "Carrier") {
                    if ((me.rotation == 1 && y <= 5) || (me.rotation == 10 && x <= 5)) {
                        for (let i = 0; i < 5; i++) {

                            placingGridCells[id + i * me.rotation].style.backgroundColor = "aquamarine";

                        }
                    }
                }
                if (me.whichShip == "Battleship") {
                    if ((me.rotation == 1 && y <= 6) || (me.rotation == 10 && x <= 6)) {
                        for (let i = 0; i < 4; i++) {

                            placingGridCells[id + i * me.rotation].style.backgroundColor = "aquamarine";

                        }
                    }
                }
                if (me.whichShip == "Destroyer") {
                    if ((me.rotation == 1 && y <= 7) || (me.rotation == 10 && x <= 7)) {
                        for (let i = 0; i < 3; i++) {

                            placingGridCells[id + i * me.rotation].style.backgroundColor = "aquamarine";

                        }
                    }
                }
                if (me.whichShip == "Submarine") {
                    if ((me.rotation == 1 && y <= 7) || (me.rotation == 10 && x <= 7)) {
                        for (let i = 0; i < 3; i++) {

                            placingGridCells[id + i * me.rotation].style.backgroundColor = "aquamarine";

                        }
                    }
                }
                if (me.whichShip == "Patrol Boat") {
                    if ((me.rotation == 1 && y <= 8) || (me.rotation == 10 && x <= 8)) {
                        for (let i = 0; i < 2; i++) {

                            placingGridCells[id + i * me.rotation].style.backgroundColor = "aquamarine";

                        }
                    }
                }
            })

            placingGridCells[i].addEventListener('click', (event) => {

                let id = parseInt(event.target.id);

                me.createGrid(id, me.gameBoard, me.rotation);

            })
        }

    }

    createGrid(id, gameBoard, rotation) {

        let x = Math.floor(id / 10);
        let y = id % 10;
        let placingGridCells = document.querySelectorAll(".placingGridCell");



        if (this.whichShip == "Carrier") {
            if (((rotation == 1 && y <= 5) || (rotation == 10 && x <= 5)) && this.isValid(x, y, rotation, 5, gameBoard)) {
                //console.log("hello worl2");
                for (let i = 0; i < 5; i++) {

                    //this.gameBoard[x][y] = 1;
                    if (rotation == 1) {
                        gameBoard[x][y + i] = 1;
                    } else {
                        gameBoard[x + i][y] = 1;
                    }
                    placingGridCells[id + i * rotation].style.backgroundColor = "aquamarine";
                    //console.log(gameBoard);

                }
                this.whichShip = "Battleship";
                placeText.textContent = "Place your Battleship";
            }

        }
        else if (this.whichShip == "Battleship") {
            if (((rotation == 1 && y <= 6) || (rotation == 10 && x <= 6)) && this.isValid(x, y, rotation, 4, gameBoard)) {
                for (let i = 0; i < 4; i++) {

                    if (rotation == 1) {
                        gameBoard[x][y + i] = 1;
                    } else {
                        gameBoard[x + i][y] = 1;
                    }
                    placingGridCells[id + i * rotation].style.backgroundColor = "aquamarine";

                }
                this.whichShip = "Destroyer";
                placeText.textContent = "Place your Destroyer";
            }

        }
        else if (this.whichShip == "Destroyer") {
            if (((rotation == 1 && y <= 7) || (rotation == 10 && x <= 7)) && this.isValid(x, y, rotation, 3, gameBoard)) {
                for (let i = 0; i < 3; i++) {

                    if (rotation == 1) {
                        gameBoard[x][y + i] = 1;
                    } else {
                        gameBoard[x + i][y] = 1;
                    }
                    placingGridCells[id + i * rotation].style.backgroundColor = "aquamarine";

                }
                this.whichShip = "Submarine";
                placeText.textContent = "Place your Submarine";
            }

        }
        else if (this.whichShip == "Submarine") {
            if (((rotation == 1 && y <= 7) || (rotation == 10 && x <= 7)) && this.isValid(x, y, rotation, 3, gameBoard)) {
                for (let i = 0; i < 3; i++) {

                    if (rotation == 1) {
                        gameBoard[x][y + i] = 1;
                    } else {
                        gameBoard[x + i][y] = 1;
                    }
                    placingGridCells[id + i * rotation].style.backgroundColor = "aquamarine";

                }
                this.whichShip = "Patrol Boat";
                placeText.textContent = "Place your Patrol Boat";
            }

        }
        else if (this.whichShip == "Patrol Boat") {
            if (((rotation == 1 && y <= 8) || (rotation == 10 && x <= 8)) && this.isValid(x, y, rotation, 2, gameBoard)) {
                for (let i = 0; i < 2; i++) {

                    if (rotation == 1) {
                        gameBoard[x][y + i] = 1;
                    } else {
                        gameBoard[x + i][y] = 1;
                    }
                    placingGridCells[id + i * rotation].style.backgroundColor = "aquamarine";

                }
                //this.whichShip = "Carrier";
                document.getElementById("placeGrid-div").classList.add("passive");
                document.querySelector("body").classList.remove("passive");
                let myBoardCells = document.querySelectorAll(".playerCell");
                for (let i = 0; i < 100; i++) {
                    let xcoor = Math.floor(i / 10);
                    let ycoor = i % 10;
                    //console.log(xcoor + " " + ycoor);
                    //console.log(this.gameBoard);
                    if (this.gameBoard[xcoor][ycoor] == 1) {
                        myBoardCells[i].style.backgroundColor = "rgb(70,70,70)";
                    }
                }
                console.log("firstrandom: " + this.firstRandom);
                if (this.firstRandom) {
                    console.log("how many times");
                    this.firstRandom = false;
                    this.createRandomGrid();
                    return false;
                }
                return false;
            }
        }
        return true;
    }

    isValid(xcoor, ycoor, rotation, sl, gameBoard) {

        //("hello" + xcoor + " " + ycoor);
        let tmpx = xcoor;
        let tmpy = ycoor;

        let valid = true;

        //console.log("gameboard: "+gameBoard);

        if (rotation == 1) {
            for (let i = 0; i < sl; i++) {

                if (ycoor <= 9) {

                    if (gameBoard[xcoor][ycoor] == -1 || gameBoard[xcoor][ycoor] == 1) {
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

                    if (xcoor - 1 >= 0 && ycoor - 1 >= 0) {
                        gameBoard[xcoor - 1][ycoor - 1] = -1;
                    }
                    if (xcoor + 1 <= 9 && ycoor - 1 >= 0) {
                        gameBoard[xcoor + 1][ycoor - 1] = -1;
                    }

                    if (q == 0) {



                        if (ycoor - 1 >= 0) {
                            gameBoard[xcoor][ycoor - 1] = -1;
                        }


                    }
                    else if (q == sl - 1) {

                        //console.log("sondayım" + xcoor + " " + ycoor);

                        if (xcoor - 1 >= 0) {
                            //console.log("1");
                            gameBoard[xcoor - 1][ycoor] = -1;

                        }
                        if (xcoor + 1 <= 9) {
                            //console.log("2");
                            gameBoard[xcoor + 1][ycoor] = -1;
                        }
                        if (ycoor + 1 <= 9) {

                            gameBoard[xcoor][ycoor + 1] = -1;
                        }
                        if (xcoor - 1 >= 0 && ycoor + 1 <= 9 && ycoor + 1 <= 9) {

                            gameBoard[xcoor - 1][ycoor + 1] = -1;
                        }
                        if (xcoor + 1 <= 9 && ycoor + 1 <= 9) {

                            gameBoard[xcoor + 1][ycoor + 1] = -1;
                        }
                    }
                    ycoor++;
                }
            }
            //console.log("finishedRow");
            //console.log(gameBoard);

        }
        else if (rotation == 10) {
            for (let i = 0; i < sl; i++) {

                if (xcoor <= 9) {

                    if (gameBoard[xcoor][ycoor] == -1 || gameBoard[xcoor][ycoor] == 1) {
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

                    if (ycoor - 1 >= 0 && xcoor - 1 >= 0) {
                        gameBoard[xcoor - 1][ycoor - 1] = -1;
                    }
                    if (ycoor + 1 <= 9 && xcoor - 1 >= 0) {
                        gameBoard[xcoor - 1][ycoor + 1] = -1;
                    }

                    if (q == 0) {



                        if (xcoor - 1 >= 0) {
                            gameBoard[xcoor - 1][ycoor] = -1;
                        }


                    }
                    else if (q == sl - 1) {

                        //console.log("sondayım" + xcoor + " " + ycoor);

                        if (ycoor - 1 >= 0) {
                            //console.log("1");
                            gameBoard[xcoor][ycoor - 1] = -1;

                        }
                        if (ycoor + 1 <= 9) {
                            //console.log("2");
                            gameBoard[xcoor][ycoor + 1] = -1;
                        }
                        if (xcoor + 1 <= 9) {

                            gameBoard[xcoor + 1][ycoor] = -1;
                        }
                        if (ycoor - 1 >= 0 && xcoor + 1 <= 9 && ycoor + 1 <= 9) {

                            gameBoard[xcoor + 1][ycoor - 1] = -1;
                        }
                        if (ycoor + 1 <= 9 && xcoor + 1 <= 9) {

                            gameBoard[xcoor + 1][ycoor + 1] = -1;
                        }
                    }
                    xcoor++;
                }
            }
            /*console.log("finishedCol");
            console.log(gameBoard);*/
        }
        //console.log(valid);
        return valid;

    }



    isOver() {
        return this.isfinished;
    }

}
