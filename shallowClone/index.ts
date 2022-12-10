/**
 * 手写浅拷贝
 * @param {T} object
 * @returns {T}
 */
function shallowClone<T>(object: T): T {
  if (!object || typeof object !== "object") {
    return object;
  }

  const clonedObject = Object.create(
    Object.getPrototypeOf(object),
    Object.getOwnPropertyDescriptors(object)
  );

  return clonedObject as T;
}

export default shallowClone;
