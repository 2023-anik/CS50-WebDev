console.log('hello World');
console.log('hi world');
var a=10;//number
var b=20;
console.log(a+b);
var first='Anik';//string
var second='Sen';
console.log(first+' '+second);
a=1.12;
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

//to see the variable's data type
console.log(typeof(anything));
console.log(typeof(something));
console.log(typeof(a));
console.log(typeof(b));

var magic=10+10+10+20+' this is magic '+10;
console.log(magic);

console.log(++b);
console.log(--b);
// console.log(b--);


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