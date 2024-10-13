updateView();

function updateView(){
    getRandomEnemy();
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="container">
        <div>
            <div>${playerName}</div>
            <img src= "${playerImage}">
        </div>
        <div class="enemies">
            <div>${randomEnemy.name}</div>
            <div>${randomEnemy.level}</div>
            <img src= "${randomEnemy.image}">
        </div>

        <button onclick="catchEnemy()">Catch</button>
    </div>
    `;
}

function caughtScreen(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div>Congrats! You caught ${randomEnemy.name}</div>
    `;
}