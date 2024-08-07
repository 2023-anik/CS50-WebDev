/*
Get User to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not
*/
// **********************
// let number=prompt("Enter a number:");
// console.log((number%5==0)?number+" is a multiple of 5": number+" is not a multiple of 5");
// **********************

/*
Write a code which can give grades to students according to their scores.
80-100, A
70-79, B
60-69, C
50-59, D
0-49, F
*/
// **********************
// let grade=prompt("Enter the grade of a student:");
// if(grade>=80 && grade<=100)
//     console.log("A");
// else if(grade>=70 && grade<80)
//     console.log("B");
// else if(grade>=60 && grade<70)
//     console.log("C");
// else if(grade>=50 && grade<60)
//     console.log("D");
// else
//     console.log("F");
// **********************


/*
sum of 1 to 100
*/
// **********************
// let sum=0;
// for(let i=1; i<=100; ++i)
//     sum+=i;
// console.log("sum = "+sum);
// **********************

/*
Print all even numbers from 0 to 100
*/
// **********************
// for(let i=0; i<=100; i++)
//     if(i%2===0)
//         console.log(i," is a even number");
// **********************


/*
Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
*/
// **********************
// let gameNumber = 25;
// let guessNumber=Number(prompt("Guess the num"));
// while(guessNumber!==gameNumber)
//     guessNumber=Number(prompt("Guess the num again:)"));
// console.log("Congratulation! You guessed the right number:)");
// **********************


/*
Prompt the user to enter their full name. Generate a username for them based on the input Start usirname with @, followed by their full name and ending with the fullname length.
*/
// **********************
// let userName=prompt("Enter username");
// // console.log(`@${userName}${userName.length}`);
// userName="@"+userName+userName.length;
// console.log(userName);
// **********************


/*
For a given array with marks of students -> [85, 97, 44, 37, 76, 60], find the average marks of the entire class
*/
// **********************
// let marks=[85, 97, 44, 37, 76, 60];
// let sum=0;
// for(let mark of marks)
//     sum+=mark;
// console.log(`Average marks of the entire class is ${sum/marks.length}`);
// **********************


/*
For a given array with preces of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
*/
// **********************
//using map
// let itemPrices=[250, 645, 300, 900, 50];
// let offPrices=itemPrices.map(function (price){
//     return price-(price*0.1);
// });
// itemPrices=offPrices;
// console.log(itemPrices);
// **********************

// **********************
//normally
// let itemPrices=[250, 645, 300, 900, 50];
// for(let i=0; i<itemPrices.length; ++i)
//     itemPrices[i]-=itemPrices[i]*0.1;
// console.log(itemPrices);
// **********************

/*
Create an array to sotre companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netfix"
a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
c. Add Amazon at the end
*/
//******************
// let companies=["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netfix"];
// //Remove the first company from the array
// // companies.shift();
// //or,
// companies.splice(0,1);

// //Remove Uber & Add Ola in its place
// let uberIdx=companies.indexOf("Uber");
// if(uberIdx!==-1)
//     companies.splice(uberIdx, 1, "Ola");

// // Add Amazon at the end
// companies.push("Amazon"); 
// console.log(companies);
// **********************


/*
Create a function using the "function" keyword that takes a String as an argument Y returns the number of vowels in the string.
*/
// **********************
// function numOfVow(words){
//     let cnt=0;
//     for(let wd of words)
//         if(wd==='a' || wd==='e' || wd==='i' || wd==='o' || wd==='u')
//             cnt++;
//     return cnt;
// }
// **********************


/*For a given array of numbers, print the square of each value using the forEach loop.
*/
// **********************
// let arr=[1, 2, 3, 4, 5];
// arr.forEach((val)=>{
//     console.log(val*val);//val**2
// });
// **********************
//or
// **********************
// let clacSquare=(val)=>{
//     console.log(val**2);
// };
// arr.forEach(clacSquare);
// **********************

/*We are given array of marks of students. Filter out of the marks of students that scored 90+ marks.
*/
// **********************
// let marks=[87, 93, 64, 99, 86];
// let filteredMarks=marks.filter((mark)=>{
//     return mark>=90;
// });
// **********************


/*Take a number n as input from user. Create an array of numbers from 1 to n.
*/
// **********************
// let n=Number(prompt("Enter a number"));
// let arr=[];
// for(let i=1; i<=n; i++)
//     arr.push(i);
// console.log(arr);

// //Use the reduce method to calculate sum of all numbers in the array
// let sum=arr.reduce((prev, crnt)=>{
//     return prev+crnt;
// })
// console.log(`sum of all elements is ${sum}`);

// //Use the reduce method to calculate product of all numbers in the array
// let prduct=arr.reduce((prev, crnt)=>{
//     return prev*crnt;
// })
// console.log(`product of all elements is ${prduct}`);
// **********************

