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
test("empty cart has zero total and count", () => {
  assert.equal(total([]), 0);
  assert.equal(count([]), 0);
});
