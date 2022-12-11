/**
 * 手写深拷贝
 * @param {any} object
 * @returns {any}
 */
function deepClone(object) {
  function isObject(object) {
    if (!object || typeof object !== "object") {
      return false;
    } else {
      return true;
    }
  }

  const map = new WeakMap();

  function baseClone(object) {
    if (!isObject(object)) {
      return object;
    }

    if (object instanceof Date) {
      return new Date(object);
    }

    if (object instanceof RegExp) {
      return new RegExp(object);
    }

    if (map.has(object)) {
      return map.get(object);
    }

    // shallowClone
    const clonedObject = Object.create(
      Object.getPrototypeOf(object),
      Object.getOwnPropertyDescriptors(object)
    );

    map.set(object, clonedObject);

    Reflect.ownKeys(object).forEach((key) => {
      clonedObject[key] = baseClone(object[key]);
    });

    return clonedObject;
  }

  return baseClone(object);
}

export default deepClone;
