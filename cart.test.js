import { test } from "node:test";
import assert from "node:assert/strict";
import { count, total } from "./cart.js";
const items = [{ price: 2, qty: 3 }, { price: 5, qty: 1 }];
test("count adds up the quantities", () => {
  assert.equal(count(items), 4);
});
test("total multiplies each price by its quantity", () => {
  assert.equal(total(items), 11);
});
test("free items have zero total and count their quantity", () => {
  const freeItems = [{ price: 0, qty: 2 }];
  assert.equal(total(freeItems), 0);
  assert.equal(count(freeItems), 2);
});
