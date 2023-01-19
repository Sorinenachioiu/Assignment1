var mouseClicks = 0;
var timeSpent = 0;
var keyPresses = 0;
var charsTyped = 0;
var isSubmitPressed = false;

window.onload = function(){
    var results = document.getElementById("results");
    results.style.visibility = "hidden";
    var form = document.getElementsByTagName("body")[0];
    var disp = document.getElementById("display");
    var spent = document.getElementById("timeSpent");
    var keys = document.getElementById("keyPresses");
    var subBut = document.getElementById("subButSignUp");
    var startTime = Date.now();
    var elapsed;
    var forms = document.getElementById("realForm");
        forms.addEventListener("submit", function(event) {
        event.preventDefault();    
    });

    subBut.addEventListener ("click", function(){
        results.style.visibility = "visible";
        isSubmitPressed = true;
    });

    form.onclick = function () {
        if(!isSubmitPressed){
            mouseClicks++;   
        }
        disp.innerHTML = mouseClicks;
    }
    setInterval(() => {
        if(!isSubmitPressed){
            elapsed = Math.round((Date.now() - startTime) / 1000);
        }
        var minutes = Math.floor(elapsed/60);
        var seconds = elapsed%60;
        if(minutes==0){
            spent.innerHTML = seconds + " seconds";
        }
        else
        spent.innerHTML = minutes + " minutes, " + seconds + " seconds";
      }, 1000);

      
    document.addEventListener("keydown", function() {
        if(!isSubmitPressed){
            keyPresses++;
        }
        keys.innerHTML = keyPresses;
    });

}
