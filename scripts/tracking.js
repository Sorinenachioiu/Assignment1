var mouseClicks = 0;
var timeSpent = 0;
let keyPresses = 0;
let charsTyped = 0;

window.onload = function(){
    
    var form = document.getElementsByTagName("body")[0];
    var disp = document.getElementById("display");
    
    form.onclick = function () {
        mouseClicks++;
        disp.innerHTML = mouseClicks;
    }

}