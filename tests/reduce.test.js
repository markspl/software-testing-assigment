import reduce from "../source/src/reduce";
import add from "../source/src/add";

describe("Test reduce", () => {

  test("with empty array", () => {
    expect(reduce([], (a, n) => n, 0)).toBe(0);
  });

  test("with add", () => {
    expect(reduce([1, 2, 3], (sum, n) => add(sum, n), 0)).toBe(6);
  });

});
