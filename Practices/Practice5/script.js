const btn=document.createElement("button");
btn.textContent="Toggle Button";
document.body.appendChild(btn);

const para=document.createElement("p");
para.textContent="This my Paragraph";
btn.after(para);
// btn.addEventListener("click", function(){
//     document.body.classList.toggle("dark-mode");
// });
// classList: This property returns the class list of the element as a DOMTokenList object, which provides methods to add, remove, and toggle classes.

//or we can apply simply logical operation
let crntMode="light";
let body=document.querySelector("body");
body.classList.add("light");
// body.classList+=" light";
btn.addEventListener("click", ()=>{
    if(crntMode==="light"){
        // body.style.backgroundColor="black";
        console.log("dark");
        crntMode="dark";
        body.classList.replace("light", "dark")
    }else{
        // body.style.backgroundColor="white";
        console.log("light");
        crntMode="light";
        body.classList.replace("dark", "light")
    }
});