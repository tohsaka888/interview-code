// deno-lint-ignore no-explicit-any
function throttle(fn: (...args: any[]) => unknown, interval: number) {
  let canRun = true;
  return function (this: unknown, ...args: [args: unknown]) {
    if (canRun) {
      canRun = false;
      fn.apply(this, args);
      setTimeout(() => {
        canRun = true;
      }, interval);
    }
  };
}

export default throttle;
