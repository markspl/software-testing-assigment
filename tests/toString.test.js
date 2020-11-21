import toString from "../source/src/toString";

describe("Test toString", () => {

  test("without value", () => {
    expect(toString(null)).toBe("");
  });

  test("with negative number", () => {
    expect(toString(-0)).toBe("-0");
  });

  test("with array", () => {
    expect(toString([1,2,3])).toBe("1,2,3");
  });

  test("with symbol value", () => {
    expect(toString(Symbol("foo"))).toBe("Symbol(foo)");
  });
});
