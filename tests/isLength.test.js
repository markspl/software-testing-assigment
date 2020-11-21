import isLength from "../source/src/isLength";

describe("Test isLength", () => {

  test("with number", () => {
    expect(isLength(3)).toBe(true);
  });

  test("with min value", () => {
    expect(isLength(Number.MIN_VALUE)).toBe(false);
  });

  test("with infinity", () => {
    expect(isLength(Infinity)).toBe(false);
  });

  test("with string", () => {
    expect(isLength("3")).toBe(false)
  });

  test("with decimal", () => {
    expect(isLength(5.4)).toBe(false);
  });
});
