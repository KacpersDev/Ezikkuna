const first = {price: 10, time: 10};
const second = {price: 20, time: 20}
const third = {price: 20, time: 20}
const fourth = {price: 20, time: 20}
const fivth = {price: 20, time: 20}
const sixth = {price: 20, time: 20}
const seventh = {price: 20, time: 20}
const eighth = {price: 20, time: 20}
const ninth = {price:20, time:20};
const tenth = {price:20, time:20}

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