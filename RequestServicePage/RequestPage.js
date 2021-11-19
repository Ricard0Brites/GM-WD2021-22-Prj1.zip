//applies a zooming animation when hovering
const logoRef = document.querySelector('.Header-Logo');

var hasEntered = false, hasLeft = false;

logoRef.addEventListener("mouseleave", function () {

    if( hasLeft == false)
    {
        logoRef.classList.add("resetLogo");
        var computedStyle = window.getComputedStyle(logoRef), originalScaleX = computedStyle.getPropertyValue('width'), originalScaleY = computedStyle.getPropertyValue('Height');
        logoRef.style.Width = originalScaleX;
        logoRef.style.Height = originalScaleY;

    //resets the verifiers
    hasLeft = true;
    hasEntered = false;

    //clears the queue
        setTimeout(() => {
           logoRef.classList.remove('resetLogo') ;
           logoRef.classList.remove('grow');
        }, 710);
    }

});
logoRef.addEventListener("mouseenter", function () {

    if(!hasEntered)
    {
        logoRef.classList.add("grow");

        var computedStyle = window.getComputedStyle(logoRef), originalScaleX = computedStyle.getPropertyValue('width'), originalScaleY = computedStyle.getPropertyValue('Height');

        logoRef.style.Width = originalScaleX;
        logoRef.style.Height = originalScaleY;

        //ensures that there aren't multiple entrances
        hasEntered = true;    
        hasLeft = false;
    } 
});











//custom function repository -------------------------------------------------------------------------------------------------------
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }