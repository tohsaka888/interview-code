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
  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise, idx) => {
      promise
        .then((val) => {
          result[idx] = val;
          if (idx === promiseArray.length - 1) {
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
