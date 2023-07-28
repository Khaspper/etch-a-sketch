let canvas = document.getElementById("canvas");
const content = document.getElementById("content");
const slider = document.getElementById("slider");
let pixels = 16;
let dimension = document.getElementById("dimension");
slider.addEventListener("mouseup", (event) => {
   pixels = slider.value;
   addPixels(canvas);
})

const row = [];

let isMouseDown = false;

function handleMouseDown(event) {
   isMouseDown = true;
}

function handleMouseUp(event) {
   isMouseDown = false;
}

function handleMouseMove(event) {
   if (isMouseDown) {
      let targetDiv = document.elementFromPoint(event.clientX, event.clientY);
      if (targetDiv && targetDiv.classList.contains('box')) {
         targetDiv.style.backgroundColor = 'black';
      }
   }
}

function addPixels() {
   deletePixels(canvas);
   canvas = document.createElement('div');
   canvas.setAttribute('id', 'canvas');
   content.appendChild(canvas);
   
   for(let i = 0; i < pixels; i++) {
      row[i] = document.createElement('div');
      row[i].setAttribute('id', `row_${i}`);
      row[i].style.display = "flex";
      row[i].style.width = "100%";
      for(let j = 0; j < pixels; j++) {
         row[i][j] = document.createElement('div');
         row[i][j].setAttribute('id', "box");
         row[i][j].style.border = "solid 1px";
         row[i][j].style.flex = "1";
         row[i].appendChild(row[i][j]);
      }
      canvas.appendChild(row[i]);
   }
}

function deletePixels(canvas) {
   for (let i = 0; i < row.length; i++){
      row.splice(0, row.length);
   }
   canvas.remove();
}

//TODO: Check if you are on the correct file LOL and branch also Create a slider that lets the user choose
//TODO: how much pixels they want to use and also remember the max is 64px

addPixels(canvas);
canvas = document.getElementById("canvas");
canvas.addEventListener("mousedown", handleMouseDown);
canvas.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mouseup", handleMouseUp);