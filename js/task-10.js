const inputNumbers = document.querySelector("#controls input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
buttonCreate.addEventListener("click", createBoxes );
buttonDestroy.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
 
function createBoxes() {
  let markup = "";
  let boxSize = 30;
  for ( let i = 0; i < inputNumbers.value; i++){
   const newColor = getRandomHexColor();
   markup += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${newColor}"></div>`;
   boxSize += 10;
  }
  boxes.insertAdjacentHTML('beforeend',markup);
}
 function destroyBoxes(){
  boxes.innerHTML = "";
 }

