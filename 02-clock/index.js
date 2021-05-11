// dom declarations
const hourHand = document.querySelector('.hand-hour');
const minuteHand = document.querySelector('.hand-minute');
const secondHand = document.querySelector('.hand-second');

function setDate() {
  // time constants
  const time = new Date();
  const hour = time.getHours()
  const minute = time.getMinutes()
  const sec = time.getSeconds();

  // calculate the aspects of rotation
  const hoursDeg = (( hour / 12) * 360 + 90);  
  const minutesDeg = (( minute / 60) * 360 + 90);  
  const secondsDeg = ((sec / 60 ) * 360 + 90);

  // declare that rotations to elements each second
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  }

setInterval(setDate, 1000);