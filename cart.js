// The cart's total: each item's price times how many of it there are.
export function total(items) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}
export function count(items) {
  return items.reduce((n, item) => n + item.qty, 0);
}
