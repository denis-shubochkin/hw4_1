import check from '../basic';

test('Передано число', () => {
  const result = check(2);
  expect(result).toBe(2);
});

test('Передано число в строке с символами', () => {
  const result = check('2s');
  expect(result).toBe(2);
});

test('Передана строка с символами', () => {
  try {
    check('sssss');
  } catch (e) {
    expect(e).toThrow();
  }
});
