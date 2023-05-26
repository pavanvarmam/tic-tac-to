const game = {
    moves : 0,
    turn : 1,
    getElementID(id){
        let element = document.getElementById(id);
        return element;
    },
    getElementClass(cls){
        let element = document.querySelector(cls);
        return element;
    },
    moveStatus : [
        {
            status : true
        },{
            status : true
        },{
            status : true
        },{
            status : true
        },{
            status : true
        },{
            status : true
        },{
            status : true
        },{
            status : true
        },{
            status : true
        }
    ],
};

const resetObj = {
     resetMoveStatus() {
        for(let i = 0;i <= 8;i++){
            game.moveStatus[i].status = true;
        }
    },
    
     resetBoxValues() {
        for(let i = 1; i <= 9; i++){
            document.getElementById(''+i).innerHTML = '';
        }
        game.moves = 0;
        game.turn = 1;
        gameResults.matchSeriesO = '';
        gameResults.matchSeriesX = '';
        },
    
     resetBox() {
        this.resetBoxValues();
        this.resetMoveStatus();
    },
    
     resetAll(){
    for(let i=0;i<game.moveStatus.length;i++){
        game.moveStatus[i].status = false;
    }
}
};

const gameResults ={
    isGameOver : false,
    matchSeriesX : '',
    matchSeriesO : '',
    playerResults : [{
    wins : 0,
    loss : 0,
    draw : 0,
    },{
    wins : 0,
    loss : 0,
    draw : 0,
    }]
};

let clickBox = (id) => {

    game.getElementID(id).onclick = () =>{
        let index  = Number(id)-1;
        if(game.moveStatus[index].status === true && game.turn === 1){
            game.moves++;
            game.getElementID(id).innerHTML = 'X';
            game.getElementID(id).style.color = 'red';
            game.turn = 0;
            game.moveStatus[index].status = false;
            gameResults.matchSeriesX += id;
            if(isgetMatchedX()){
                gameResults.playerResults[0].wins++;
                gameResults.playerResults[1].loss++;

                game.getElementClass('.p-1-win').innerHTML = `Wins : ${gameResults.playerResults[0].wins}`;
                game.getElementClass('.p-1-loss').innerHTML = `Loss : ${gameResults.playerResults[0].loss}`;
                game.getElementClass('.p-1-draw').innerHTML = `Draw : ${gameResults.playerResults[0].draw}`;

                game.getElementClass('.p-2-win').innerHTML = `Wins : ${gameResults.playerResults[1].wins}`;
                game.getElementClass('.p-2-loss').innerHTML = `Loss : ${gameResults.playerResults[1].loss}`;
                game.getElementClass('.p-2-draw').innerHTML = `Draw : ${gameResults.playerResults[1].draw}`;

                resetObj.resetAll();
            }
        }else if(game.moveStatus[index].status === true && game.turn === 0){
            game.moves++;
            game.getElementID(id).innerHTML = 'O';
            game.getElementID(id).style.color = 'green';
            game.turn = 1;
            game.moveStatus[index].status = false;
            gameResults.matchSeriesO += id;
            if(isgetMatchedO()){
                gameResults.playerResults[1].wins++;
                gameResults.playerResults[0].loss++;

                game.getElementClass('.p-1-win').innerHTML = `Wins : ${gameResults.playerResults[0].wins}`;
                game.getElementClass('.p-1-loss').innerHTML = `Loss : ${gameResults.playerResults[0].loss}`;
                game.getElementClass('.p-1-draw').innerHTML = `Draw : ${gameResults.playerResults[0].draw}`;

                game.getElementClass('.p-2-win').innerHTML = `Wins : ${gameResults.playerResults[1].wins}`;
                game.getElementClass('.p-2-loss').innerHTML = `Loss : ${gameResults.playerResults[1].loss}`;
                game.getElementClass('.p-2-draw').innerHTML = `Draw : ${gameResults.playerResults[1].draw}`;

                resetObj.resetAll();
            }
        }
        if(game.moves>=9){
                gameResults.playerResults[0].draw++;
                gameResults.playerResults[1].draw++;

                game.getElementClass('.p-1-win').innerHTML = `Wins : ${gameResults.playerResults[0].wins}`;
                game.getElementClass('.p-1-loss').innerHTML = `Loss : ${gameResults.playerResults[0].loss}`;
                game.getElementClass('.p-1-draw').innerHTML = `Draw : ${gameResults.playerResults[0].draw}`;

                game.getElementClass('.p-2-win').innerHTML = `Wins : ${gameResults.playerResults[1].wins}`;
                game.getElementClass('.p-2-loss').innerHTML = `Loss : ${gameResults.playerResults[1].loss}`;
                game.getElementClass('.p-2-draw').innerHTML = `Draw : ${gameResults.playerResults[1].draw}`;

                resetObj.resetAll();
        }
    }
}

let isgetMatchedX = () => {
    if((gameResults.matchSeriesX.includes('1') && gameResults.matchSeriesX.includes('2') && gameResults.matchSeriesX.includes('3'))
                || gameResults.matchSeriesX.includes('4') && gameResults.matchSeriesX.includes('5') && gameResults.matchSeriesX.includes('6')
                || gameResults.matchSeriesX.includes('7') && gameResults.matchSeriesX.includes('8') && gameResults.matchSeriesX.includes('9')
                || gameResults.matchSeriesX.includes('1') && gameResults.matchSeriesX.includes('4') && gameResults.matchSeriesX.includes('7')
                || gameResults.matchSeriesX.includes('2') && gameResults.matchSeriesX.includes('5') && gameResults.matchSeriesX.includes('8')
                || gameResults.matchSeriesX.includes('3') && gameResults.matchSeriesX.includes('6') && gameResults.matchSeriesX.includes('9')
                || gameResults.matchSeriesX.includes('1') && gameResults.matchSeriesX.includes('5') && gameResults.matchSeriesX.includes('9')
                || gameResults.matchSeriesX.includes('3') && gameResults.matchSeriesX.includes('5') && gameResults.matchSeriesX.includes('7')){
                    return true;
            }
}

let isgetMatchedO = () => {
    if((gameResults.matchSeriesO.includes('1') && gameResults.matchSeriesO.includes('2') && gameResults.matchSeriesO.includes('3'))
                || gameResults.matchSeriesO.includes('4') && gameResults.matchSeriesO.includes('5') && gameResults.matchSeriesO.includes('6')
                || gameResults.matchSeriesO.includes('7') && gameResults.matchSeriesO.includes('8') && gameResults.matchSeriesO.includes('9')
                || gameResults.matchSeriesO.includes('1') && gameResults.matchSeriesO.includes('4') && gameResults.matchSeriesO.includes('7')
                || gameResults.matchSeriesO.includes('2') && gameResults.matchSeriesO.includes('5') && gameResults.matchSeriesO.includes('8')
                || gameResults.matchSeriesO.includes('3') && gameResults.matchSeriesO.includes('6') && gameResults.matchSeriesO.includes('9')
                || gameResults.matchSeriesO.includes('1') && gameResults.matchSeriesO.includes('5') && gameResults.matchSeriesO.includes('9')
                || gameResults.matchSeriesO.includes('3') && gameResults.matchSeriesO.includes('5') && gameResults.matchSeriesO.includes('7')){
                    return true;
            }else{
                return false;
            }
}

////////////Call Function

game.getElementClass('.replay-btn').onclick = () =>
{
    resetObj.resetBox();
}


for(let i = 1 ;i <= 9; i++){
    clickBox(''+i);
}