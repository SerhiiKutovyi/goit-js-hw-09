import Notiflix, { Loading } from 'notiflix';
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

ref.button.disabled = true;
let timeFromInput;
let isActive = false;
let i = 1000;

ref.button.addEventListener('click', timer);

function timer() {
  if (isActive) {
    return;
  }
  isActive = true;

  let timerId = setInterval(() => {
    if (i >= timeFromInput - Date.now()) {
      clearInterval(timerId);
    }

    const currentTime = Date.now();
    const newTime = timeFromInput - currentTime;
    const { days, hours, minutes, seconds } = convertMs(newTime);

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
      Notiflix.Notify.failure('Please choose a date in the future');
      ref.button.disabled = true;
    } else {
      Notiflix.Notify.success('GREAT ! YOU ARE IN THE FUTURE.');
      ref.button.disabled = false;
      timeFromInput = selectedDates[0];
    }
  },
};

new flatpickr(ref.input, options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
}
