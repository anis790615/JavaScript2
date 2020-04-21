/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = {
  x: 9,
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

/*
The first console.log(outputs 9):
line 11 - a variable is declared and the value of 9 is assigned to it.
line 13 - a variable f1 is created and a function definition is assigned to it.
line 17 - the function is called with variable x  which is present in the global context and contains the value of 9, which is passed as an argument, a local value val is created and gets assigned to the value of the passed parameter 9, its value is incremented and returned. The increment does not affect the x in the global context as the passed arameter is a primitive and thus, immutable. 
Line 18 - Accordingly, console logs the original value of x which is 9.

Similrly, in f2 functions, the same execution goes, with the exception that the passed argument is an object - a reference data type, and thus mutable. Thus the change in the function affects the variable in the global context and changes its value.
So, line 29 logs the incremented value of x in the object y and outputs {x:10}
*/
