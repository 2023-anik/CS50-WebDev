//array
/*
var arrayName = new Array('Anik', 'Ronik', 'Rahim', 'Karim');
console.log(arrayName);
*/

//same only decleration different
var arrayName = ['Anik', 'Ronik', 'Rahim', 'Karim'];
console.log(arrayName);
console.log(arrayName.length);
console.log(arrayName['length']);//don't use anymore!
var arrayName1 = ['Bal', 'Heda', 'Conu', 'Nunu'];
// arrayName+=arrayName1;
// for(i=0; i<arrayName.length; i++)
//     console.log(arrayName[i]);

//concat()
var mergedArray=arrayName.concat(arrayName1);
for(i=0; i<mergedArray.length; i++)
    console.log(mergedArray[i]);

//push()
arrayName.push('Chet');
console.log(arrayName);

//pop()
arrayName.pop();
console.log(arrayName);

//shift():Removes the first element from an array and returns that element
var fruits = ['Apple', 'Banana', 'Cherry'];
var first = fruits.shift();
console.log(first); // Output: 'Apple'
console.log(fruits); // Output: ['Banana', 'Cherry']nums.forEach(function(num){
    //     console.log(num);
    // });

//unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array
fruits.unshift('Apple', 'Black Berry');
console.log(fruits);

//slice(): Returns a shallow copy of a portion of an array into a new array object
console.log(fruits.slice(2, 4));
//2-->from which index to begin
//4-->how many element first to given number(4)

//splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements
var eats=['mangsho', 'Chagol', 'Kacci', 'Dail'];
// eats.splice(0, 3);//--->to delete any items by using index
//0 means you wants to delete from which index, in a sentence begining index to delete
//3 means I want to delete 3 items
console.log(eats);
eats.splice(0,0, 'Blueberry');
console.log(eats);
eats.splice(0,1, 'Redberry');
console.log(eats);
eats.splice(0,2, 'Ketberry');
//0-->konta change korbo
//2-->kon index theke suru korbo
console.log(eats);
eats.splice(1,2, 'Greenberry');
console.log(eats);

//indexOf()
var nesha=['Mod', 'Gaja', 'Afim', 'Baba'];
console.log(nesha.indexOf('Gaja'));
console.log(nesha.indexOf('Biri'));//not find, returns -1
console.log(nesha.indexOf('Baba'));

//includes(): it returns true or false
console.log(nesha.includes('Gaja'));
console.log(nesha.includes('Biri'));

//join(): join all elements of an array into a string
console.log(nesha.join(', '));

//reverse()
nesha.reverse();
console.log(nesha);

//sort()
nesha.sort();
console.log(nesha);

//map():Creates a new array with the results of calling a provided funciton on every element in the calling array
var numbers = [1, 2, 3, 4];
var doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled); // Output: [2, 4, 6]

//filter(): Creates a new array with all elements that pass the test implemented by the provided function
 var nums=[1, 2, 3, 4, 5, 6, 7];
 //1. return all even numbers
 var even=nums.filter(function(num){
    return num%2===0;
 });
 console.log(even);//2, 4, 6

 //2. return all odd numbers
 var odds=nums.filter(function(num){
    return num%2!==0;
 });
 console.log(odds);//1, 3, 5, 7

//reduce(): Executes a reducer funciton on each element of the array, resulting in a single output value.
var sum=nums.reduce(function(total, num){
    return total+num;
}, 0);
console.log(sum);//28

//forEach(): Executes a provided function once for each array element
nesha.forEach(function(neSha){
    console.log(neSha);
});

// find(): Returns the value of the first element in the array that satisfies the provided testing function.
var firstOdd = nums.find(function(num) {
    return num % 2 !== 0;
});
console.log(firstOdd); // Output: 1 (assuming nums contains [1, 2, 3, 4, 5, 6, 7])
// nums.forEach(function(num){
//     console.log(num);
// });

//includes(): Determines whether an array includes a certain value among its entries, returning true or false
var listBal=['Bal', 'Chal', 'Mal', 'Khal'];
var hasBal=listBal.includes('Chal');
console.log(hasBal);//true
var hasFal=listBal.includes('Fal');
console.log(hasFal);//false