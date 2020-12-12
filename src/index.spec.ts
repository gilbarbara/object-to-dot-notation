import objectToDotNotation from './index';

describe('object-to-dot-notation', () => {
  it('should return properly', () => {
    expect(objectToDotNotation('test')).toBe('test');

    expect(
      objectToDotNotation({
        machine: {
          lights: {
            on: {
              red: 'walk',
            },
          },
        },
      }),
    ).toBe('machine.lights.on.red.walk');
  });

  it('should ignore arrays', () => {
    expect(
      objectToDotNotation({
        machine: {
          lights: {
            on: [1, 2],
          },
        },
      }),
    ).toBe('machine.lights.on');
  });

  it('should throw an error with invalid inputs', () => {
    // @ts-ignore
    expect(() => objectToDotNotation()).toThrow();
    // @ts-ignore
    expect(() => objectToDotNotation([])).toThrow();
  });
});
