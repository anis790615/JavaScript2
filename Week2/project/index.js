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

//Timer variables
let setDurationValue = parseInt(setDurationDisplay.innerText);
let isPaused = false;
let timerStopped = true;
let timerHandler = 0;
let seconds = 1500;

// Functions

function start() {
  timer();
  toggleControl();
}
function stop() {
  resetTimer();
  toggleControl();
}
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
function timer() {
  seconds = setDurationValue * 60;
  timerHandler = setInterval(function() {
    if (seconds !== 0) {
      if (!isPaused) {
        seconds--;
        updateDisplay();
      } else {
        seconds = seconds;
      }
    } else {
      resetTimer();
    }
  }, 1000);
}
function toggleControl() {
  controls.forEach(function(control) {
    if (control.classList.contains('playing')) {
      control.classList.remove('playing');
      control.classList.add('stopped');
      timerStopped = true;
    } else {
      control.classList.add('playing');
      control.classList.remove('stopped');
      timerStopped = !timerStopped;
    }
  });
}
function resetTimer() {
  seconds = setDurationValue * 60;
  clearInterval(timerHandler);
  updateDisplay();
}
function pauseToggle() {
  isPaused = !isPaused;
  if (pausePlayIcon.classList.contains('fa-pause')) {
    pausePlayIcon.classList.replace('fa-pause', 'fa-play');
  } else {
    pausePlayIcon.classList.replace('fa-play', 'fa-pause');
  }
}
function updateDisplay() {
  setDurationDisplay.innerText = setDurationValue;
  displayMinutes.innerText = `${Math.floor(seconds / 60)}`;
  seconds % 60 < 10
    ? (displaySeconds.innerText = `0${seconds % 60}`)
    : (displaySeconds.innerText = `${seconds % 60}`);
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
