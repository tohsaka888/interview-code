/**
 * 手写Call
 * @date 2022-12-12
 * @param {any} thisArg=globalThis
 * @param {any} ...args
 * @returns {any}
 */
function myCall(thisArg = globalThis, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.call called on incompatible ");
  }

  const funKey = Symbol();
  thisArg[funKey] = this;
  const result = thisArg[funKey](...args);
  delete thisArg[funKey];
  return result;
}

export default myCall;
