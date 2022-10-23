let value = document.getElementById("value");
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");

let counterValue = 0;

const render = () => {
    value.textContent = counterValue;
}

increment.addEventListener('click', () => {
    counterValue++;
    render();
});

decrement.addEventListener('click', () => {
    counterValue--;
    render();
});

render();

