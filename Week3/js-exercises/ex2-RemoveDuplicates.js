/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */

// WRITE YOUR FUNCTION HERE
function removeDuplicates(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
  // Another solution through modifying the original array
  // for (let i = arr.length; i > 0; i--) {
  //   if (arr.indexOf(arr[i]) !== i) {
  //     // console.log(arr[i]);
  //     arr.splice(i, 1);
  //   }
  // }
  // return arr;
}

const letters = ['a', 'b', 'b', 'c', 'd', 'a', 'e', 'f', 'f', 'c', 'b'];
console.log(removeDuplicates(letters));

// if (letters === ['a', 'b', 'c', 'd', 'e', 'f']) {
//   console.log('Hooray!');
// }
// /* I omitted the above check, because the check will always return false, unless they point to the same exact array. */
