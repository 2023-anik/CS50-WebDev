//select by id
let box1=document.querySelector("#box1");
//or
let box2=document.getElementById("box2");//frequently used querySelector
let box3=document.querySelector("#box3");
let box4=document.querySelector("#box4");
box1.style.color="white";
box1.style.backgroundColor="red";
// box1.style.width="200px";
// box1.style.height="300px";
box1.style.lineHeight = "2"; // Adjust line height
document.querySelector("#box1").innerHTML="<big><b>Apple</b></big><br>Ami khai na";//box1-->Apple
box2.style.color="white";
box2.style.backgroundColor="Green";
box3.style.color="white";
box3.style.backgroundColor="blue";
box4.style.color="black";
box4.style.backgroundColor="yellow";
// document.querySelector("#box4").innerHTML="Banana";//box4-->Banana


//select by class
// let box11=document.querySelector(".box");//it selects the 1st box
// let boxes=document.querySelectorAll(".box");//it selects all boxes
// boxes.forEach(box=>{
//     box.style.color="white";
//     box.style.backgroundColor="black";
// });

//or
boxes=document.getElementsByClassName("box");//frequently used querySelector insted of getElementsByClassName
//it gives a nodeList
//nodeList into array
let boxList=document.querySelectorAll(".box");
let boxArray=Array.prototype.slice.call(boxList);

// //just fun
for(let i=0; i<boxArray.length; i++){
    boxArray[i].textContent=`Box ${i+1} - Updated`;
    boxArray[i].style.width = "150px"; // Change the width
    boxArray[i].style.height = "150px"; // Change the height
    boxArray[i].style.color="blue";
    boxArray[i].style.backgroundColor="yellow";
    boxArray[i].style.fontWeight = "bold"; // Make the text bold
}