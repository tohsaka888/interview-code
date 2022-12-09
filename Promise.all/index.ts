/**
 * 手写myPromiseAll
 * @date 12/7/2022 - 11:09:58 AM
 *
 * @template T
 * @param {Iterable<Promise<T>>} iterable
 * @returns {Promise<T[]>}
 */

function myPromiseAll<T>(iterable: Iterable<Promise<T>>): Promise<T[]> {
  const result: T[] = [];
  const promiseArray = Array.from(iterable);
  let count = 0;

  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise, idx) => {
      promise
        .then((val) => {
          result[idx] = val;
          count++;
          if (count === promiseArray.length) {
            resolve(result);
          }
        })
        .catch((e) => {
          reject(e);
        });
    });
  });
}

export default myPromiseAll;
