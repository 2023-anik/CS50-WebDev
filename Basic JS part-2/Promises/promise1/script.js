function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.onload = function() {
      if (req.status == 200) {
        myCallback(this.responseText);
      } else {
        myCallback("Error: " + req.status);
      }
    }
    req.open('GET', "mycar.html");
    req.send();
  }
  
  getFile(myDisplayer); 