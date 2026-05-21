// Countdown from days, hours, minutes, seconds //
const countdownDate = new Date("June 15, 2026 23:59:59").getTime();

const timer = setInterval(() => {
    
    const now = new Date().getTime();
    const distance = countdownDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
}, 1000);



// Counter for cart - price changes depanding on quantity // 
let quantity = 1;
let price = 210;

function updateCart(){
    document.getElementById("quantity").innerText = quantity;
    document.getElementById("totalPrice").innerText =
    "€" + (quantity * price);
}

function increaseQty(){
    quantity++;
    updateCart();
}

function decreaseQty(){
    if(quantity > 1){
        quantity--;
        updateCart();
    }
    
}