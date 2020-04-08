import { bubbleSort } from "./day1";

test("bubbleSort [9, 8, 7, 6, 5, 4, 3, 2, 1] should return [1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
  expect(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ]);
});
