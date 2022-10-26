const buttonColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const body = document.querySelector("body");
buttonColor.addEventListener("click",() => {
  const newColor = getRandomHexColor();
  spanColor.textContent = newColor;

  body.style.backgroundColor = newColor;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
