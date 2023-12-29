
let ArrayWithPoints =  [15, 25, 25, 23, 25, 22, 25, 12, 5,15];
let PointsTeam1 = 0;
let PointsTeam2 = 0;
let WinsTeam1 = 0;
let WinsTeam2 = 0;
var ServiceTeam= "Team 1";
let GameRound = 1;
let WinningGamePoints = 25;
let TimeoutCount = 1;
var countDownDate = new Date().getTime() + 6000;
let seconds = "";
let team1Value = localStorage.getItem('team1Value');
let team2Value = localStorage.getItem('team2Value');


function updateGameRound() {
    if(GameRound<=5){
        GameRound = GameRound + 1;
        document.getElementById("GameRound").textContent = GameRound;
    }
    
}

function AddPointsToTheBoard(PointsTeam1, PointsTeam2) {
     ArrayWithPoints.push(PointsTeam1);
     ArrayWithPoints.push(PointsTeam2);
}

function AddWinsTeam1() {
    WinsTeam1 = WinsTeam1 + 1;    
    updateWins();
   //document.getElementById("PointsTeam1").textContent = PointsTeam1;
    //document.getElementById("PointsTeam2").textContent = PointsTeam2;
    //AddPointsToTheBoard(PointsTeam1, PointsTeam2);
}


function AddTimeoutCount(){
    TimeoutCount = TimeoutCount +1;
    document.getElementById("TimeoutCount").textContent = TimeoutCount;
}
function resetTimeoutCount(){
    TimeoutCount = 1;
}

function AddWinsTeam2() {
    WinsTeam2 = WinsTeam2 + 1;    
    updateWins();
}

function updateWins() {
    document.getElementById("WinsTeam1").textContent = WinsTeam1;
    document.getElementById("WinsTeam2").textContent = WinsTeam2;
    checkUltimateWinner();
}

function checkUltimateWinner(){
    if((WinsTeam1>=3 || WinsTeam2>=3)){
       const winner = PointsTeam1 > PointsTeam2 ? "Team 1" : "Team 2";
       alert( `${winner} wins the game!`);
       resetPoints();
        updatePoints()
    }
    if(GameRound === 5){
        WinningGamePoints = 15;
        document.getElementById("WinningGamePoints").textContent = WinningGamePoints;
    }
}  

function checkWin() {

    let winner;
    if(((PointsTeam1>=WinningGamePoints) || (PointsTeam2>=WinningGamePoints)) && Math.abs(PointsTeam1 - PointsTeam2) >= 2){
      

      
        winner = PointsTeam1 > PointsTeam2 ? "Team 1" : "Team 2";

       resetPoints();
        updateGameRound();
        resetTimeoutCount(); 
        document.getElementById("PointsTeam1").textContent = 0;
        document.getElementById("PointsTeam2").textContent = 0; 
  
    }
    if(winner==="Team 1"){
        AddWinsTeam1();
    }
    else if(winner==="Team 2"){
        AddWinsTeam2();
    }
   
}





function AddPointTeam1() {
    PointsTeam1 = PointsTeam1 + 1;    
    updatePoints();
    ServiceTeam = "Team 1";
    document.getElementById("ServiceTeam").textContent = ServiceTeam;
}
function AddPointTeam2() {
    PointsTeam2 = PointsTeam2 + 1;
    updatePoints();
    ServiceTeam = "Team 2";
    document.getElementById("ServiceTeam").textContent = ServiceTeam;
}
function updatePoints() {

    document.getElementById("PointsTeam1").textContent = PointsTeam1;

    document.getElementById("PointsTeam2").textContent = PointsTeam2;

    if((TimeoutCount===1) && (PointsTeam1===8 || PointsTeam2===8)){

           countDown(); 
           AddTimeoutCount();
    }
    if((TimeoutCount===2) && (PointsTeam1===16 || PointsTeam2===16)){

        countDown(); 
        AddTimeoutCount();
 }

    checkWin();
    
}
function resetPoints() {
    PointsTeam1 = 0;
    PointsTeam2 = 0;
}


function countDown(){
    var countDownDate = new Date().getTime() + 6000;

    var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    seconds = Math.floor((distance % (1000 * 6)) / 1000);
    
    document.getElementById("timeout").innerHTML = seconds + "s ";
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timeout").innerHTML = "";
        }
}, 5);
}




/*function countDown(){

    var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var seconds = Math.floor((distance % (1000 * 61)) / 1000);
    
    document.getElementById("timeout").innerHTML = seconds + "s ";
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timeout").innerHTML = "keno";
        }
}, 5);
}
*/