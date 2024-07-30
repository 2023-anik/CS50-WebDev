//to show a alert
// alert("Hello World!");

//this function called on html; line number 31
function showAlert(){
    alert("Alert by function Call");
}

//box1's button(using "common dot event")->It is not useable more for its*****
// 1.Overwriting Event Handlers,
// 2.we can't easily add multiple event listeners  for the same event type(Lack of Flexibility)
// 3.Separation of Concerns
// 4.Event Removal
// 5.Compatibility Issues
// ***************
const clickMeBtn=document.querySelector("#btn-click-me");
clickMeBtn.onclick=function(event){
    event.stopPropagation();//for doesn't "Bubble Up"
    // event.stopImmediatePropagation();
    console.log("Button Clicked");
}
clickMeBtn.onmouseover=function(){
    clickMeBtn.style.backgroundColor="green";
    clickMeBtn.style.color="white";
    console.log("Mouse Over");
}
// clickMeBtn.onmouseout=function(){
//     clickMeBtn.style.backgroundColor="white";
//     clickMeBtn.style.color="black";
//     console.log("Mouse Out");
// }
// ***************

//box1's button(using Event Listener)
const box1=document.querySelector("#box1");

//Existing click event
box1.addEventListener("click", function(){
    console.log("Clicked on Box 1");
});

// Adding a mouseover event
// box1.addEventListener("mouseover", function() {
//     box1.style.backgroundColor = "blue";
//     console.log("Mouse Over Box 1");
// });

// Adding a mouseout event
// box1.addEventListener("mouseout", function() {
//     box1.style.backgroundColor = "initial";
//     console.log("Mouse Out of Box 1");
// });

// Adding a double-click event
box1.addEventListener("dblclick", function() {
    console.log("Double Clicked on Box 1");
});

clickMeBtn.addEventListener("click", function(){
    
    console.log("Another Click Event");
});

//for ID:link
const link=document.querySelector("#link");
link.addEventListener("click", function(event){
    event.preventDefault();//prevent the default behavior
});

//for box4
let box4=document.querySelector("#box4");
box4.addEventListener("click", function(event){
    if(event.target.className==="maja")
            console.log("Clicked on a List Item");
});

//for input elements
const inputs=document.querySelectorAll("input");
const submintBtn=document.querySelector("button[type=submit]");

//if any change is happened in the input fild, we want to show it
// inputs[0].addEventListener("change", function(){
//     console.log("Change Event on Input");
// });

//to find value of the input field
inputs[0].addEventListener("change", function(event){
    console.log(event.target.value);
});
inputs[1].addEventListener("change", function(event){
    console.log(event.target.value);
});

submintBtn.addEventListener("click", function(event){
    event.preventDefault();//prevent default behavior
    if(inputs[0].value==='' || inputs[1].value==='')
        alert("Input Field can't be Empty;)");
    else{
        console.log(`Your name: ${inputs[0].value}\nYour mail: ${inputs[1].value}`);
    }
});


//Keyboard Events
document.addEventListener("keydown", function(event){
    console.log("Key Down Event");
    console.log(`Pressed Key: ${event.key}`);
});
document.addEventListener("keypress", function(){
    console.log("Key press Event");
});
document.addEventListener("keyup", function(event){
    console.log("Key up Event");
    console.dir(event);
});

//Browser Event
//Event after fully loaded
window.addEventListener("load", function(){
    console.log("your page fully loaded!");
    this.alert("Your Page Fully Loaded!");
})
//Event after only loaded Markup(HTML)
document.addEventListener("DOMContentLoaded", function(){
    console.log("Your Markup is Ready");
})

//added Event on images
let img1=document.querySelector("img[alt=valid-img]");
let img2=document.querySelector("img[alt=invalid-img]");

if (img1) {
    // img1.addEventListener("load", function() {
    //     console.log("Image 1 has successfully loaded!");
    // });

    // Check if the image is already loaded (for cached images)
    if (img1.complete) {
        console.log("Image 1 has successfully loaded!");
    }
} else {
    console.error("Image with alt='valid-img' not found.");
}

img2.addEventListener("error", function(){
    console.log("Image 2 can't be loaded!");
});