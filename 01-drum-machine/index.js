
function playSound(e) {
  // audio DOM
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   //keys DOM
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
   if (!audio) return; // stop the undefined keys
   audio.currentTime = 0; // rewind from 0(play instantly when re press to the button )  
   audio.play(); // invoke the function

   // add the playing class 
   key.classList.add('playing');  
}

function removeTransition(e) {
if (e.propertyName !== 'transform') return; // skip other classes than transform (on elements styles)
this.classList.remove('playing');
}

// catch keys on dom and when transition ends remove class
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


// catch every key press of keyboard and run playSound function
window.addEventListener('keydown', playSound);