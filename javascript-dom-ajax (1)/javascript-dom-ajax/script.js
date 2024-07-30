// Write your code here
const loadPost=document.querySelector("#btn-click-me");
const box=document.querySelector("#box");
const uList=document.createElement("ul");

loadPost.addEventListener("click", function(){
    //AJAX(Asynchronous JavaScript And XML)
    //1. can be made a Instance Object
    let request=new XMLHttpRequest();
    // console.log(request.readyState);
    //2. can be oppened a Request
    request.open("GET", "https:/jsonplaceholder.typicode.com/posts", true);
    // console.log(request.readyState);
    //3. can be sent a request
    request.send();
    request.onreadystatechange=function handleRequest(){
        // console.log(typeof request.responseText);//to show the data type
        // console.log(request.readyState);
        if(request.readyState===4 && request.status===200){
            console.log(JSON.parse(request.responseText));//to convert the JNOS string into Object by using JSON.parse()-->just shows on console not the webpage
            let data=JSON.parse(request.responseText);//store all datas in data as an array
            let i=0;
            data.forEach(function(singleData){
                let list=document.createElement("li");
                list.textContent=`${i}. ${singleData.title}`;//we can write id/body instead of title
                uList.appendChild(list);
                i++;
            });
            box.append(uList);
        }
    }
});