var mouseClicks = 0;
var timeSpent = 0;
var keyPresses = 0;
var charsTyped = 0;
var isSubmitPressed = false;
/**
 * Once the window has loaded, we run this code:
 */
window.onload = function () {
    var results = document.getElementById("results");
    results.style.visibility = "hidden";
    const inputs = document.querySelectorAll("input");
    var form = document.getElementsByTagName("body")[0];
    var disp = document.getElementById("display");
    var spent = document.getElementById("timeSpent");
    var keys = document.getElementById("keyPresses");
    var chars = document.getElementById("charsTyped");
    var subBut = document.getElementById("subButSignUp");
    var startTime = Date.now();
    var elapsed;
    let charsTyped = 0;
    var forms = document.getElementById("realForm");
    /**
     * To not refresh the page after the submit button is pressed.
     */
    forms.addEventListener("submit", function (event) {
        event.preventDefault();
    });
    /**
     * When the submit button has been clicked:
     * 1. checks the length of each input field to determine the
     * amount of characters typed
     * 2. shows the div containing all the tracking info.
     */
    subBut.addEventListener("click", function () {
        results.style.visibility = "visible";
        charsTyped=0;
        for(let i=0; i<inputs.length-1;i++){
            charsTyped+=inputs[i].value.length;
        }
        chars.innerHTML = charsTyped;
        isSubmitPressed = true;
    });
    /**
     * Checks how many mouse clicks have occurred on the input form.
     * Once the submit button has been pressed, the mouse click counter stops.
     */
    form.onclick = function () {
        if (!isSubmitPressed) {
            mouseClicks++;
        }
        disp.innerHTML = mouseClicks;
    }
    /**
     * Every second, we update the timer which tracks the amount
     * of time spent by the user on the page.
     * Once the submit button has been pressed, the tracking stops.
     */
    setInterval(() => {
        if (!isSubmitPressed) {
            elapsed = Math.round((Date.now() - startTime) / 1000);
        }
        var minutes = Math.floor(elapsed / 60);
        var seconds = elapsed % 60;
        if (minutes == 0) {
            spent.innerHTML = seconds + " seconds";
        }
        else
            spent.innerHTML = minutes + " minutes, " + seconds + " seconds";
    }, 1000);

    /**
     * Checks when a key has been pressed and updates the keypress counter accordingly;
     * If the submit button has been pressed already, we do not
     * track any other key presses.
     */
    document.addEventListener("keydown", function () {
        if (!isSubmitPressed) {
            keyPresses++;
        }
        keys.innerHTML = keyPresses;
    });

}
