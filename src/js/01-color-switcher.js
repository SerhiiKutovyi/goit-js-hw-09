let timerId = null;
let isActive = false;

const startBtn = document
  .querySelector('button[data-start]')
  .addEventListener('click', () => {
    if (isActive) {
      return;
    }
    isActive = true;
    timerId = setInterval(() => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
        16
      )}`;
      document.body.style.backgroundColor = randomColor;
    }, 1000);
  });

const stopBtn = document
  .querySelector('button[data-stop]')
  .addEventListener('click', () => {
    clearInterval(timerId);
    isActive = false;
  });
