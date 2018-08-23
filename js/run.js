/**
 * Created by Peache on 23.08.2018.
 */
// create room
window.onload = function () {
    for (let i = 0; i < 49; i++) {
        document.getElementById('room').innerHTML += "<div class='block'></div>";
    }
};


let human = document.getElementsByClassName('human');
let humanLeft = 0;
let humanTop = 0;
let humanDown = 0;
let humanRight = 0;

document.onkeydown  = function (e) {
    console.log("test");
    if (e.key =='ArrowRight'){
        human.style.left = humanLeft + 'px';
        humanLeft++;
        }
};

document.onkeydown = function (e) {
    console.log("test");
    if (e.key =='ArrowDown'){
        human.style.top = humanTop + 'px';
        humanTop++;
    }
};

document.onkeydown = function (e) {
    if (e.key =='ArrowLeft'){
        human.style.left =  humanRight + 'px';
        --humanRight;
    }
};

document.onkeydown = function (e) {
    if (e.key =='ArrowUp'){
        human.style.top = humanDown + 'px';
        --humanDown;
    }
};