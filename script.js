
//* DOM ELEMENTS */
 

const daysElm = document.querySelector('#days');
const hoursElm = document.querySelector('#hours');
const minutesElm = document.querySelector('#minutes');
const secondsElm = document.querySelector('#seconds');
const panelElm = document.querySelector('.panel')

//data di natale 
const enDate = new Date("December 25 2022");
const endDateInMs = enDate.getTime();




//TABELLINA IN MS

const secondsInMs = 1000; 
const minutesInMs = 60 * secondsInMs;
const hoursInMs = 60 * minutesInMs;
const daysInMs = 24 * hoursInMs;




const counterTimer = setInterval(timer, 1000);

function timer() {
// oggi in ms
const nowInMs = new Date().getTime();

const diff= endDateInMs - nowInMs;

if(diff > 0) {

    daysElm.innerHTML = Math.floor( diff / daysInMs);
    hoursElm.innerHTML = Math.floor( (diff % daysInMs) / hoursInMs);
    minutesElm.innerHTML = Math.floor( (diff % hoursInMs) / minutesInMs);
    secondsElm.innerHTML = Math.floor( (diff % minutesInMs) / secondsInMs);

} else{
    clearInterval(timer);
    panelElm.innerHTML = "<h1>Buon Natale!</h1>"
}
}

    