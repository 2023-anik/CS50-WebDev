// Using object literal notation, is generally easier to use and more concise compared to the new Object() syntax
var person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Developer"
};
console.log(person1);

// Using the new Object() syntax
var person2 = new Object();
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 30;
person2.occupation = "Developer";
console.log(person2);

var person3={
    firstName: 'Anik',
    lastName: 'Sen',
    age: 21,
    occupation: 'Student'
};
console.log(person3);

/*
how to access an object
1.Dot Notation
2.Bracket Notation
*/
//Using Dot Notation
console.log(person1.firstName);
console.log(person1.occupation);

//Using Bracket Notation    
console.log(person3['firstName']);
console.log(person3['occupation']);
console.log('Anik\'s age: '+person3['age']);

//added new item of an object
person3.zipCode=4400;
console.log(person3);

//added a function as a item of an object
person3.welComeMsg = function(){
    console.log('Hello There');
};
console.log(person3);
person3.welComeMsg();


var person4 = {
    firstName: 'Ganjutty',
    lastName: 'Babaty',
    age: 10000,
    occupation: 'Matal',
    welComeMsg: function(){
        console.log('Hello Ganjutty');
    }
};
person4.welComeMsg();

//useing array into an object
var objArr={
    normal: 'Normal Item',
    name: ['Rahim', 'Karim', 'Rafiq', 'Shafiq'],
    age: [10, 20, 30, 40]
};
console.log(objArr);
//access an element using index
console.log(objArr.name[2]);
console.log(objArr.age[2]);

//useing object into an array
var arrObj = [
    'Anik',
    {
        name: 'Ronik',
        age: 17,
        job: 'Student'
    },
    'Karim'
];
console.log(arrObj);
//access an element using index
console.log(arrObj[1].name);
console.log(arrObj[1].age);