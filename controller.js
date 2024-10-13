function getRandomEnemy(){
    let randomNum = Math.floor (Math.random() * possibleEnemies.length)
    randomEnemy = possibleEnemies[randomNum];
};

function catchEnemy(){
    caughtEnemies.push(randomEnemy);
    caughtScreen();
}