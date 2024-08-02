let myDisplayer = (some) => {
    document.querySelector("#demo").innerHTML = some;
}

// let myPromise = new Promise(function(myResolve, myReject) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "mycar.html");
//     req.onload = function() {
//         if (req.status === 200) {
//             myResolve(req.response);
//         } else {
//             myReject("File not Found");
//         }
//     };
//     req.send();
// });

// const promiseHandle = async () => {
//     try {
//         const data = await myPromise;
//         myDisplayer(data);
//     } catch (error) {
//         myDisplayer(error);
//     }
// }

async function getFile() {
    let myPromise = new Promise(function(resolve) {
      let req = new XMLHttpRequest();
      req.open('GET', "mycar.html");
      req.onload = function() {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          resolve("File not Found!");
        }
      };
      req.send();
    });
    // document.getElementById("demo").innerHTML = await myPromise;
    myDisplayer(await myPromise);
  }
  
  getFile();