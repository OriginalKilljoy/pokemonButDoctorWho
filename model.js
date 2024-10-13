let dalek = {
    name: "Dalek",
    health: 80,
    level: 11,
    image: "images/dalek.png"
};

let cyberman = {
    name: "Cyberman",
    health: 50,
    level: 7,
    image: "images/cyberman.png"
};

let theSilence = {
    name: "The Silence",
    health: 65,
    level: 9,
    image: "images/theSilence.png"
};

let weepingAngel = {
    name: "Weeping Angel",
    health: 100,
    level: 18,
    image: "images/weepingAngel.png"
};

let player = {
    name: "The Doctor",
    image: "images/doctor.png",
    caughtEnemies: []
};

let randomEnemy = null;
let possibleEnemies = [dalek, cyberman, theSilence, weepingAngel];

