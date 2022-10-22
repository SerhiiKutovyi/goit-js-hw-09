import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', createPromise);

function createPromise(position, delay) {
  position.preventDefault();
  // const promise = new Promise((position, delay) => {
  //   const shouldResolve = Math.random() > 0.3;
  //   if (shouldResolve) {
  //     Notiflix.then(`✅ Fulfilled promise ${position} in ${delay}ms`);
  //   } else {
  //     Notiflix.catch(`❌ Rejected promise ${position} in ${delay}ms`);
  //   }
  //   delay;
  // });
}
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
