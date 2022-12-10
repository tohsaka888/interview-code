/**
 * 手写浅拷贝
 * @param {any} object
 * @returns {any}
 */
function shallowClone(object) {
  // typeof判断有缺陷
  // typeof null === 'object
  // typeof [] === 'object'
  // 因为我们需要clone的为数组或者对象，所以只需要排除null
  if (!object || typeof object !== "object") {
    return object;
  }

  const clonedObject = Object.create(
    Object.getPrototypeOf(object),
    Object.getOwnPropertyDescriptors(object)
  );
  return clonedObject;
}

export default shallowClone;
