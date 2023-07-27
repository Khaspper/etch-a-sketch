let canvas = document.getElementById("canvas");

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

for(let i = 0; i < 16; i++) {
   row[i] = document.createElement('div');
   row[i].classList.add(`row_${i}`);
   row[i].style.display = "flex";
   row[i].style.width = "100%";
   for(let j = 0; j < 16; j++) {
      row[i][j] = document.createElement('div');
      row[i][j].classList.add("box");
      row[i][j].style.border = "solid 1px";
      row[i][j].style.flex = "1";
      row[i].appendChild(row[i][j]);
   }
   canvas.appendChild(row[i]);
}

canvas.addEventListener("mousedown", handleMouseDown);
document.addEventListener("mouseup", handleMouseUp);
canvas.addEventListener("mousemove", handleMouseMove);