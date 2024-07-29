let newParap=document.createElement("p");
let newDiv=document.createElement("div");
let fullName="Rifat";
// newParap.textContent=`His name is ${fullName}!\nGive me his details`;
newParap.innerHTML="<h4>His name is Rifat!</h4><p>Give me his details</p>";
console.log(newParap.textContent);

//insert in HTML
newDiv.innerHTML="<p>DOM Manipulation is Fun!</p>";

//add a class for newDiv, classList shows the elements as array
//className shows the elements as string
newDiv.classList.add("new-div");
//or
newDiv.className+=" new-new-div";
newParap.classList="new-parap";
newParap.classList+=" old-new-parap";
newParap.className+=" old-new-new-parap";

//remove a class
newParap.classList.remove("old-new-new-parap");
newDiv.classList.remove("new-new-div");

//replace a class name
newParap.classList.replace("old-new-parap", "replace-parap");

//add attribute
//setAttribute is used to set HTML attributes
newDiv.setAttribute("style", "color:black;");
newDiv.setAttribute("alt", "Alternative Text");

//remove attribute
newDiv.removeAttribute("alt");

//add style using js
let body=document.querySelector("body");
body.style.backgroundColor="#aaa775";
newDiv.style.backgroundColor="black";
newDiv.style.textAlign="center";
newDiv.style.fontWeight="bold";
newParap.style.textAlign="center";

//remove or modify a style
newDiv.style.color="white";

//to show the new element on our web page
let box1=document.querySelector("#box1");
box1.insertAdjacentElement("afterbegin", newDiv);
box1.insertAdjacentElement("beforeend", newParap);
let box2=document.querySelector("#box2");
box2.insertAdjacentElement("beforebegin", newDiv);
box2.insertAdjacentElement("afterend", newParap);

//Element movement form one place to another place
box1.appendChild(box2);//box2 is made a child of box1
// box2.appendChild(box1);


//place box2 over the box1
// let box1h4=document.querySelector("#box1>h4");//h4 is a child of box1
// box1.insertBefore(box2, box1h4);
//or simply
box1.prepend(box2);

//remove elements

//element er ager element remove kora
newParap.previousSibling.remove();

//parent element theke child element remove kora
box1.childNodes[1].remove();//chilNodes[1]=<div id="box2" class="box" data-atr="box2">
// box1.childNodes[1].remove();

//parent er child selec kore remove kora
let box1h4=document.querySelector("#box1>h4");
box1.removeChild(box1h4);

//element sorasori select kore remove kora
let removeBox3=document.querySelector("#box3");
removeBox3.remove();