// Q1.Find Grades 
// Your school has the following grading system based upon the marks (M) obtained by a student: 
//  If M≤10, the grade will be E. 
//  If 11≥M≤20, the grade will be D. 
//  If 21≥M≤30, the grade will be C. 
//  If 31≥M≤40, the grade will be B. 
//  If 41≥M≤50, the grade will be A. 
// Your friend will enter his marks out of 5050, and your task is to print his grades using a switch statement. 
// Note: You have to complete findGrades function. No need to take any input.

// function findGrades(M){
//     switch (true){
// case(M<=10):
// console.log(" E");
// break;
// case(11>=M && M<=20): console.log("D");
// break;
// case(21>=M &&  M<=30):console.log("C");
// break;
// case(31>=M && M<=40): console.log("B");
// break;
// case(41>=M && M<=50): console.log("A");
// break; 
// default:console.log("invalid marks") ;
// }

// }
// const M=1;
// findGrades(M);




// Q2. Get Value 
// You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the 
// table corresponding to an input character and return it. 
// | P or p - PrepBytes | 
// | Z or z - Zenith |  
// | E or e - Expert Coder |  
// | D or d - Data Structure | 
// Note: You have to complete getValue function. No need to take any input.


// function getValue(A){

//     switch(A.toLowerCase()){
// case("p"): return "prepBytes";
// case("z"): return "zenith";
// case("e"):return "Expert Coder";
// case ("d"):return "data structure";
// default: return"invalid input"
//  }
// }
// const A= E;
// const B= getValue(A);
// console.log(B);


// Q3. Find the maximum out of three numbers. 

// Take three numbers and print the largest number among them if all of three are same print −1−1. 
// Note: You have to complete Max_out_of_three. No need to take any input.



// let A=2;
// let B=5;
// let C= 4;

// function Max_out_of_three(A,B,C){
// if(A===B &&A==C){

//     console.log("-1-1")
// }
// else if(A>=B && A>=C){


//     console.log(A)
// }

// else if(B>=C){
// console.log(B)
// }

// else {

//     console.log(C)
// }
// }

// Max_out_of_three(A,B,C);



// Q4. Second Smallest

// You are given 33 distinct integers X, Y and Z and your task is to find and return the second smallest integer among the three provided 
// integers. 
// Note: You have to complete findSndSmallest function. No need to take any input.


// function findSndSmallest(A,B,C){

//     let nums=[A,B,C];
//     nums.sort((a,b)=>a - b)
//     return nums[1];
// }

// let A= 2;
// let B= 40;
// let C= 5;

// const D=findSndSmallest(A,B,C);
// console.log(D)



// Q5. Check whether the triangle is Acute or Obtuse 
// Write a program takes takes three angles and checks whether the triangle is acute or obtuse. 
// Note: You have to complete Triangle_Check. No need to take any input

function Triangle_Check(A, B, C) {
    if (A + B + C === 180) {
        if (A < 90 && B < 90 && C < 90) {
            return "Acute";
        } else {
            return "Obtuse"; 
        }
    } else {
        return "Invalid triangle"; 
    }
}
let A = 60;
let B = 100;
let C = 20;
console.log(Triangle_Check(A, B, C));