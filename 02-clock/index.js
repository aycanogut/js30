const hourHand = document.querySelector('.hand-hour');
const minuteHand = document.querySelector('.hand-minute');
const secondHand = document.querySelector('.hand-second');

function setDate() {
  const time = new Date();
  const sec = time.getSeconds();
  const secondsDeg = ((sec / 60 ) * 360 + 90);
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  
  console.log(sec)
}

setInterval(setDate, 1000);