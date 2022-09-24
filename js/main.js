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

const submitClick = () => {
    const name = document.getElementById('name').innerHTML;
    const surname = document.getElementById('surname').innerHTML;
    console.log(name);
    console.log(surname);
};

document.getElementById('contact_button').addEventListener('click', submitClick);