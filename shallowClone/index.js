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
  const clonedObject = Array.isArray(object) ? [] : {};
  Object.keys(object).forEach((key) => {
    // 是否为自身属性,也就是说不复制继承的属性
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      clonedObject[key] = object[key];
    }
  });
  return clonedObject;
}

export default shallowClone;
