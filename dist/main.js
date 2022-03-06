(()=>{"use strict";var t={d:(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{F:()=>s});class e{constructor(){this.rotation=1,this.gameBoard=[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]],this.computerBoard=[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]],this.whichShip="Carrier",this.firstRandom=!0,this.isfinished=!1,this.placeShip()}createRandomGrid(){console.log("şimdi buradayım"),this.whichShip="Carrier";let t=!0,e=0;for(;t&&e<200;){let o=Math.floor(100*Math.random());t=0==Math.floor(2*Math.random())?this.createGrid(o,this.computerBoard,1):this.createGrid(o,this.computerBoard,10),e++}console.log("cnt: "+e),console.log(this.computerBoard),this.playGame()}playGame(){let t=[];for(let e=0;e<100;e++)t.push(e);let e=document.querySelectorAll(".playerCell"),o=this,r=document.querySelectorAll(".computerCell");for(let i=0;i<10;i++)for(let a=0;a<10;a++)r[10*i+a].addEventListener("click",(l=>{let n=Math.floor(l.target.id/10),s=l.target.id%10;1==this.computerBoard[n][s]?r[l.target.id].classList.add("hit"):-1!=this.computerBoard[n][s]&&0!=this.computerBoard[n][s]||r[l.target.id].classList.add("miss"),2!=this.computerBoard[n][s]&&(console.log(this.computerBoard[n][s]),r[l.target.id].classList.remove("active"),t=o.randomAttack(t,e),console.log(t),this.computerBoard[i][a]=2),o.checkIsOver()}))}checkIsOver(){let t=!0;for(let e=0;e<10;e++)for(let o=0;o<10;o++)if(1==this.computerBoard[e][o]){t=!1;break}if(t)return s(1),!0;for(let e=0;e<10;e++)for(let o=0;o<10;o++)if(1==this.gameBoard[e][o]){t=!1;break}return!!t&&(s(2),!0)}resetTheGame(){document.getElementById("placingGrid").innerHTML="",document.getElementById("playerGrid").innerHTML="",document.getElementById("computerGrid").innerHTML=""}randomAttack(t,e){let o=t[Math.floor(Math.random()*t.length)];return console.log(o),1==this.gameBoard[Math.floor(o/10)][o%10]?e[o].style.backgroundColor="rgb(153, 78, 78)":e[o].style.backgroundColor="aquamarine",t.filter((function(t){return console.log("el:"+t),console.log("rat:"+o),t!=o}))}receiveAttack(t,e){}setRotation(){1==this.rotation?this.rotation=10:this.rotation=1}placeShip(){document.getElementById("placeText").textContent="Place your carrier";let t=document.querySelectorAll(".placingGridCell"),e=this;for(let o=0;o<t.length;o++)t[o].addEventListener("mouseover",(o=>{let r=parseInt(o.target.id),i=Math.floor(r/10),a=r%10;for(let o=0;o<100;o++){let r=Math.floor(o/10),i=o%10;0!=e.gameBoard[r][i]&&-1!=e.gameBoard[r][i]||(t[o].style.backgroundColor="white")}if("Carrier"==e.whichShip&&(1==e.rotation&&a<=5||10==e.rotation&&i<=5))for(let o=0;o<5;o++)t[r+o*e.rotation].style.backgroundColor="aquamarine";if("Battleship"==e.whichShip&&(1==e.rotation&&a<=6||10==e.rotation&&i<=6))for(let o=0;o<4;o++)t[r+o*e.rotation].style.backgroundColor="aquamarine";if("Destroyer"==e.whichShip&&(1==e.rotation&&a<=7||10==e.rotation&&i<=7))for(let o=0;o<3;o++)t[r+o*e.rotation].style.backgroundColor="aquamarine";if("Submarine"==e.whichShip&&(1==e.rotation&&a<=7||10==e.rotation&&i<=7))for(let o=0;o<3;o++)t[r+o*e.rotation].style.backgroundColor="aquamarine";if("Patrol Boat"==e.whichShip&&(1==e.rotation&&a<=8||10==e.rotation&&i<=8))for(let o=0;o<2;o++)t[r+o*e.rotation].style.backgroundColor="aquamarine"})),t[o].addEventListener("click",(t=>{let o=parseInt(t.target.id);e.createGrid(o,e.gameBoard,e.rotation)}))}createGrid(t,e,o){let r=Math.floor(t/10),i=t%10,a=document.querySelectorAll(".placingGridCell");if("Carrier"==this.whichShip){if((1==o&&i<=5||10==o&&r<=5)&&this.isValid(r,i,o,5,e)){for(let l=0;l<5;l++)1==o?e[r][i+l]=1:e[r+l][i]=1,a[t+l*o].style.backgroundColor="aquamarine";this.whichShip="Battleship",placeText.textContent="Place your Battleship"}}else if("Battleship"==this.whichShip){if((1==o&&i<=6||10==o&&r<=6)&&this.isValid(r,i,o,4,e)){for(let l=0;l<4;l++)1==o?e[r][i+l]=1:e[r+l][i]=1,a[t+l*o].style.backgroundColor="aquamarine";this.whichShip="Destroyer",placeText.textContent="Place your Destroyer"}}else if("Destroyer"==this.whichShip){if((1==o&&i<=7||10==o&&r<=7)&&this.isValid(r,i,o,3,e)){for(let l=0;l<3;l++)1==o?e[r][i+l]=1:e[r+l][i]=1,a[t+l*o].style.backgroundColor="aquamarine";this.whichShip="Submarine",placeText.textContent="Place your Submarine"}}else if("Submarine"==this.whichShip){if((1==o&&i<=7||10==o&&r<=7)&&this.isValid(r,i,o,3,e)){for(let l=0;l<3;l++)1==o?e[r][i+l]=1:e[r+l][i]=1,a[t+l*o].style.backgroundColor="aquamarine";this.whichShip="Patrol Boat",placeText.textContent="Place your Patrol Boat"}}else if("Patrol Boat"==this.whichShip&&(1==o&&i<=8||10==o&&r<=8)&&this.isValid(r,i,o,2,e)){for(let l=0;l<2;l++)1==o?e[r][i+l]=1:e[r+l][i]=1,a[t+l*o].style.backgroundColor="aquamarine";document.getElementById("placeGrid-div").classList.add("passive"),document.querySelector("body").classList.remove("passive");let l=document.querySelectorAll(".playerCell");for(let t=0;t<100;t++){let e=Math.floor(t/10),o=t%10;1==this.gameBoard[e][o]&&(l[t].style.backgroundColor="rgb(70,70,70)")}return console.log("firstrandom: "+this.firstRandom),!!this.firstRandom&&(console.log("how many times"),this.firstRandom=!1,this.createRandomGrid(),!1)}return!0}isValid(t,e,o,r,i){let a=t,l=e,n=!0;if(1==o){for(let o=0;o<r;o++){if(e<=9&&(-1==i[t][e]||1==i[t][e])){n=!1;break}e++}if(t=a,e=l,n)for(let o=0;o<r;o++)t-1>=0&&e-1>=0&&(i[t-1][e-1]=-1),t+1<=9&&e-1>=0&&(i[t+1][e-1]=-1),0==o?e-1>=0&&(i[t][e-1]=-1):o==r-1&&(t-1>=0&&(i[t-1][e]=-1),t+1<=9&&(i[t+1][e]=-1),e+1<=9&&(i[t][e+1]=-1),t-1>=0&&e+1<=9&&e+1<=9&&(i[t-1][e+1]=-1),t+1<=9&&e+1<=9&&(i[t+1][e+1]=-1)),e++}else if(10==o){for(let o=0;o<r;o++){if(t<=9&&(-1==i[t][e]||1==i[t][e])){n=!1;break}t++}if(t=a,e=l,n)for(let o=0;o<r;o++)e-1>=0&&t-1>=0&&(i[t-1][e-1]=-1),e+1<=9&&t-1>=0&&(i[t-1][e+1]=-1),0==o?t-1>=0&&(i[t-1][e]=-1):o==r-1&&(e-1>=0&&(i[t][e-1]=-1),e+1<=9&&(i[t][e+1]=-1),t+1<=9&&(i[t+1][e]=-1),e-1>=0&&t+1<=9&&e+1<=9&&(i[t+1][e-1]=-1),e+1<=9&&t+1<=9&&(i[t+1][e+1]=-1)),t++}return n}}let o=document.getElementById("placingGrid"),r=document.getElementById("playerGrid"),i=document.getElementById("computerGrid"),a=document.getElementById("rotateButton"),l=document.getElementById("p-a-button");d();let n=new e;function s(t){document.getElementById("placeGrid-div").classList.add("passive"),document.getElementById("play-again").classList.add("active"),document.querySelector("body").classList.add("passive"),document.getElementById("who-win-txt").textContent=1==t?"You won!":"Computer won!"}function d(){for(let t=0;t<100;t++){let e=document.createElement("div"),a=document.createElement("div"),l=document.createElement("div");e.classList.add("playerCell"),a.classList.add("computerCell"),a.classList.add("active"),l.classList.add("placingGridCell"),a.id=t,e.id=t,l.id=t,r.appendChild(e),i.appendChild(a),o.appendChild(l)}}a.addEventListener("click",(()=>{n.setRotation()})),l.addEventListener("click",(()=>{o.innerHTML="",r.innerHTML="",i.innerHTML="",document.getElementById("play-again").classList.remove("active"),document.getElementById("placeGrid-div").classList.remove("passive"),d(),n=new e}))})();