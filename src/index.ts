type PlainObject<Value = unknown> = Record<string | number | symbol, Value>;

function isPlainObject(value: unknown): value is PlainObject {
  if (Object.prototype.toString.call(value) !== '[object Object]') {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);

  return prototype === null || prototype === Object.getPrototypeOf({});
}

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

/**
 * Convert simple objects in dot notation
 *
 * @param {Object} input
 * @param {Array} [dots]
 *
 * @return {string}
 */
export default function ObjectToDotNotation(
  input: PlainObject | string,
  dots: string[] = [],
): string {
  if (isString(input)) {
    return input;
  }

  if (!isPlainObject(input)) {
    throw new Error('the first paramater must be an object');
  }

  Object.keys(input).forEach(key => {
    const val = input[key];

    dots.push(key);

    if (isPlainObject(val)) {
      ObjectToDotNotation(val, dots);
    } else if (typeof val === 'string') {
      dots.push(val);
    }
  });

  return dots.join('.');
}
