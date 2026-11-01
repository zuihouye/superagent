import assert from 'node:assert/strict';
import test from 'node:test';

import { add, average, formatPercent, multiply, subtract } from '../src/math.js';

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

test('average of numbers', () => {
  assert.equal(average([1, 2, 3, 4]), 2.5);
});

test('average of an empty list is zero', () => {
  assert.equal(average([]), 0);
});

test('formatPercent rounds to whole percent', () => {
  assert.equal(formatPercent(0.5), '50%');
});
