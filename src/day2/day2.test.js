import { traversal } from "./day2";

const NodeD = {
  value: 4,
  next: null,
};
const NodeC = {
  value: 3,
  next: NodeD,
};
const NodeB = {
  value: 2,
  next: NodeC,
};
const NodeA = {
  value: 1,
  next: NodeB,
};
const LinkedList = {
  head: NodeA,
};

test("traversal with callback add should return 10", () => {
  expect(traversal(LinkedList, (total, current) => total + current, 1)).toBe(
    11
  );
});
