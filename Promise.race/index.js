/**
 * 手写Promise.race
 * @date 2022-12-08
 * @param {any} iterable
 * @returns {any}
 */
function myPromiseRace(iterable) {
  const promiseArray = Array.from(iterable);
  return new Promise(function (resolve, reject) {
    promiseArray.forEach((promise) => {
      promise
        .then((val) => {
          resolve(val);
        })
        .catch((e) => {
          reject(e);
        });
    });
  });
}

export default myPromiseRace;
