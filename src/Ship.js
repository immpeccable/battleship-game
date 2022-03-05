export default class Ship {
    constructor(shipType, shipLength, beginCoor, endCoor, direction){
        this.shipType = shipType;
        this.beginCoor = beginCoor;
        this.endCoor = endCoor;
        this.shipLength = shipLength;
        this.shipArray = Array(shipLength).fill(0);
        this.direction = direction;
    }
    getLength(){
        return this.shipLength;
    }
    getBeginCoor(){
        return this.beginCoor;
    }
    getEndCoor(){
        return this.endCoor;
    }
    isSunk(){
        let flag = true;
        console.log(this.shipArray);
        for(let i = 0; i < this.shipLength ; i++){
            if(this.shipArray[i] == 0){
                flag = false;
                break;
            }
        }
        return flag;
    }
    hit(whichCell){
        this.shipArray[whichCell] = 1; 
    }


}