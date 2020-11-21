import isObjectLike from "../source/src/isObjectLike";

describe("Test isObjectLike", () => {

  test("object value", () => {
    expect(isObjectLike({})).toBe(true);
  });

  test("array value", () => {
    expect(isObjectLike([1,2,3])).toBe(true);
  });

  test("function value", () => {
    expect(isObjectLike(Function)).toBe(false);
  });

  test("without value", () => {
    expect(isObjectLike(null)).toBe(false);
  });
});
