let clicked = false;

const selectorClick = () => { 
    if (!clicked) {
        document.getElementById("click").style.visibility = 'visible';
        clicked = true;
        document.getElementById("selector_button").style.backgroundColor = 'rgb(57, 57, 57)';
    } else {
        document.getElementById("click").style.visibility = 'hidden';
        clicked = false;
        document.getElementById("selector_button").style.backgroundColor = 'white';
    }
};