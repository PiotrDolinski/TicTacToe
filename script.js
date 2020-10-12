const areas = [...document.querySelectorAll('.tile')];
let newGameButton = document.querySelector('.button');
areas.forEach(tile=>tile.addEventListener('click',pick));

newGameButton.addEventListener('click', () => {
    location.reload()});

let player1Moves = [];
let player2Moves = [];
let round = 0;

const winningTilesA = [["1","2","3"], 
                     ["4","5","6"], 
                     ["7","8","9"],
                     ["1","4","7"],
                     ["2","5","8"],
                     ["3","6","9"],
                     ["1","5","9"],
                     ["3","5","7"],
        ];

function pick(event){

    const turn =  round % 2 === 0 ? playerA() : playerB();
    event.target.removeEventListener('click', pick);
    round++;
}

function playerA()
{
    event.target.classList.add("far","fa-circle");
    player1Moves.push(event.target.dataset.id);
    player1Moves.sort();
    checkResult(player1Moves);
};

function playerB()
{
    event.target.classList.add("fas","fa-times");
    player2Moves.push(event.target.dataset.id);
    player2Moves.sort();
    checkResult(player2Moves);
};

function checkResult(player){
    for(let i=0; i<winningTilesA.length; i++){
     let score = 0; 
     const winnerTiles =[];
      for(let j=0; j<winningTilesA[i].length; j++){
        for(let k=0; k<player.length; k++){
                if(winningTilesA[i][j]==player[k]){
                    winnerTiles.push(winningTilesA[i][j]);
                    score++
                    if (score==3) showWinner(winnerTiles)
                }
            }
        }
    }

function showWinner(winnerTiles){
    console.log(winnerTiles);
    for(let i=0 ; i<winnerTiles.length ; i++){
    areas[winnerTiles[i]-1].style.color = "red";
    }
    
    areas.forEach(box=>box.removeEventListener('click',pick));
}

}


    
