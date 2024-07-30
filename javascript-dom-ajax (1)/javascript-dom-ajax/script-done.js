var loadPosts = document.getElementById('btn-click-me');
var box = document.getElementById('box');
var uList = document.createElement('ul');

loadPosts.addEventListener('click', function() {
   var request = new XMLHttpRequest();
   request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
   request.send();
   request.onreadystatechange = function handleRequest(){
      if(request.readyState === 4 && request.status === 200) {
         var data = JSON.parse(request.responseText);
         data.forEach(function(singleData) {
           var list = document.createElement('li');
           list.textContent = singleData.title;
           uList.appendChild(list)
         })
         box.insertAdjacentElement('beforeend', uList);
      }
   }
});
