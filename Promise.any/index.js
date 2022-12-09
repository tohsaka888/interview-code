/**
 * 手写 Promise.any
 * @param {any} iterable
 * @returns {Promise}
 */
function myPromiseAny(iterable) {
  const promiseArray = Array.from(iterable);
  const errors = [];
  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise, idx) => {
      promise
        .then((val) => {
          resolve(val);
        })
        .catch((error) => {
          errors[idx] = error;
          if (errors.length === promiseArray.length) {
            reject(new AggregateError(errors));
          }
        });
    });
  });
}

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(1), 1000);
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(2), 2000);
// });
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(3), 3000);
// });
// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(4), 4000);
// });

// myPromiseAny([promise1, promise2, promise3, promise4]).then((val) => {
//   console.log(val);
// });

export default myPromiseAny;
