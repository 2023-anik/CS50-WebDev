let myDisplayer = (some) => {
    document.querySelector("#demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
        if (req.status === 200) {
            myResolve(req.response);
        } else {
            myReject("File not Found");
        }
    };
    req.send();
});

const promiseHandle = async () => {
    try {
        const data = await myPromise;
        myDisplayer(data);
    } catch (error) {
        myDisplayer(error);
    }
}

promiseHandle();