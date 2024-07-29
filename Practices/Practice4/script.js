let para=document.querySelector("p");
// para.classList.add("new-para");
para.classList+=" new-para";
let button=document.createElement("button");
button.innerText="Add new Style";
button.setAttribute("onclick", "addNewStyle()");
para.after(button);
button.style.backgroundColor="red";
button.style.color="white";
button.style.fontWeight="bold";

// Function to add styles for the new-para class
function addNewStyle() {
    let style = document.createElement("style");
    style.innerHTML = `
        .new-para {
            color: Green;
            background-color: #d0f79c;
            border: 1px solid #0056b3;
            padding: 10px;
            border-radius: 5px;
        }
    `;
    document.head.appendChild(style);
}
