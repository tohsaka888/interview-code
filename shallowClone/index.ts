/**
 * 手写浅拷贝
 * @param {T} object
 * @returns {T}
 */
function shallowClone<T>(object: T): T {
  if (!object || typeof object !== "object") {
    return object;
  }

  // deno-lint-ignore no-explicit-any
  const clonedObject: any = Array.isArray(object) ? [] : {};

  Object.keys(object).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      // deno-lint-ignore no-explicit-any
      clonedObject[key] = (object as any)[key];
    }
  });

  return clonedObject as T;
}

export default shallowClone;
