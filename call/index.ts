function myCall(
  // deno-lint-ignore no-explicit-any
  this: (...args: any[]) => any,
  // deno-lint-ignore no-explicit-any
  thisArg: any,
  // deno-lint-ignore no-explicit-any
  ...args: any[]
): // deno-lint-ignore no-explicit-any
any {
  if (typeof this !== "function") {
    throw TypeError("this must be a function");
  }

  const funkey = Symbol("fnKey");
  thisArg[funkey] = this;
  const result = thisArg[funkey](...args);
  delete thisArg[funkey];
  return result;
}

export default myCall;
