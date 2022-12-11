/**
 * 手写instanceof
 * @param {Record<string, unknown>} object
 * @param {any}
 * @param {ObjectConstructor} target
 */

// deno-lint-ignore no-explicit-any
type Constructor<T> = new (...args: any[]) => T;
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
