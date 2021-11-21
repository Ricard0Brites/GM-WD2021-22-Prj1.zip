const iconref = document.getElementById("mainContainer");

window.onload = function () {
    iconref.classList.add("pageLoadAnimation");

    var transitionEnd = GetTransitionEnd();
    iconref.addEventListener(transitionEnd, function () {
        sleep(3000);
        window.location.href = "../MainPage/Mainpage.html";
    });


};



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