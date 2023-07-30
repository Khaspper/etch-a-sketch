const canvas = document.getElementById("canvas");
let pixelDimension = document.getElementById("pixelDimension");
let isMouseDown = false;
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", (event) => {
   deleteAllChildElements(canvas);
   addPixels(canvas);
})
let pixelCount = 16;
pixelDimension.textContent = `${pixelCount} X ${pixelCount}`
slider.addEventListener("mousemove", (event) => pixelDimension.textContent = `${slider.value} X ${slider.value}`)
slider.addEventListener("mouseup", (event) => {
   pixelCount = slider.value;
   deleteAllChildElements(canvas);
   addPixels(canvas);
   pixelDimension.textContent = `${pixelCount} X ${pixelCount}`
})

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

function addPixels(canvas) {
   for (let i = 0; i < (pixelCount * pixelCount); i++) {
      let pixel = document.createElement('div');
      pixel.style.width = `${512 / pixelCount}px`;
      pixel.style.height = `${512 / pixelCount}px`;
      pixel.classList.add('box');
      pixel.style.display = "flex";
      pixel.style.flexWrap = "wrap";
      canvas.appendChild(pixel);
   }
}

addPixels(canvas);
canvas.addEventListener("mousedown", handleMouseDown);
canvas.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mouseup", handleMouseUp);