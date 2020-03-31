/**
 
 ** Exercise 5: The cat walk **
 Starting with an HTML, which has a single img tag of an animated GIF of a cat walking.

 1. Create a variable to store a reference to the img.
 2. Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
 3. Create a  function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
 4. Call that function every 50 milliseconds.Your cat should now be moving across the screen from left to right.Hurrah!
 5. When the cat reaches the right - hand of the screen, restart them at the left hand side("0px").So they should keep walking from left to right across the screen, forever and ever.
 6. When the cat reaches the middle of the screen, replace the img with an image of a cat dancing(use this URL: https: //tenor.com/StFI.gif), keep it dancing for 5 seconds, and then replace the img with the original image and have it continue the walk.
 
*/
// Selecting the cat
const cat = document.querySelector('img');
// Making the initial position -minus the dimension of the cat, so that it walks from behind the screen
let currentPosition = -cat.width;

function catWalk() {
  newPosition = currentPosition + 10;
  cat.style.left = newPosition + 'px';
  // Selecting a point that will be used to determine the position of the cat on the screen
  currentLeftSidePosition = parseInt(cat.style.left);
  // The first condition is for the cat outside the window
  if (currentLeftSidePosition > window.innerWidth) {
    currentPosition = -cat.width;
  } else if (
    //The second condition when the cat is approximately in the middle
    currentLeftSidePosition < window.innerWidth / 2 - cat.width / 2 + 5 &&
    currentLeftSidePosition > window.innerWidth / 2 - cat.width / 2
  ) {
    cat.src = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

    currentPosition = currentLeftSidePosition;

    window.setTimeout(function() {
      cat.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
    }, 5000);
  } else {
    // Putting a condition so the image does not move if it is still the dancing cat
    if (cat.src === 'http://www.anniemation.com/clip_art/images/cat-walk.gif') {
      currentPosition = newPosition;
    }
  }
}

setInterval(catWalk, 50);
