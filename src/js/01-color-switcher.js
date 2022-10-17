const buttonStart = document.querySelector('button[data-start="start"]');
console.log(buttonStart);
const buttonStop = document.querySelector('button[data-stop="stop"]');
console.log(buttonStop);

let timerId = null;
let isActive = false;

buttonStart.addEventListener('click', () => {
  if (isActive) {
    return;
  }
  isActive = true;

  timerId = setInterval(() => {
    randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
  }, 1000);
});

buttonStop.addEventListener('click', () => {
  clearInterval(timerId);
  isActive = false;
});
