var mouseClicks = 0; //the number of mouse Clicks
var timeSpent = 0; //the time spent on the signup page
var keyPresses = 0; //the number of keys pressed
var charsTyped = 0; // the total number of characters typed
var isSubmitPressed = false; // boolean that keeps track if the submit button was pressed

window.onload = function () {
    //make the div that contains the results 
    //that should be displayed hidden
    var results = document.getElementById("results");
    results.style.visibility = "hidden";
    
    const inputs = document.querySelectorAll("input"); //select all the input boxes 
    
    var form = document.getElementsByTagName("body")[0]; //select the body tag
    var disp = document.getElementById("display"); // select the 
    var spent = document.getElementById("timeSpent"); // select the id of the element
                                                      // where we display the spent time
    var keys = document.getElementById("keyPresses"); // select the id of the element
                                                      // where we display the number of keys pressed 
    var chars = document.getElementById("charsTyped"); // select the id of the element
                                                        // where we display the number of characters typed

    var subBut = document.getElementById("subButSignUp");// select the id of the submit button
    var startTime = Date.now();//tracks the moment the page was first open 
    var elapsed; // initialize the variable that tracks the elapsed time spent to complete the form
    let charsTyped = 0; // the number of chars typed
    
    var forms = document.getElementById("realForm");
    forms.addEventListener("submit", function (event) {
        event.preventDefault();
    });

    subBut.addEventListener("click", function () {
        results.style.visibility = "visible";
        charsTyped=0;
        for(let i=0; i<inputs.length-1;i++){
            charsTyped+=inputs[i].value.length;
        }
        chars.innerHTML = charsTyped;
        isSubmitPressed = true;
    });

    form.onclick = function () {
        if (!isSubmitPressed) {
            mouseClicks++;
        }
        disp.innerHTML = mouseClicks;
    }
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


    document.addEventListener("keydown", function () {
        if (!isSubmitPressed) {
            keyPresses++;
        }
        keys.innerHTML = keyPresses;
    });

}
