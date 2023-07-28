let canvas = document.getElementById("canvas");
let isMouseDown = false;
let pixelCount = 16;

function handleMouseDown() {
   isMouseDown = true;
}

function handleMouseUp() {
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

function deleteAllChildElements(parentElement) {
   while (parentElement.firstChild) {
     parentElement.removeChild(parentElement.firstChild);
   }
}

for (let i = 0; i < (pixelCount * pixelCount); i++) {
   let pixel = document.createElement('div');
   pixel.textContent = i;
   pixel.style.width = `${512 / pixelCount}px`;
   pixel.style.height = `${512 / pixelCount}px`;
   pixel.classList.add('box');
   pixel.style.display = "flex";
   pixel.style.flexWrap = "wrap";
   canvas.appendChild(pixel);
}

canvas.addEventListener("mousedown", handleMouseDown);
canvas.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mouseup", handleMouseUp);