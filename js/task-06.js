const input = document.querySelector('#validation-input');

function handleBlurInput({ target }) {
  const dataLength = +target.dataset.length;
  const inputLength = target.value.length;
  if (inputLength === dataLength) {
    target.classList.add('valid');
    target.classList.remove('invalid');
  } else {
    target.classList.add('invalid');
    target.classList.remove('valid');
  }
}
input.addEventListener('blur', handleBlurInput);
