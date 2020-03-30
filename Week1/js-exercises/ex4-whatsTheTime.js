/**
 
 ** Exercise 4: What 's the time? **
 
 Why wear a watch when you can check the time, live in your webpage ?

  1. Create a basic HTML file
  2. in the HTML file Include a script tag and link the JavaScript file
  3. Inside the JS file, write a function that adds the current time to the webpage. Make sure it 's written in the HH:MM:ss notation (hour, minute, second). Hint: use `setInterval()` to make sure the time stays current
  4. Have the function execute when it 's loading in the browser

 */

function displayCurrentTime() {
  // your code goes in here
  //Get the current date
  const currentDate = new Date();
  // Extract the hours, the minutes, and the seconds from the date
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  // Set the time as a string literal in a variable
  const currentTime = `${hours}:${minutes}:${seconds}`;
  // I added the clock as an innerHTML so to reduce the amount of code of adding and appending elements and attributes and styling. The class of clock was added if I was to target the div later, which I did not have to.
  document.body.innerHTML = `<div
   class="clock"
   style="text-align: center; margin-top: 10%; font-size: 5rem; padding: 1rem;"
 >${currentTime}</div>`;
}
window.onload = displayCurrentTime();
setInterval(displayCurrentTime, 1000);
