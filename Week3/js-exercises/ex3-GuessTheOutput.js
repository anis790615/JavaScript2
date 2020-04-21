/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();
// The output will be an alert of the number 12. When the program runs the following happens:
// line13 - a variable a is declared and the number 7 is assigned to it.
//   line 14 - 19 - a variable x is declared and the return of the self-executing function is assigned to it, which is the definition of the enclosed function along with its closure(i.e.the variables in its scope, which in this case the variable a with the value of 12), so x = function () {
//     alert(a);
// }
// Line 21  - the function enclosed in "x" is called, when looking for the variable "a" to alert it looks it up in its closure, which contains the variable with the value of 12, so it alerts it.
