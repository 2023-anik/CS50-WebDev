let boxes = document.querySelectorAll(".box");
// let boxesArray = Array.from(boxes);
// let boxesArray=Array.prototype.slice.call(boxes);
let boxesArray=[...boxes];
for (let i = 0; i < boxesArray.length; i++) {
    boxesArray[i].textContent = `Box ${i + 1} - Updated`;
}