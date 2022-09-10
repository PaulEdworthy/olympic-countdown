const targetDate = new Date('February 4, 2022 07:00:00').getTime();
const timer = document.getElementById('timer');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const interval = setInterval(function () {
  const now = new Date().getTime();

  const timeRemaining = targetDate - now;

  const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  days.textContent = daysRemaining;
  hours.textContent = hoursRemaining;
  minutes.textContent = minutesRemaining;
  seconds.textContent = secondsRemaining;
});