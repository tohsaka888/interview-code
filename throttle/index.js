function throttle(fn, interval) {
  let canRun = true
  return function (...args) {
    if (canRun) {
      canRun = false
      fn.apply(this, args)
      setTimeout(() => {
        canRun = true
      }, interval)
    }
  }
}

export default throttle