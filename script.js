let canvas = document.getElementById("canvas");


const pixel = [];
const row = [];


for(let i = 0; i < 16; i++) {
   row[i] = document.createElement('div');
   row[i].classList.add(`row_${i}`);
   row[i].style.display = "flex";
   row[i].style.width = "100%";
   for(let j = 0; j < 16; j++) {
       pixel[j] = document.createElement('div');
       pixel[j].classList.add(`row_${i}_pixel${j}`)
       pixel[j].style.border = "solid 1px";
       pixel[j].textContent = `${(i + 1) * (j + 1)}`;
       pixel[j].style.flex = "1";
       row[i].appendChild(pixel[j]);
   }
   canvas.appendChild(row[i]);
}