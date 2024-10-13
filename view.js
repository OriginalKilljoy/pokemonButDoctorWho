updateView();

function updateView(){
    getRandomEnemy();
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="container">

        <div class="player">
        <div>${player.name}</div>
        <img src= "${player.image}">
        </div>

        <div class="enemies">
            <div>${randomEnemy.name}</div>
            <div>Level ${randomEnemy.level}</div>
            <img src= "${randomEnemy.image}">
            <div class="buttonContainer">
            <button onclick="catchEnemy()">Catch</button>
            <button onclick="updateView()">Find another one</button>
            <button onclick="showEnemies()">See your caught enemies</button>
            </div>
        </div>
        

    </div>
    `;
}

function caughtScreen(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div>
    <div>Congrats! You caught ${randomEnemy.name}</div>
    <button onclick="updateView()">Catch more bad guys!</button>
    </div>
    `;
}

function showEnemies(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div>You've caught</div>
    <div>${showEnemyList()}</div>
    <button onclick="updateView()">Catch more bad guys!</button>
    `
}