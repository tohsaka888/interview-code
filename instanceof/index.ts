/**
 * 定义构造函数
 * @date 12/12/2022 - 10:00:20 AM
 * @author tohsaka888
 *
 * @typedef {Constructor}
 * @template T
 */
// deno-lint-ignore no-explicit-any
type Constructor<T> = new (...args: any[]) => T;

/**
 * 手写instanceof
 * @date 12/12/2022 - 10:00:20 AM
 * @author tohsaka888
 *
 * @param {Object} object
 * @param {Constructor<any>} target
 * @returns {boolean}
 */
// deno-lint-ignore ban-types no-explicit-any
function myInstanceOf(object: Object, target: Constructor<any>): boolean {
  if (!object || (typeof object !== "object" && typeof object !== "function")) {
    return false;
  }

  if (!target.prototype) {
    return false;
  }

  const objectProto = Object.getPrototypeOf(object);
  if (objectProto === null) {
    return false;
  } else if (objectProto === target.prototype) {
    return true;
  } else {
    return myInstanceOf(objectProto, target);
  }
}

export default myInstanceOf;
