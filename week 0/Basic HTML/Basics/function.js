//Declaration of a function
/*
1.
function name_of_function(argument if stay){
    //statements
}

2.
var fncName = function(argument if stay){
    //statements
}// this is called function expresion
*/

//first function to addition two number
var add=function(a, b){
    return a+b;
}
console.log(add(10, 20));

//funciton to find modulus of two numbers
function mod(a, b){
    return a%b;
}
console.log(mod(5, 3));

//function call
function fun(){
    console.log('Hello I am from the function');
}
fun();

//use a fucntion as a argument for another function
function callMyName(name, callback){
    //here, callback is a function
    var myAge=10;
    callback(myAge);//hello(10)
    console.log('Is it interesting? Yes, it is Mr. ' + name);
}
function hello(age){
    console.log('I\'m passed through argument and my age is: '+age);
}
callMyName('Anik', hello);