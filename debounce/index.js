/**
 * 描述
 * @date 2023-02-06
 * @param {any} fn
 * @param {any} interval
 * @returns {any}
 */
function debounce(fn, interval) {
  let timer = null;
  let lastRunTime = -1

  return function (...args) {
    const currentTime = Date.now();
    if (currentTime - lastRunTime < interval) {
      clearInterval(timer)
    }
    lastRunTime = currentTime;
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, interval)
  }
}

export default debounce