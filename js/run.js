/**
 * Created by Peache on 23.08.2018.
 */

// drawing a room

window.onload = function () {
    for (let i = 0; i < 49; i++) {
        document.getElementById('room').innerHTML += "<div class='block'></div>";
    }
};

    let human = document.getElementById('human');
    let humanHorizontalMove = 0;
    let humanVerticalMove = 0;

    document.onkeydown = function (e) {
        console.log(e.keyCode);
        // Up = 38
        // down = 40
        // left = 37
        // right =39

        // move Right
        if (e.keyCode == 39) {
            humanHorizontalMove += 92;
            human.style.left = humanHorizontalMove + 'px';
            horizontalValidator(human.style.left);

            // move Left
        }else if (e.keyCode == 37) {
            humanHorizontalMove -= 92;
            human.style.left = humanHorizontalMove + 'px';
            horizontalValidator(human.style.left);

            // move Down
        }else if (e.keyCode == 40) {
            humanVerticalMove += 92;
            human.style.top = humanVerticalMove + 'px';
            verticalValidator(human.style.top);
            console.log(human.style.top);

            // move Up
        }else if (e.keyCode == 38){
            humanVerticalMove -= 92;
            human.style.top = humanVerticalMove + 'px';
            verticalValidator(human.style.top);
        }
    };

    // validator
    function horizontalValidator(position) {
        if (parseInt(position) >= 553) {
            human.style.left = "552px";
        } else if (parseInt(position) <= 93) {
            human.style.left = "92px";
        }
    }
    function verticalValidator(position) {
        if (parseInt(position) >= 369){
            human.style.top = "368px";
        } else if (parseInt(position) <= 93) {
            human.style.top = "92px";
        }
    }

    //rotate
    function rotate(deg) {
        human.setAttribute("style","transform :rotate("+deg+"deg)");

    }