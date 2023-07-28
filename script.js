let canvas = document.getElementById("canvas");
let pixelCount = 16;

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