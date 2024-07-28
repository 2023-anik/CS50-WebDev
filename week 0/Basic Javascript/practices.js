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

let grade=prompt("Enter the grade of a student:");
if(grade>=80 && grade<=100)
    console.log("A");
else if(grade>=70 && grade<80)
    console.log("B");
else if(grade>=60 && grade<70)
    console.log("C");
else if(grade>=50 && grade<60)
    console.log("D");
else
    console.log("F");