/**
 * 手写myPromiseAll
 * @date 12/7/2022 - 11:09:58 AM
 *
 * @template T
 * @param {Iterable<Promise<T>>} iterable
 * @returns {Promise<T[]>}
 */

function myPromiseAll(iterable) {
  const promiseArray = Array.from(iterable);
  const results = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise, idx) => {
      promise
        .then((val) => {
          results[idx] = val;
          count++;
          if (count === promiseArray.length) {
            resolve(results);
          }
        })
        .catch((e) => {
          reject(e);
        });
    });
  });
}

export default myPromiseAll;
