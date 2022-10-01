const first = {
    price: 10,
    time: 10,
};
const second = 0;
const third = 0;
const fourth = 0;
const fivth = 0;
const sixth = 0;
const seventh = 0;
const eighth = 0;
const ninth = 0;
const tenth = 0;

let firstClick = 1;
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
    if (total > 0) { 
        total = total - first.price;
    }
    if (minutes > 0) {
        minutes = minutes - first.time;
    }
    if (firstClick > 0) {
        firstClick = firstClick - 1;
    }

    document.getElementById('value-1').innerHTML = firstClick;
    document.getElementById('price_value').innerHTML = total + '$';
    document.getElementById('time_value').innerHTML = minutes + ' mins';
}