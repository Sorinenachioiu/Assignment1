var mouseClicks = 0;
var timeSpent = 0;
var keyPresses = 0;
var charsTyped = 0;

window.onload = function(){
    var form = document.getElementsByTagName("body")[0];
    var disp = document.getElementById("display");
    var spent = document.getElementById("timeSpent");
    

    var start=Date.now();
    form.onclick = function () {
        mouseClicks++;
        disp.innerHTML = mouseClicks;
    }
    setInterval(() => {
        let elapsed = Math.round((Date.now() - start) / 1000);
        spent.innerHTML(elapsed);
      }, 1000);
}
