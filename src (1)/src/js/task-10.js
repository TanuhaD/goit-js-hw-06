const inputNumbers = document.querySelector("#controls input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
buttonCreate.addEventListener("click", createBoxes );
buttonDestroy.addEventListener("click", destroyBoxes);

let data = [];
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
 
function createBoxes() { 
  let boxSize = 30;
  for(let i = 0; i < inputNumbers.value; i++) {
    let backColor = getRandomHexColor()
    data.push({boxSize: boxSize, backgroungColor: backColor});
    boxSize += 10;
  }
  let posts = data.map((post) => 
    `<div style="background-color: ${post.backgroungColor}; height: ${post.boxSize}px; width: ${post.boxSize}px"></div>`
  ).join("")
  boxes.insertAdjacentHTML("beforeend", posts)
} 
function destroyBoxes() { 
  data.splice(0, data.length);
  boxes.innerHTML = "";
}


