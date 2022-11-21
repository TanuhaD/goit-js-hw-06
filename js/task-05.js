const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

function handleInput(event) {
  const inEl = event.target.value;
  if (inEl === '') {
    output.innerText = 'Anonymous';
  } else {
    output.innerText = inEl;
  }
}
input.addEventListener('input', handleInput);
