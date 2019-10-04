const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");



function setTime(){
    const time = new Date();
    const seconds = time.getSeconds();
    const secondsDeg = (seconds/60 * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;

    const minutes = time.getMinutes();
    const minutesDeg = (minutes/60 * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;

    const hour = time.getHours();
    const hourDeg = (hour/12 * 360) + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

}

setInterval(setTime, 1000);

setTime();