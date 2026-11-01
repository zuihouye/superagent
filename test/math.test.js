import assert from 'node:assert/strict';
import test from 'node:test';

import { add, average, divide, formatPercent, multiply, subtract } from '../src/math.js';

test('add', () => {
  assert.equal(add(2, 3), 5);
  assert.equal(add(-1, 1), 0);
});

test('subtract', () => {
  assert.equal(subtract(10, 4), 6);
});

test('multiply', () => {
  assert.equal(multiply(6, 7), 42);
});

test('divide', () => {
  assert.equal(divide(10, 2), 5);
  assert.equal(divide(-9, 3), -3);
});

test('divide by zero returns null', () => {
  assert.equal(divide(1, 0), null);
  assert.equal(divide(0, 0), null);
});

test('average of numbers', () => {
  assert.equal(average([1, 2, 3, 4]), 2.5);
});

test('average of an empty list is zero', () => {
  assert.equal(average([]), 0);
});

test('formatPercent rounds to whole percent', () => {
  assert.equal(formatPercent(0.5), '50%');
});
