var mouseClicks = 0; //the number of mouse Clicks
var timeSpent = 0; //the time spent on the signup page
var keyPresses = 0; //the number of keys pressed
var charsTyped = 0; // the total number of characters typed
var isSubmitPressed = false; // boolean that keeps track if the submit button was pressed
/**
 * Once the window has loaded, we run this code:
 */
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




    /**
     * INPUT CHECKING BEGINS HERE
     */
    var uID= document.getElementById("user-id");
    var fName= document.getElementById("full-name");


    document.addEventListener("focusout", function (){
        /**
         * UserID Check
         */
        let input1 = inputs[0].value;
        let firstChar = input1[0];
        let lastChar = input1[input1.length-1];
        let len = input1.length;

        if(firstChar>='A' && firstChar<='Z' && 
        lastChar>='!' && lastChar<='/' &&
        len>=5 && len<=12){
            uID.style.color="green";
            uID.innerHTML="Correct!";
        }
        else {
            uID.style.color="red";
            if(!(firstChar>='A' && firstChar<='Z')){
            uID.innerHTML="Your user ID should start with a capital letter.";
            }
            else if(!(lastChar>='!' && lastChar<='/'))
            uID.innerHTML="Your user ID should end with a special character (!,./#&).";
            else
            uID.innerHTML="Your user ID should have 5-12 characters.";
        }

        /**
         * Full Name Check
         */
        let input2 = inputs[0].value;

        input2.array.forEach(element => {
            console.log(element);
            if(element>="A" && element<="Z" || element>="a" && element>="z" || element==' '){
                fName.innerHTML="Your name should contain characters only.";
            }
        });
    });



}
