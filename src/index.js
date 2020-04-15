import validator from './validator.js';

console.log(validator);

const homeView = document.getElementById("homeView");
const buyView = document.getElementById("buyView");
const checkoutView = document.getElementById("checkoutView");
const thanksView = document.getElementById("thanksView");
const buyTicketsBtn = document.getElementById("buyTickets");
const checkoutBtn = document.getElementById("checkout");
const placeOrderBtn = document.getElementById("placeOrder");

const buyTickets = function () {
    homeView.classList.add("hide");
    buyView.classList.remove("hide");
}

const checkout = function () {
    buyView.classList.add("hide");
    checkoutView.classList.remove("hide");
}

const placeOrder = function () {
    checkoutView.classList.add("hide");
    thanksView.classList.remove("hide");
}

buyTicketsBtn.addEventListener("click", buyTickets);
checkoutBtn.addEventListener("click", checkout);
placeOrderBtn.addEventListener("click", placeOrder);