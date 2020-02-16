"use strict";
window.addEventListener("DOMContentLoaded", init);

let array = [];

function init() {
    loop();
    setHeight();
}

// function for data acquisition + loop
function loop() {

    function getNumbers() {
        //will return fake data for us to use
        return Math.floor(Math.random() * 32);
    }

    const queueSize = getNumbers();
    //console.log(queueSize)


    if (array.length < 20) {
        array.unshift(queueSize);
        setTimeout(loop, 500)

        console.clear()
        console.log(array)

        //for each new array number:
        setHeight();


    } else {
        array.pop();
        setTimeout(loop, 500)
    }
}

// function for visuals
function setHeight() {
    //find the current number 
    //console.log(array[0])

    //use for-loop
    for (let i = 0; i < 20; i++) {
        let oneBar;
        oneBar = document.querySelector(`#bars > div:nth-child(${i+1})`);
        oneBar.style.setProperty("--barHeight", array[i]);
    }
}