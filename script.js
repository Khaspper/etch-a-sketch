let canvas = document.getElementById("canvas");
let isMouseDown = false;
let pixelCount = 16;

function handleMouseDown() {
   isMouseDown = true;
}

function handleMouseUp() {
   isMouseDown = false;
}

function handleMouseMove() {
   console.log("hi");
}

for (let i = 0; i < (pixelCount * pixelCount); i++) {
   let pixel = document.createElement('div');
   pixel.textContent = i;
   pixel.style.width = `${512 / pixelCount}px`;
   pixel.style.height = `${512 / pixelCount}px`;
   pixel.setAttribute('id', 'box');
   pixel.style.display = "flex";
   pixel.style.flexWrap = "wrap";
   canvas.appendChild(pixel);
}

canvas.addEventListener("mousedown", handleMouseDown);
canvas.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mouseup", handleMouseUp);