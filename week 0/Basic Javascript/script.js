fullname="Anik Sen";
console.log(fullname);
aa=null;
bb=undefined;
console.log(aa);
console.log(bb);
console.log('hello World');
console.log('hi world');


//for defining a variable always use let key word don't use var key cause it is updated, can't be re-declared
var age=10;
var age=20;
var age=30;
console.log(age);//log: 30

let firstName='Anik';
firstName='Ronik';
console.log(firstName);


let a=10;//number
let b=20;
console.log(a+b);
let first='Anik';//string
let second='Sen';
console.log(first+' '+second);
a=1.12;

//const variable can't be re-declared or updated
const lastName='Sen';
// lastName='Matal';//generated a error
console.log(lastName);

//scope
{
    let a=5;
    // let a=15;//this is not possible
    console.log(a);
}
{
    let a=50;
    console.log(a);
}

// b=1.12;
console.log(a+b);
var something='This is a Sentence';//use double("") or single('') your wish
console.log(something);
var isTrue=true;//Boolean
console.log(isTrue);

var anything=null;//null
console.log(anything);

//Primitive Data Type
// 1. number
// 2. string
// 3. Boolean
// 4. null
// 5. BigInt
// 6. Symbol
// 7. Undefined

let bigInteger=BigInt("12345");
console.log(bigInteger);//log: 12345n

//to see the variable's data type
console.log(typeof(anything));
console.log(typeof(something));
console.log(typeof(a));
console.log(typeof(b));

//object
const student={
    fullName: "Anik Sen",
    age: 21,
    cgpa: 3.9,
    isPassed: true
};
console.log(typeof student);
console.log(student);

var magic=10+10+10+20+' this is magic '+10;
console.log(magic);

console.log(++b);
console.log(--b);
// console.log(b--);

//Arithmetic Operators
let c=5;
let d=2;
console.log(c+" + "+d + " = "+ (c+d));
console.log(c+" - "+d + " = "+ (c-d));
console.log(c+" * "+d + " = "+ (c*d));
console.log(c+" / "+d + " = "+ (c/d));
console.log(c+" % "+d + " = "+ (c%d));
console.log(c+" ** "+d + " = "+ (c**d));//5^2=25

//comparison operator
console.log(10==10);//true
console.log(10===10);//true
console.log(10>10);//false
console.log(10<10);//false
console.log(10<=10);//true
console.log(10==100);//false
console.log(10!=20);//true
console.log(10=='10');//true-->here converts a data type into other data type then compares
console.log(10==='10');//false--->not same as double equal

//logical/relational operator
console.log(true && true);//true
console.log(true && false);//false
console.log(false && false);//false
console.log(false && true);//false

console.log(true || true);//true
console.log(true || false);//true
console.log(false || false);//false
console.log(false || true);//true

console.log((10<20)&&(20<30));//true

console.log(!true);//false

console.log(!(10>20));//true

//ternary operator
var x=10;
var y=20;
console.log(x>y?x:y);//20
console.log(x<y?x:y);//10


// consol.log('Wrong!');//console's spelling is incorrect

//Conditional Statement
//1.
if(3<5) console.log('Yeah I will be excecuted!');
else console.log('I should leave now');

// 2.
if(3>5) console.log('Yeah I will be excecuted!');
else console.log('I should leave now');

// 3.
var myName='Anik';
if(myName=='Anik'){
    console.log('You are allowed');
}
else console.log('Not allowed');

// 4.
if(myName=='Sen'){
    console.log('You are allowed');
}
else console.log('Not allowed');

// 5.
var myAge=20;
if(myAge==20)
    console.log('You are adult');
else if(myAge<20)
    console.log('You are child');
else console.log('You are older than 20');

// 6(nested conditional statement)
var num=10;
if(num>1){
    if(num>10)
        console.log('Greater than 10');
    else console.log('Somewhere between 2-10');
}

//Switch Statement
var weekDay='Sunday';
switch(weekDay){
    case 'Saturday':
        console.log('Saturday! Today is closed');
        break;
    case 'Sunday':
        console.log('Sunday! It is normal day');
        break;
    case 'Monday':
        console.log('Monday! It is normal day');
        break;
    default:
        console.log('Not a day');
}

//for loop
for(var i=1; i<=10; ++i)
    console.log('Go '+i+' step');

//while loop
var i=1;
while(1){
    console.log('Go '+i+' step');
    if(i==10) break;
    i++;
}

//do-while loop
i=1;
do{
    console.log('Go '+i+' step');
    i++;
}while(i!=11);

//continue statement
for(i=0; i<10; i++){
    if(i==5){
        console.log(i+' is skipped');
        continue;
    }
    console.log('i is now at: '+i);
}

//for-of loops only using on string and arrray
let str="Anik";
for(let i of str)
    console.log("i = ",i);

//for-in loop only used on array and objects
let studentInfo={
    fullName: "Anik Sen",
    age: 21,
    ocupation: "Learner",
    cgpa: 3.99,
    isMaried: false
};
for(let key in studentInfo)
    console.log("key = ", key, " value = ", studentInfo[key]);

//Templete Literals: `string text ${expression} string tex`
//is called string interpolation
let obj={
    item: "Pen",
    price: 10
};
console.log("The price of the",obj.item,"is",obj.price,"taka");
//using templete literals
console.log(`The price of the ${obj.item} is ${obj.price} taka`);

//String manipulation
let fun="   My Name Is Anik   ";

// fun.toUpperCase();//nothing changed cause original string doen't changed
// console.log(fun);

//1.
let newFun=fun.toUpperCase();
console.log(newFun);
//2.
newFun=fun.toLowerCase();
console.log(newFun);
//3.
newFun=fun.trim();//removes whitespaces, it works for starting and ending whitespaces
console.log(newFun);

fun="My Name Is Anik";
//4.Testing if a string contains a substring
console.log(fun.includes("Anik"));//true
console.log(fun.includes("Sen"));//false

//5.To want to know if a string starts or ends with a particular substring
console.log(fun.startsWith("My"));
console.log(fun.startsWith("Anik"));
console.log(fun.endsWith("Anik"));
console.log(fun.endsWith("My"));

//6.Finding the position of a substring in a string
console.log(fun.indexOf("Anik"));//11
console.log(fun.indexOf("X"));//-1(not found)

//7.replace a substing into another string
fun=fun.replace("Anik", "Ronik");
console.log(fun);