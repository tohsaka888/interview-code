/**
 * 手写instanceof
 * @date 2022-12-12
 * @param {Object} object
 * @param {new (...args: any[]) => T} target
 * @returns {boolean}
 */
function myInstanceof(object, target) {
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
    return myInstanceof(objectProto, target);
  }
}

export default myInstanceof;
