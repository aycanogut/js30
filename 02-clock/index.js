const hourHand = document.querySelector('.hand-hour');
const minuteHand = document.querySelector('.hand-minute');
const secondHand = document.querySelector('.hand-second');

function setDate() {
  const time = new Date();
  const hour = time.getHours()
  const minute = time.getMinutes()
  const sec = time.getSeconds();
  const secondsDeg = ((sec / 60 ) * 360 + 90);
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  }

setInterval(setDate, 1000);