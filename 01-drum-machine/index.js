// catch every key press of keyboard
window.addEventListener('keydown', function(e) {
  // audio DOM
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //keys DOM
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; // stop the undefined keys
  
  audio.currentTime = 0; // rewind from 0(play instantly when re press to the button )  
  audio.play(); // invoke the function
})