/**
 * 防抖
 * @date 12/7/2022 - 12:11:41 PM
 *
 * @template T = (...args: any[]) => any
 * @param {T} fn
 * @param {number} interval
 * @returns {T}
 */
// deno-lint-ignore no-explicit-any
function debounce<T = (...args: any[]) => any>(fn: T, interval: number): T {
  let timer = -1;
  let lastRunTime = -1;
  // deno-lint-ignore no-explicit-any
  return function (this: any, ...args: any[]) {
    if (Date.now() - lastRunTime < interval) {
      clearInterval(timer);
    }
    lastRunTime = Date.now();
    timer = setTimeout(() => {
      // deno-lint-ignore ban-types
      (fn as Function).apply(this, args);
    }, interval);
  } as T;
}

export default debounce;
