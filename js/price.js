const first = {price: 10, time: 10}; 
const second = {price: 20, time: 20};
const third = {price: 20, time: 20};
const fourth = {price: 20, time: 20};
const fivth = {price: 20, time: 20};
const sixth = {price: 20, time: 20};
const seventh = {price: 20, time: 20};
const eighth = {price: 20, time: 20};
const ninth = {price:20, time:20};
const tenth = {price:20, time:20};
const eleventh = {price:20, time:20};
const twelveth = {price:20, time:20};

let firstClick = 0;
let secondClick = 0;
let thirdClick = 0;
let fourthClick = 0;
let fivthClick = 0;
let sixthClick = 0;
let seventhClick = 0;
let eighthClick = 0;
let ninthClick = 0;
let tenthClick = 0;
let eleventhClick = 0;
let twelvethClick = 0;

let total = 0;
let minutes = 0;

const addFirst = () => {
    total = total + first.price;
    firstClick = firstClick + 1;
    minutes = minutes + first.time;

    document.getElementById('value-1').innerHTML = firstClick;
    document.getElementById('price_value').innerHTML = total + '$';
    document.getElementById('time_value').innerHTML = minutes + ' mins';
};

const removeFirst = () => {
    if (firstClick > 0){
        if (total > 0) { 
            total = total - first.price;
        }
        if (minutes > 0) {
            minutes = minutes - first.time;
        }
        if (firstClick > 0) {
            firstClick = firstClick - 1;
        }
    }

    document.getElementById('value-1').innerHTML = firstClick;
    document.getElementById('price_value').innerHTML = total + '$';
    document.getElementById('time_value').innerHTML = minutes + ' mins';
}

const addSecond = () => {
    total = total + second.price;
    secondClick = secondClick + 1;
    minutes = minutes + second.time;

    document.getElementById('value-2').innerHTML = secondClick;
    document.getElementById('price_value').innerHTML = total + '$';
    document.getElementById('time_value').innerHTML = minutes + ' mins';
};

const removeSecond = () => {
    if (secondClick > 0) {
        if (total > 0) { 
            total = total - second.price;
        }
        if (minutes > 0) {
            minutes = minutes - second.time;
        }
        if (secondClick > 0) {
            secondClick = secondClick - 1;
        }
    }

    document.getElementById('value-2').innerHTML = secondClick;
    document.getElementById('price_value').innerHTML = total + '$';
    document.getElementById('time_value').innerHTML = minutes + ' mins';
}

const addThird = () => {
    total = total + third.price;
    thirdClick = thirdClick + 1;
    minutes = minutes + third.time;

    document.getElementById('value-3').innerHTML = thirdClick;
    document.getElementById('price_value').innerHTML = total + '$';
    document.getElementById('time_value').innerHTML = minutes + ' mins';
};

const removeThird = () => {
    if (thirdClick > 0) {
        if (total > 0) { 
            total = total - third.price;
        }
        if (minutes > 0) {
            minutes = minutes - third.time;
        }
        if (thirdClick > 0) {
            thirdClick = thirdClick - 1;
        }
    }

    document.getElementById('value-3').innerHTML = thirdClick;
    document.getElementById('price_value').innerHTML = total + '$';
    document.getElementById('time_value').innerHTML = minutes + ' mins';
}

const addFourth = () => {
    total = total + fourth.price;
    fourthClick = fourthClick + 1;
    minutes = minutes + fourth.time;

    document.getElementById('value-4').innerHTML = fourthClick;
    document.getElementById('price_value').innerHTML = total + '$';
    document.getElementById('time_value').innerHTML = minutes + ' mins';
};

const removeFourth = () => {
    if (fourthClick > 0) {
        if (total > 0) { 
            total = total - fourth.price;
        }
        if (minutes > 0) {
            minutes = minutes - fourth.time;
        }
        if (fourthClick > 0) {
            fourthClick = fourthClick - 1;
        }
    }

    document.getElementById('value-4').innerHTML = fourthClick;
    document.getElementById('price_value').innerHTML = total + '$';
    document.getElementById('time_value').innerHTML = minutes + ' mins';
}

const addFivth = () => {
    total = total + fivth.price;
    fivthClick = fivthClick + 1;
    minutes = minutes + fivth.time;

    document.getElementById('value-5').innerHTML = fivthClick;
    document.getElementById('price_value').innerHTML = total + '$';
    document.getElementById('time_value').innerHTML = minutes + ' mins';
};

const removeFivth = () => {
    if (fivthClick > 0) {
        if (total > 0) { 
            total = total - fivth.price;
        }
        if (minutes > 0) {
            minutes = minutes - fivth.time;
        }
        if (fivthClick > 0) {
            fivthClick = fivthClick - 1;
        }
    }

    document.getElementById('value-5').innerHTML = fivthClick;
    document.getElementById('price_value').innerHTML = total + '$';
    document.getElementById('time_value').innerHTML = minutes + ' mins';
}

const addSixth = () => {
    total = total + sixth.price;
    sixthClick = sixthClick + 1;
    minutes = minutes + sixth.time;

    document.getElementById('value-6').innerHTML = sixthClick;
    document.getElementById('price_value').innerHTML = total + '$';
    document.getElementById('time_value').innerHTML = minutes + ' mins';
};

