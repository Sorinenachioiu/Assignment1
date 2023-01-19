let mouseClicks =0;
let timeSpent =0;
let keyPresses=0;
let charsTyped =0;



var counterElem = document.getElementById("counter");
document.addEventListener("click", function() {
    mouseClicks++;
    counterElem.innerHTML = mouseClicks;
});

console.log(mouseClicks);
