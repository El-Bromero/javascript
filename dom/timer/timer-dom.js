console.log("time to start the timer!");

const button = document.querySelectorAll("button");
const p = document.querySelector("p");

let sec = 0;
let timer_is_on = 0;

// Gets correct time in case the value goes above 9
function correctTime(value) {
    return value > 9 ? value : "0" + value;
}

button[0].addEventListener('click', () => {
    // Set timer interval so it can count timer. Have timer_is_on check so that I cannot start timer after starting it. (no instances of multiple timers going at once)
    if(!timer_is_on)
    {
        timer_is_on = 1;
        timer = setInterval(() => {
        // Next snippet of code increments the timer value correctly. Took some ideas for correctly getting time from a question in stackoverflow
        secString = correctTime(++sec % 60);
        minString = correctTime(parseInt(sec / 60, 10));
        p.textContent = minString + ":" + secString;
    }, 1000)
    }
    
})

// Stop button uses clearInterval and that method stops timer interval
button[1].addEventListener('click', () => {
    clearInterval(timer);
    timer_is_on = 0;
})
    
// Reset button resets time by changing text content of p to 0:00 and setting sec to 0
button[2].addEventListener('click', () => {
    p.textContent = "0:00";
    clearInterval(timer);
    timer_is_on = 0;
    sec = 0;
})
    