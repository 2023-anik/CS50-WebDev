/*
Get User to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not
*/

// let number=prompt("Enter a number:");
// console.log((number%5==0)?number+" is a multiple of 5": number+" is not a multiple of 5");

/*
Write a code which can give grades to students according to their scores.
80-100, A
70-79, B
60-69, C
50-59, D
0-49, F
*/

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


/*
sum of 1 to 100
*/
// let sum=0;
// for(let i=1; i<=100; ++i)
//     sum+=i;
// console.log("sum = "+sum);

/*
Print all even numbers from 0 to 100
*/
// for(let i=0; i<=100; i++)
//     if(i%2===0)
//         console.log(i," is a even number");


/*
Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
*/
// let gameNumber = 25;
// let guessNumber=Number(prompt("Guess the num"));
// while(guessNumber!==gameNumber)
//     guessNumber=Number(prompt("Guess the num again:)"));
// console.log("Congratulation! You guessed the right number:)");


/*
Prompt the user to enter their full name. Generate a username for them based on the input Start usirname with @, followed by their full name and ending with the fullname length.
*/
// let userName=prompt("Enter username");
// // console.log(`@${userName}${userName.length}`);
// userName="@"+userName+userName.length;
// console.log(userName);


/*
For a given array with marks of students -> [85, 97, 44, 37, 76, 60], find the average marks of the entire class
*/
let marks=[85, 97, 44, 37, 76, 60];
let sum=0;
for(let mark of marks)
    sum+=mark;
console.log(`Average marks of the entire class is ${sum/6}`);