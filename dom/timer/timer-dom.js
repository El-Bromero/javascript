console.log("time to start the timer!");

const button = document.querySelectorAll("button");
const p = document.querySelector("p");

button[0].addEventListener('click', () => {

    let sec = 0;

    // Next snippet of code increments the timer value correctly. Took some ideas for correctly getting time from a question in stackoverflow
    function correctTime(value) {
        return value > 9 ? value : "0" + value;
    }
    let timer = setInterval(() => {
        secString = correctTime(++sec % 60);
        minString = correctTime(parseInt(sec / 60, 10));
        p.textContent = minString + ":" + secString;
    }, 1000)

    // Stop button uses clearInterval and that method stops timer interval
    button[1].addEventListener('click', () => {
    clearInterval(timer);
    })

    // Reset button resets time by changing text content of p to 0:00
    button[2].addEventListener('click', () => {
        p.textContent = "0:00";
        clearInterval(timer);
    })
})



console.log(button);
console.log(p);