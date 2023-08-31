import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const promiseForm = document.querySelector('.form');
promiseForm.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(promiseForm);
  const firstDelay = parseInt(formData.get('delay'));
  const delayStep = parseInt(formData.get('step'));
  const amount = parseInt(formData.get('amount'));

  const promises = [];

  for (let i = 0; i < amount; i++) {
    const position = i + 1;
    const delay = firstDelay + i * delayStep;
    promises.push(createPromise(position, delay));
  }

  Promise.all(promises)
    .then(results => {
      results.forEach(result => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${result.position} in ${result.delay}ms`
        );
      });
    })
    .catch(errors => {
      errors.forEach(error => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${error.position} in ${error.delay}ms`
        );
      });
    });
});
