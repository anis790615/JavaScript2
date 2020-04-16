/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */
// Buttons
const incBtn = document.querySelector('.length-up');
const decBtn = document.querySelector('.length-down');
const startTimer = document.querySelector('.start-btn');
const stopTimer = document.querySelector('.stop-btn');
const pauseTimer = document.querySelector('.pause-btn');
const pausePlayIcon = document.querySelector('.pause-btn > .fas');
const controls = document.querySelectorAll('.control');

//display variables
let setDurationDisplay = document.querySelector('.length-display');
const displayMinutes = document.querySelector('.minutes');
const displaySeconds = document.querySelector('.seconds');
const message = document.querySelector('.message');
const timerDisplay = document.querySelector('#countdown-timer');

//Timer variables
let setDurationValue = parseInt(setDurationDisplay.innerText);
let isPaused = false;
let timerStopped = true;
let timerHandler = 0;
let seconds = 1500;

// Functions
// The start function is listened on the start button and fires up the timer and switches controls
function start() {
  timer();
  toggleControl();
}
// The start function is listened on the stop button and resets the timer and returns controls to initial state
function stop() {
  resetTimer();
  toggleControl();
}
// Increment and Decrement functions check if timers is stopped and then change the session duration
function incrementFunction() {
  if (timerStopped) {
    setDurationValue++;
    updateDisplay();
  }
}
function decrementFunction() {
  if (timerStopped && setDurationValue > 1) {
    setDurationValue--;
    updateDisplay();
  }
}
// The timer function
function timer() {
  // Takes the value from the session duration and converts it to seconds
  seconds = setDurationValue * 60;
  // assigns the interval function to variable so that it can be cleared
  timerHandler = setInterval(function() {
    // Checks if seconds didn't reach 0 otherwise, fires up the timers message
    if (seconds !== 0) {
      // Checks if timer is not paused so it starts decrementing
      if (!isPaused) {
        seconds--;
        updateDisplay();
      } else {
        seconds = seconds;
      }
    } else {
      timeIsUp();
      stop();
    }
  }, 1000);
}
// The function toggles between a single start button and a stop and pause buttons
function toggleControl() {
  controls.forEach(function(control) {
    if (control.classList.contains('playing')) {
      control.classList.remove('playing');
      control.classList.add('stopped');
      timerStopped = true;
    } else {
      control.classList.add('playing');
      control.classList.remove('stopped');
      timerStopped = false;
    }
  });
}
// Clears the interval and resets the value of the timer to that of the session length
function resetTimer() {
  seconds = setDurationValue * 60;
  clearInterval(timerHandler);
  updateDisplay();
}
// The pause toggle simple changes the icon of the play to pause and vice versa
function pauseToggle() {
  isPaused = !isPaused;
  if (pausePlayIcon.classList.contains('fa-pause')) {
    pausePlayIcon.classList.replace('fa-pause', 'fa-play');
  } else {
    pausePlayIcon.classList.replace('fa-play', 'fa-pause');
  }
}
// The function updates all values and outputs them to screen
function updateDisplay() {
  setDurationDisplay.innerText = setDurationValue;
  displayMinutes.innerText = `${Math.floor(seconds / 60)}`;
  seconds % 60 < 10
    ? (displaySeconds.innerText = `0${seconds % 60}`)
    : (displaySeconds.innerText = `${seconds % 60}`);
}
// Hides the timer and shows the message, and after 5 seconds reverse that
function timeIsUp() {
  timerDisplay.classList.add('hidden');
  message.classList.remove('hidden');
  setTimeout(function() {
    timerDisplay.classList.remove('hidden');
    message.classList.add('hidden');
  }, 5000);
}

//  Event listeners
startTimer.addEventListener('click', start);
stopTimer.addEventListener('click', stop);
pauseTimer.addEventListener('click', pauseToggle);
incBtn.addEventListener('click', incrementFunction);
decBtn.addEventListener('click', decrementFunction);

// A different method of adding event Listeners was to make an object of selector function pairs, and iterate through it and add event listeners, but when implemented it didn't save much code, so I commented it out and kept the usual method for readability.
/*
const incrementFunctions = {
  '.length-up': function() {
    if (timerStopped) {
      setDurationValue++;
      console.log(setDurationValue);
      updateDisplay();
    }
  },
  '.length-down': function() {
    if (timerStopped && setDurationValue > 1) {
      setDurationValue--;
      console.log(setDurationValue);
      updateDisplay();
    }
  },
};

for (selector in incrementFunctions) {
  if (incrementFunctions.hasOwnProperty(selector)) {
    document.querySelector(selector).addEventListener('click', incrementFunctions[selector]);
  }
}
*/
