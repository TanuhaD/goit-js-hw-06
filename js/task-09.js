const buttonColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function handleBtnClick() {
  const changeColor = getRandomHexColor();
  body.style.backgroundColor = changeColor;
  spanColor.textContent = changeColor;
}
buttonColor.addEventListener('click', handleBtnClick);
