var mouseClicks = 0;
var timeSpent = 0;
var keyPresses = 0;
var charsTyped = 0;


window.onload = function(){
    var form = document.getElementsByTagName("body")[0];
    var disp = document.getElementById("display");
    var spent = document.getElementById("timeSpent");
    var keys = document.getElementById("keyPresses");
    var startTime = Date.now();

    var start=Date.now();
    form.onclick = function () {
        mouseClicks++;
        disp.innerHTML = mouseClicks;
    }
    setInterval(() => {
        let elapsed = Math.round((Date.now() - startTime) / 1000);
        let minutes = Math.floor(elapsed/60);
        let seconds = elapsed%60;
        if(minutes==0){
            spent.innerHTML = seconds + " seconds";
        }
        else
        spent.innerHTML = minutes + " minutes, " + seconds + " seconds";
      }, 1000);

      
    document.addEventListener("keydown", function() {
        keyPresses++;
        keys.innerHTML = keyPresses;
    });
}
