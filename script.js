const canvas = document.getElementById("canvas");
let pixelDimension = document.getElementById("pixelDimension");
let isMouseDown = false;
let pixelCount = 16;
let isRainbowMode = false;

//! !Update THIS! !\\
let backgroundColor = 'white';
let chosenColor = 'black';
let penColor = chosenColor;

pixelDimension.textContent = `${pixelCount} X ${pixelCount}`;

const pickColor = document.getElementById("pickColor");
pickColor.addEventListener("change", (event) => {
   chosenColor = pickColor.value;
   penToChosenColor();
})

//! Update ISRAINBOWMODE !\\
function updateRainbowMode() {
   isRainbowMode = !isRainbowMode;
}

//! CHANGE PEN COLOR TO COLOR CHOSEN !\\
function penToChosenColor() {
   penColor = chosenColor;
}

//! CHANGE PEN COLOR TO BACKGROUND COLOR !\\
function penToBackgroundColor() {
   penColor = backgroundColor;
}

//! ERASER function !\\ 
const eraserButton = document.getElementById("eraser");
eraserButton.addEventListener("click", (event) => {
   isRainbowMode = false;
   penColor = backgroundColor;
   handleMouseMove;
})

//! Clear function !\\
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", (event) => {
   isRainbowMode = false;
   penToChosenColor();
   deleteAllChildElements(canvas);
   addPixels(canvas);
})

//! SLIDER function !\\
slider.addEventListener("mousemove", (event) => pixelDimension.textContent = `${slider.value} X ${slider.value}`);
slider.addEventListener("mouseup", (event) => {
   isRainbowMode = false;
   pixelCount = slider.value;
   penToChosenColor();
   deleteAllChildElements(canvas);
   addPixels(canvas);
   pixelDimension.textContent = `${pixelCount} X ${pixelCount}`
})

//! DRAWING function !\\
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
         if (isRainbowMode === true) {
            penColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
         }
         targetDiv.style.backgroundColor = penColor;
      }
   }
}

//! CLEAR CANVAS function !\\
function deleteAllChildElements(parentElement) {
   while (parentElement.firstChild) {
     parentElement.removeChild(parentElement.firstChild);
   }
}

//! MAKE A NEW CANVAS function !\\
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

//! RAINBOW MODE function !\\
const rainbowButton = document.getElementById("rainbowMode");
rainbowButton.addEventListener("click", (event) => isRainbowMode = true);

addPixels(canvas);
canvas.addEventListener("mousedown", handleMouseDown);
canvas.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mouseup", handleMouseUp);