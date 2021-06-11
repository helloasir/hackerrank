'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.trim().split('\n').map(string => {
//         return string.trim();
//     });
    
//     main();    
// });

// function readLine() {
//     return inputString[currentLine++];
// }
/*
 * Create the function factorial here
 */

// function factorial(n) {

//     if (n == 0 | n == 1) {
//         return 1

//     }else

//     {
//         return n * factorial(n-1);
//     }
    
// };


// function fact(n) {

//    let answer = 1;

//     if (n == 0 | n == 1) {
//         return answer 
//     } else {
//         for (var i = n; i >= 1 ; i--) {
//             answer = answer * i ;
//             return answer;
//         }
//     }
    
// };


function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
     for (let index = 1; index <= n; index++) {
         answer *= index;
         
     }
      return answer;
    }  
  }

  function factorial1(n){
    let answer1 = 1;
    if (n == 0 || n == 1){
      return answer1;
    }else{
     for (let index = 1; index <= n; index++) {
         answer1 = answer1* index;
         
     }
      return answer1;
    }  
  }
  
  
  console.log(factorial(10));
  console.log(factorial1(10));

console.log(factorial(10));
// console.log(fact(5));