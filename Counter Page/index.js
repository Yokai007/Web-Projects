const less = document.getElementById("less");
const reset = document.getElementById("reset");
const more = document.getElementById("more");
const counts =document.getElementById("counter");
let count = 0;

more.onclick = function(){
    count++;
    counts.textContent = count;
}
reset.onclick = function(){
    count = 0;
    counts.textContent = count;
}
less.onclick = function(){
    count--;
    counts.textContent = count;
}