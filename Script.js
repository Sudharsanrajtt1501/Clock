function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDegree = (hours % 12) * 30 + minutes * 0.5;
    const minuteDegree = minutes * 6;
    const secondDegree = seconds * 6;

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDegree}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteDegree}deg)`;
    secondHand.style.transform = `translate(-50%, -100%) rotate(${secondDegree}deg)`;
}

setInterval(updateClock, 1000);
