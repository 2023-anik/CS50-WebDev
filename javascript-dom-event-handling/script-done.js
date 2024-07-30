function showAlert() {
   alert('Alert by Function Call');
}

const clickMeBtn = document.getElementById('btn-click-me');

clickMeBtn.onclick = function(event) {
   event.stopPropagation();
	 event.stopImmediatePropagation();
   console.log('Button Clicked');
}

clickMeBtn.onmouseover = function() {
   console.log('Mouse Over');
}

const box1 = document.getElementById('box1');

box1.addEventListener('click', function() {
   console.log('Clicked on Box 1');
})

clickMeBtn.addEventListener('click', function() {
   console.log('Another Click Event');
});

const link = document.getElementById('link');

link.addEventListener('click', function(event) {
   event.preventDefault();
});

var box4 = document.getElementById('box4');

box4.addEventListener('click', function(event) {
   if(event.target.tagName === 'LI') {
		 console.log('Clicked on a List Item');
	 }
});

const inputs = document.querySelectorAll('input');
const submitBtn = document.querySelector('button[type=submit]');

inputs[0].addEventListener('change', function(event) {
   console.log(event.target.value);
});

submitBtn.addEventListener('click', function(event) {
   event.preventDefault();
   if(inputs[0].value === '' || inputs[1].value === '') {
      alert('Input Field cannot be Empty!');
   } else {
      var input0Data = inputs[0].value;
      var input1Data = inputs[1].value;
      console.log('Your Name:', input0Data, 'And Your Email:', input1Data);
   }
});

document.addEventListener('keydown', function(event) {
   console.log('Key Down Event');
   console.log('Pressed Key: ' + event.key);
	 console.dir(event);
});

document.addEventListener('keypress', function() {
   console.log('Key Press Event');
});

document.addEventListener('keyup', function() {
   console.log('Key Up Event');
});

clickMeBtn.addEventListener('mouseover', function() {
   console.log('On Mouse Over using addEventListener');
});

clickMeBtn.addEventListener('mouseout', function() {
   console.log('On Mouse Out');
});

window.addEventListener('load', function() {
    console.log('Your Page Fully Loaded!');
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Your Markup is Ready!');
});

var img1 = document.querySelector('img[alt=valid-img]');
var img2 = document.querySelector('img[alt=invalid-img]');

img1.addEventListener('load', function() {
    console.log('Image 1 Has Successfully Loaded!');
});

img2.addEventListener('error', function(event) {
    console.log('Image Cannot be loaded!');
});
