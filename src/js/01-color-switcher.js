const ref = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};

let timerId = null;
let isActive = false;

ref.start.addEventListener('click', () => {
  if (isActive) {
    return;
  }

  isActive = true;
  timerId = setInterval(() => {
    randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
  }, 1000);
});

ref.stop.addEventListener('click', () => {
  clearInterval(timerId);
  isActive = false;
});
