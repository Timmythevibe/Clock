function updateClock() {
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');
    
    // Get the current time in Nigerian time (UTC+1)
    const now = new Date();
    const nigerianTime = new Date(now.toLocaleString("en-US", {timeZone: "Africa/Lagos"}));
    
    const hours = nigerianTime.getHours();
    const minutes = nigerianTime.getMinutes();
    const seconds = nigerianTime.getSeconds();

    const hoursDegrees = (hours % 12) / 12 * 360 + (minutes / 60) * 30 + 90;
    const minutesDegrees = minutes / 60 * 360 + (seconds / 60) * 6 + 90;
    const secondsDegrees = seconds / 60 * 360 + 90;

    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
