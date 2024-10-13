function getRandomEnemy(){
    let randomNum = Math.floor (Math.random() * possibleEnemies.length)
    randomEnemy = possibleEnemies[randomNum];
};

function catchEnemy(){
    player.caughtEnemies.push(randomEnemy);
    caughtScreen();
}

function showEnemyList(){
    let caughtEnemy = '';
    for(let i = 0; i < player.caughtEnemies.length; i++){
        caughtEnemy += /*HTML*/`
        <li>${player.caughtEnemies[i].name}</li>
        `
    }
    return caughtEnemy;
}
