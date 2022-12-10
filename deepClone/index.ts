function deepClone<T = unknown>(object: T): T {
  function isObject<T>(object: T): boolean {
    if (!object || typeof object !== "object") {
      return false;
    } else {
      return true;
    }
  }

  const map = new WeakMap();

  function baseClone(object: T): T {
    if (!isObject(object)) {
      return object;
    }

    if (object instanceof Date) {
      return new Date(object.getTime()) as T;
    }

    if (object instanceof RegExp) {
      return new RegExp(object) as T;
    }

    if (map.has(object as Record<string, unknown>)) {
      return map.get(object as Record<string, unknown>) as T;
    }

    const clonedObject = Object.create(
      Object.getPrototypeOf(object),
      Object.getOwnPropertyDescriptors(object)
    );

    Object.keys(object as Record<string, unknown>).forEach((key) => {
      const property = (object as Record<string, unknown>)[key];
      clonedObject[key] = isObject(property)
        ? baseClone(property as T)
        : property;
    });

    return clonedObject;
  }

  return baseClone(object);
}

export default deepClone;