const removeSixth = () => {
    if (sixthClick > 0) {
        if (total > 0) { 
            total = total - sixth.price;
        }
        if (minutes > 0) {
            minutes = minutes - sixth.time;
        }
        if (sixthClick > 0) {
            sixthClick = sixthClick - 1;
        }
    }

    document.getElementById('value-6').innerHTML = sixthClick;
    document.getElementById('price_value').innerHTML = total + '$';
    document.getElementById('time_value').innerHTML = minutes + ' mins';
}


const addSeventh = () => {
    total = total + seventh.price;
    seventhClick = seventhClick + 1;
    minutes = minutes + seventh.time;

    document.getElementById('value-7').innerHTML = seventhClick;
    document.getElementById('price_value').innerHTML = total + '$';
    document.getElementById('time_value').innerHTML = minutes + ' mins';
};

const removeSeventh = () => {
    if (seventhClick > 0) {
        if (total > 0) { 
            total = total - seventh.price;
        }
        if (minutes > 0) {
            minutes = minutes - seventh.time;
        }
        if (seventhClick > 0) {
            seventhClick = seventhClick - 1;
        }
    }

    document.getElementById('value-7').innerHTML = seventhClick;
    document.getElementById('price_value').innerHTML = total + '$';
    document.getElementById('time_value').innerHTML = minutes + ' mins';
}


const addEighth = () => {
    total = total + eighth.price;
    eighthClick = eighthClick + 1;
    minutes = minutes + eighth.time;

    document.getElementById('value-8').innerHTML = eighthClick;
    document.getElementById('price_value').innerHTML = total + '$';
    document.getElementById('time_value').innerHTML = minutes + ' mins';
};

const removeEighth = () => {
    if (eighthClick > 0) {
        if (total > 0) { 
            total = total - seventh.price;
        }
        if (minutes > 0) {
            minutes = minutes - seventh.time;
        }
        if (eighthClick > 0) {
            eighthClick = eighthClick - 1;
        }
    }

    document.getElementById('value-8').innerHTML = eighthClick;
    document.getElementById('price_value').innerHTML = total + '$';
    document.getElementById('time_value').innerHTML = minutes + ' mins';
}

const addNinth = () => {
    total = total + ninth.price;
    ninthClick = ninthClick + 1;
    minutes = minutes + ninth.time;

    document.getElementById('value-9').innerHTML = ninthClick;
    document.getElementById('price_value').innerHTML = total + '$';
    document.getElementById('time_value').innerHTML = minutes + ' mins';
};

const removeNinth = () => {
    if (ninthClick > 0) {
        if (total > 0) { 
            total = total - ninth.price;
        }
        if (minutes > 0) {
            minutes = minutes - ninth.time;
        }
        if (ninthClick > 0) {
            ninthClick = ninthClick - 1;
        }
    }

    document.getElementById('value-9').innerHTML = ninthClick;
    document.getElementById('price_value').innerHTML = total + '$';
    document.getElementById('time_value').innerHTML = minutes + ' mins';
}

const addTenth = () => {
    total = total + tenth.price;
    tenthClick = tenthClick + 1;
    minutes = minutes + tenth.time;

    document.getElementById('value-10').innerHTML = tenthClick;
    document.getElementById('price_value').innerHTML = total + '$';
    document.getElementById('time_value').innerHTML = minutes + ' mins';
};

const removeTenth = () => {
    if (tenthClick > 0) {
        if (total > 0) { 
            total = total - tenth.price;
        }
        if (minutes > 0) {
            minutes = minutes - tenth.time;
        }
        if (tenthClick > 0) {
            tenthClick = tenthClick - 1;
        }
    }

    document.getElementById('value-10').innerHTML = tenthClick;
    document.getElementById('price_value').innerHTML = total + '$';
    document.getElementById('time_value').innerHTML = minutes + ' mins';
}

const addEleventh = () => {
    total = total + eleventh.price;
    eleventhClick = eleventhClick + 1;
    minutes = minutes + eleventh.time;

    document.getElementById('value-11').innerHTML = eleventhClick;
    document.getElementById('price_value').innerHTML = total + '$';
    document.getElementById('time_value').innerHTML = minutes + ' mins';
};

const removeEleventh = () => {
    if (eleventhClick > 0) {
        if (total > 0) { 
            total = total - eleventh.price;
        }
        if (minutes > 0) {
            minutes = minutes - eleventh.time;
        }
        if (eleventhClick > 0) {
            eleventhClick = eleventhClick - 1;
        }
    }

    document.getElementById('value-11').innerHTML = eleventhClick;
    document.getElementById('price_value').innerHTML = total + '$';
    document.getElementById('time_value').innerHTML = minutes + ' mins';
}

const addTwelveth = () => {
    total = total + twelveth.price;
    twelvethClick = twelvethClick + 1;
    minutes = minutes + twelveth.time;

    document.getElementById('value-12').innerHTML = twelvethClick;
    document.getElementById('price_value').innerHTML = total + '$';
    document.getElementById('time_value').innerHTML = minutes + ' mins';
};

const removeTwelveth = () => {
    if (twelvethClick > 0) {
        if (total > 0) { 
            total = total - twelveth.price;
        }
        if (minutes > 0) {
            minutes = minutes - twelveth.time;
        }
        if (twelvethClick > 0) {
            twelvethClick = twelvethClick - 1;
        }
    }

    document.getElementById('value-12').innerHTML = twelvethClick;
    document.getElementById('price_value').innerHTML = total + '$';
    document.getElementById('time_value').innerHTML = minutes + ' mins';
}