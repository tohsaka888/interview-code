
/**
 * 手写 Promise.race
 * @param {Iterable<Promise<T>>} iterable
 * @returns {any}
 */
function myPromiseRace<T = unknown>(
  iterable: Iterable<Promise<T>>
): Promise<T> {
  const promiseArray = Array.from(iterable);
  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise) => {
      promise
        .then((val) => {
          resolve(val);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

export default myPromiseRace;
