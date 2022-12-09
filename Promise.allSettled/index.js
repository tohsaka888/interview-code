/**
 * Description
 * @param {any[]} iterable
 * @returns {Promise<any[]>}
 */
function myPromiseAllSettled(iterable) {
  let count = 0;
  const results = [];
  const promiseArray = Array.from(iterable);

  return new Promise(function (resolve, reject) {
    promiseArray.forEach((promise, idx) => {
      promise
        .then((value) => {
          count++;
          results[idx] = {
            status: "fulfilled",
            value,
          };

          if (count === promiseArray.length) {
            resolve(results);
          }
        })
        .catch((reason) => {
          count++;
          results[idx] = {
            status: "rejected",
            reason,
          };
          if (count === promiseArray.length) {
            resolve(results);
          }
        });
    });
  });
}

export default myPromiseAllSettled;
