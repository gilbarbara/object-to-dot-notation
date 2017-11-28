import objectToDotNotation from '../src/index';

describe('object-to-dot-notation', () => {
  it('should throw an error with incorrect param', () => {
    expect(() => objectToDotNotation()).toThrow();
    expect(() => objectToDotNotation([])).toThrow();
    expect(() => objectToDotNotation('test')).toThrow();
  });

  it('should return a proper string', () => {
    expect(objectToDotNotation({
      machine: {
        lights: {
          on: {
            red: 'walk',
          },
        },
      },
    })).toBe('machine.lights.on.red.walk');
  });

  it('should ignore arrays', () => {
    expect(objectToDotNotation({
      machine: {
        lights: {
          on: [1, 2],
        },
      },
    })).toBe('machine.lights.on');
  });
});
