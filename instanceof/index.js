function myInstanceOf(object, target) {
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
