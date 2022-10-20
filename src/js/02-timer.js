import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const ref = {
  input: document.querySelector('#datetime-picker'),
  button: document.querySelector('button[data-start]'),

  daysSpan: document.querySelector('.value[data-days]'),
  hoursSpan: document.querySelector('.value[data-hours]'),
  minutesSpan: document.querySelector('.value[data-minutes]'),
  secondsSpan: document.querySelector('.value[data-seconds]'),
};

let timerID = 0;
let timeFromInput = 0;
ref.button.disabled = true;

ref.input.addEventListener('click', flatPickr);
ref.button.addEventListener('click', timer);

function timer() {
  const startTime = Date.now();

  setInterval(() => {
    const currentTime = Date.now();

    const newTime = currentTime - startTime;
    const { days, hours, minutes, seconds } = convertMs(newTime);
    console.log(`${days}:${hours}:${minutes}:${seconds}`);
    ref.daysSpan.textContent = `${days}`;
    ref.hoursSpan.textContent = `${hours}`;
    ref.minutesSpan.textContent = `${minutes}`;
    ref.secondsSpan.textContent = `${seconds}`;
  }, 1000);
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notiflix.Report.success(
  'ВНИМАНИЕ',
  'Message',
  'Button Text',
  function cb() {
    // callback
     ref.button.disabled = false;
  },
);
    } 
    // timeFromInput = selectedDates[0];
    console.log(timeFromInput);
  },
};

new flatpickr('#datetime-picker', options);

function flatPickr(event) {
  event.preventDefault();
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
}
