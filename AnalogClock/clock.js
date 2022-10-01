const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

const showTime = ()=> {
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    // console.log(hour, minute, second);
    secondHand.style.transform = `rotate(${second*6}deg)`;
    minuteHand.style.transform = `rotate(${minute*6}deg)`;
    hourHand.style.transform = `rotate(${hour*30}deg)`;
}

setInterval(showTime,1000);