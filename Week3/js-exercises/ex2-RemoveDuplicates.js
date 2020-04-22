/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */

// WRITE YOUR FUNCTION HERE
function removeDuplicates(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

const letters = ['a', 'b', 'b', 'c', 'd', 'a', 'e', 'f', 'f', 'c', 'b'];
console.log(removeDuplicates(letters));

// if (letters === ['a', 'b', 'c', 'd', 'e', 'f']) {
//   console.log('Hooray!');
// }
/* I omitted the above check, first of all, because the modification of the original array is no longer a requirement, and secondly, because, even if I aasigned the output of the function into a new array, the check will always return false, unless they point to the same exact array. */
