const functions = require('./functions');

// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});
test('Adds 2 + 2 to NOT equal 3', () => {
  expect(functions.add(2, 2)).not.toBe(3);
});


// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeFalsy matches anything that an if statement treats as false
test('Shoul be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});
// toBeFalsy with 0 value same as null
test('Shoul be falsy', () => {
  expect(functions.checkValue(0)).toBeFalsy();
});
test('Shoul be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

test('Return createUser', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Hannha',
    lastName: 'Johns'
  });
});
