type Result<T> =
  | { status: "fulfilled"; value: T }
  | { status: "rejected"; reason: T };

/**
 * Description
 * @param {Iterable<Promise<T>>} iterable
 * @returns {Promise<Result<T>[]>}
 */
function myPromiseAllSettled<T = unknown>(
  iterable: Iterable<Promise<T>>
): Promise<Result<T>[]> {
  const result: Result<T>[] = [];
  Promise.allSettled;
  let count = 0;
  const promiseArray = Array.from(iterable);
  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise, idx) => {
      promise
        .then((value) => {
          count++;
          result[idx] = {
            status: "fulfilled",
            value,
          };
          if (count === promiseArray.length) {
            resolve(result);
          }
        })
        .catch((reason) => {
          count++;
          result[idx] = {
            status: "rejected",
            reason,
          };
          if (count === promiseArray.length) {
            resolve(result);
          }
        });
    });
  });
}

export default myPromiseAllSettled;
