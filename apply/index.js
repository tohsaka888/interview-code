function myApply(thisArg, args) {
  if (typeof this !== "function") {
    throw new TypeError("error: expected a function");
  }
  const funKey = Symbol("funkey");
  thisArg[funKey] = this;
  const result = thisArg[funKey](...args);
  delete thisArg[funKey];
  return result;
}

export default myApply;
