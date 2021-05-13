const inputs = document.querySelectorAll('.controls input');

// update the dom elements with value of input elements
function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

// track changes on inputs and run handleUpdate in every change 
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));