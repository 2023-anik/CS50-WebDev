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

//return from one funciton to another function
function welcomeMsg(name){
    console.log('Welcome Mr. '+name);
    return function options(menu){
        console.log('Do you like '+menu+' Mr. '+name);
    }
}
welcomeMsg('Anik Sen')('Coffee');

// Objects are passed by reference, primitives are passed by value
//Objects are:
//-->arrays
//-->function
//-->Maps and Sets

/*
primitive data types
1. number
2. string
3. null
4. symbol
5. undefined
*/

function aFunc(a){
    console.log('Before changing the property: '+a.one);
    a.one='two';
    console.log('After changing the property: '+a.one);
}

var a={
    one: 'one'
}
console.log(a);
aFunc(a);
console.log(a);


//Closure: 
//Demo 1
function closuresDemo(){
    var x=10;
    function anotherFunc(){
        var y=20;
        console.log('Sum: '+(x+y));
    }return anotherFunc;
}
const returnedFunc=closuresDemo();
returnedFunc();

//Demo2
function outerFunction() {
    let outerVariable = 'I am outside!';

    function innerFunction() {
        console.log(outerVariable); // Accesses outerVariable from outerFunction
    }
    return innerFunction;
}
const closureFunction = outerFunction();
closureFunction(); // Logs: 'I am outside!'

//Demo3
function aParentFunc(a){
    return function(b){
        console.log('Sum: '+(a+b));
    }
}
aParentFunc(5)(5);

//Demo4
function aParentFunc2(a){
    return function(b){
        // console.log('Sum: '+(a+b));
        return 'Sum: '+(a+b);
    }
}
const aParentVar2=aParentFunc2(6);
const total2=aParentVar2(3);
console.log(total2);

//IIFE(Immediately Invoked Function Expression)
/*
//Syntax
(function() {
    // Code to be executed immediately
})();
*/
//Demo1:
(function aDemoFunc(){
    console.log('Hello World');
})();//log: Hello World

//Demo2:
(function(param) {
    console.log('Parameter: ' + param);
})('Hello');

//Demo3:
var suum=(function(){
    return 10+20;
})();
console.log(suum);

alert('Hi, I\'m here:)');
alert('Hello!');