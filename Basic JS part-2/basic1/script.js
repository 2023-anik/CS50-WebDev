let div=document.createElement("div");
div.setAttribute("id", "demo");
document.querySelector("body").prepend(div);
document.querySelector("#demo").innerText="Date : "+Date();