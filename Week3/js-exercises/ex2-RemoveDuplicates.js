/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */

// WRITE YOUR FUNCTION HERE
function removeDuplicates(arr) {
  // arr = arr.filter((value, index) => arr.indexOf(value) === index);
  // return arr;
  arr.forEach((value, index) => {
    // console.log(arr[index], value, arr.indexOf(value));

    if (arr.indexOf(value) !== index) {
      console.log(value);
      // removeElement(arr, index);
      arr.splice(index, 1);
    }
  });
}

const letters = ['a', 'b', 'b', 'c', 'd', 'a', 'e', 'f', 'f', 'c', 'b'];
// letters = letters.filter((value, index) => letters.indexOf(value) === index);

console.log(removeDuplicates(letters));
console.log(letters);
if (letters === ['a', 'b', 'c', 'd', 'e', 'f']) {
  console.log('Hooray!');
}
// function removeElement(arr, index) {
//   arr.splice(index, 1);
// }
