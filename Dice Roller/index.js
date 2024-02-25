let randnum;
let face1 = document.getElementById("face1");
let face2 = document.getElementById("face2");
let face3 = document.getElementById("face3");
let face4 = document.getElementById("face4");
let face5 = document.getElementById("face5");
let face6 = document.getElementById("face6");
let dice = document.getElementById("dice");

face1.style.display = 'flex';

document.getElementById("roll").onclick = function(){
    randnum = Math.floor(Math.random() * 6) + 1;

    face1.style.display = 'none';
    face2.style.display = 'none';
    face3.style.display = 'none';
    face4.style.display = 'none';
    face5.style.display = 'none';
    face6.style.display = 'none';

    if(randnum == 1){
        face1.style.display = 'flex';
    }
    else if(randnum == 2){
        face2.style.display = 'flex';
    }
    else if(randnum == 3){
        face3.style.display = 'flex';
    }
    else if(randnum == 4){
        face4.style.display = 'flex';
    }
    else if(randnum == 5){
        face5.style.display = 'flex';
    }
    else if(randnum == 6){
        face6.style.display = 'flex';
    }
}