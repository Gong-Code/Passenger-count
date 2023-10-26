// 1. Grab the save-el paragrah and store it in a variable called saveEl

let countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");

console.log(countEl);

let count = 0;

function increment() {
count += 1;
countEl.textContent = count;
console.log("increment clicked");
}

function decrement() {
if (count > 0) {
    count--;
}
countEl.textContent = count;
console.log("decrement clicked");
}

function save() {
    let countPassenger = count + " - ";
    saveEl.textContent += countPassenger;
    count = 0;
    countEl.textContent = count;
}
