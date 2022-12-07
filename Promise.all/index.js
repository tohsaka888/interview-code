/**
 * 手写myPromiseAll
 * @date 12/7/2022 - 11:09:58 AM
 *
 * @template T
 * @param {Iterable<Promise<T>>} iterable
 * @returns {Promise<T[]>}
 */

function myPromiseAll(iterable) {
  const promiseArray = Array.from(iterable)
  const results = []
  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise, idx) => {
      promise.then((val) => {
        results[idx] = val;
        if (idx === promiseArray.length - 1) {
          resolve(results)
        }
      }).catch(e => {
        reject(e)
      })
    })
  })
}

export default myPromiseAll