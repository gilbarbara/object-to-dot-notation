import isObject from 'is-plain-obj';

/**
 * Convert simple objects in dot notation
 *
 * @param {Object} obj
 * @param {Array} [dots]
 *
 * @return {string}
 */
export default function ObjectToDotNotation(obj, dots = []) {
  if (typeof obj === 'string') {
    return obj;
  }

  if (!isObject(obj)) {
    throw new Error('the first paramater must be an object');
  }

  Object.keys(obj).forEach((key) => {
    const val = obj[key];

    dots.push(key);

    if (isObject(val)) {
      ObjectToDotNotation(val, dots);
    } else if (typeof val === 'string') {
      dots.push(val);
    }
  });

  return dots.join('.');
}
