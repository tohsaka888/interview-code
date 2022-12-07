function debounce(fn, interval) {
  let timer = null;
  let lastRunTime = -1

  return function (...args) {
    if (Date.now() - lastRunTime < interval) {
      clearInterval(timer)
    }
    lastRunTime = Date.now();
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, interval)
  }
}

export default debounce