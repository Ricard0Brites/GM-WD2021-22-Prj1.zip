//applies a zooming animation when hovering <-------------------------------------------------------> Header Logo <------------------------------------------------------------------------------------------------------------------->
const logoRef = document.querySelector(".Header-Logo");

logoRef.addEventListener("mouseleave", function () {
    var transitionEndTrigger = GetTransitionEnd();

    logoRef.classList.remove("grow");    // removes the grow transition css properties
    logoRef.classList.add("resetLogo"); // loads this classes(resetLogo) css properties

    logoRef.addEventListener(transitionEndTrigger, function () {
        logoRef.classList.remove('resetLogo');              // resets the css to repeat the process
        logoRef.removeEventListener(transitionEndTrigger); // stops looking out for the end of the transition
    }); // runs the function when the transition is complete (cross-browser)
}); // removes the grow transition and adds the shrink followed by a css property reset
logoRef.addEventListener("mouseenter", function () {
    logoRef.classList.add("grow");
}); //adds the css class named 'grow' to create a transition

























//custom function repository -------------------------------------------------------------------------------------------------------
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
} //interrupts code for X miliseconds

//get transition end browser based
function GetTransitionEnd() {
    var transitions = {
        //the different browsers' events
        transition: "transitionend",
        OTransition: "oTransitionEnd",
        MozTransition: "trnasitionend",
        WebkitTransform: "webkitTransitionEnd",
    };
    let bodyStyle = document.body.style;
    for (let transition in transitions) {
        if (bodyStyle[transition] != undefined) {
            return transitions[transition];
        }
    }
}
