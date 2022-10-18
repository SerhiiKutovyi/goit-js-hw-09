import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const ref = {
  input: document.querySelector('#datetime-picker'),
  button: document.querySelector('button[data-start]'),
};

let timerID = null;

ref.input.addEventListener('click', flatPickr);
console.log(ref.input);

ref.button.addEventListener('click', () => {
  timerID = setInterval(() => {
    console.log('getSeconds!!!!!', Date(timerID));
  }, -1000);
});

function flatPickr(event) {
  event.preventDefault();

  new flatpickr('input[type = "text"]', {
    altInput: true,
    altFormat: 'F j, Y',
    dateFormat: 'Y-m-d',
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  });
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// const timer = {
//   start() {
//     const startTime = Date.now();
//     // setInterval(() => {
//     //   const currentTime = Date.now();
//     //   console.log('start => currentTime', currentTime);
//     // }, 3000);
//   },
// };
// timer.start();
