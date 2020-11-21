import add from "../source/src/add";

describe("Test add", () => {

  test("negative numbers", () => {
    expect(add(-1, -2)).toBe(-3);
  });

  test("positive numbers", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("decimals", () => {
    expect(add(1.1, 2.22)).toBeCloseTo(3.32, 2);
  });

  test("add zeros", () => {
    expect(add(0, 0)).toBe(0);
  });

});
