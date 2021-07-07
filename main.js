const targetDate = new Date('July 23, 2021 07:00:00').getTime();
const timer = document.getElementById('timer');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

let interval = setInterval(function () {
  let now = new Date().getTime();

  let timeRemaining = targetDate - now;

  let daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  days.textContent = daysRemaining;
  hours.textContent = hoursRemaining;
  minutes.textContent = minutesRemaining;
  seconds.textContent = secondsRemaining;
});