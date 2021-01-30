console.log("time to start the timer!");

const button = document.querySelectorAll("button");
const p = document.querySelector("p");

button[0].addEventListener('click', () => {
    let timer = setInterval(() => {
        let d = new Date();
        let t = d.toLocaleTimeString();
        p.textContent = t;
    }, 1000);

    button[1].addEventListener('click', () => {
    clearInterval(timer);
    })

    button[2].addEventListener('click', () => {
        p.textContent = "0:00";
        clearInterval(timer);
    })
})



console.log(button);
console.log(p);