import isEmpty from "../source/src/isEmpty";

describe("Test isEmpty", () => {

  test("with non-empty string", () => {
    expect(isEmpty("not empty")).toBe(false);
  });

  test("with empty string", () => {
    expect(isEmpty("")).toBe(true);
  });

  test("with string containing 0", () => {
    expect(isEmpty("0")).toBe(false);
  })

  test("with number", () => {
    expect(isEmpty(1)).toBe(true);
  });

  test("with null", () => {
    expect(isEmpty(null)).toBe(true);
  })

  test("with empty array", () => {
    expect(isEmpty([])).toBe(true);
  });

  test("with non-empty array", () => {
    expect(isEmpty([0])).toBe(false);
  })

  test("with empty object", () => {
    expect(isEmpty({})).toBe(true);
  });

  test("with non-empty object", () => {
    expect(isEmpty({"key": 0})).toBe(false);
  })

});
