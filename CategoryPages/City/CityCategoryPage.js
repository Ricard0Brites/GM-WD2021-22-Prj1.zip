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

//<-------------------------------------------------------> Cards <------------------------------------------------------------------------------------------------------------------->
// card height calculation on window resize
window.onresize = function () {
    //relative space adjustment
    var ajustHeight = window.innerHeight * 0.285;
    document.getElementById('webpage-flow-adjust').style.height = ajustHeight + 'px';

    //calculation of the height of the cards on window resize
    var cardHeight = window.innerHeight - (ajustHeight + (window.innerHeight * 0.03));

    var cards = document.getElementsByClassName('card');

    for (var i = 0; cards.length >= i; i++) {
        cards[i].style.height = cardHeight + 'px';
    };
};
// card height calculation on Page load
window.onload = function () {
    //relative space ajustment
    var ajustHeight = window.innerHeight * 0.285;
    document.getElementById('webpage-flow-adjust').style.height = ajustHeight + 'px';

    //calculation of the initial height of the cards
    var cardHeight = window.innerHeight - (ajustHeight + (window.innerHeight * 0.03));

    var cards = document.getElementsByClassName('card');

    for (var i = 0; cards.length >= i + 1; i++) {
        cards[i].style.height = cardHeight + 'px';
    };

};

// card shrink effect after unfocus
const cardsRef = document.getElementsByClassName('card');
window.onload
{
    //creates event listeners for each card based on their ids
    var cardsId = [];
    for (var i = 0; i + 1 <= cardsRef.length; i++) {
        var transitionEndTrigger = GetTransitionEnd();
        cardsId[i] = cardsRef[i];
        cardsId[i].addEventListener('mouseleave', function () {
            //on mouse leave it triggers the .card.resetcard css property with the shrink effect
            this.classList.add('resetcard');
            this.addEventListener(transitionEndTrigger, function () {
                //removes the class to reset the effect and prevent errors
                this.classList.remove('resetcard');
                this.removeEventListener(transitionEndTrigger, function () { });
            });
        });
    }
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
