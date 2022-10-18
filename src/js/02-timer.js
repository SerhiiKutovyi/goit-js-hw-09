import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const ref = {
  input: document.querySelector('#datetime-picker'),
  button: document.querySelector('button[data-start]'),
};

let timerID = null;

ref.input.addEventListener('click', flatPickr, () => {});

ref.button.addEventListener('click', () => {
  const startTime = Date.now();

  timerID = setInterval(() => {
    const currentTime = Date.now();
    const newTime = currentTime - startTime;
    const { days, hours, minutes, seconds } = convertMs(newTime);
    console.log(`${days}:${hours}:${minutes}:${seconds}`);
  }, 1000);
});

function flatPickr() {
  // event.preventDefault();

  new flatpickr('input[type = "text"]', {
    altInput: true,
    altFormat: 'F j, Y',
    dateFormat: 'Y-m-d',
    enableTime: true,
    time_24hr: true,
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  });
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
