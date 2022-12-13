// deno-lint-ignore no-explicit-any
function myApply(this: (...args: any[]) => any, thisArg: any, args: any[]) {
  if (typeof this !== "function") {
    throw new TypeError("typeerror");
  }

  const funKey = Symbol("funkey");
  thisArg[funKey] = this;
  const result = thisArg[funKey](...args);
  delete thisArg[funKey];
  return result;
}

export default myApply;
