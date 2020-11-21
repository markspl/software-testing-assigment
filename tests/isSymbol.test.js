import isSymbol from "../source/src/isSymbol";

describe("Test isSymbol", () => {

  test("with symbol", () => {
    expect(isSymbol(Symbol("foo"))).toBe(true);
  });

  test("with object", () => { // ???
    expect(isSymbol({"abc": 1})).toBe(true);
  });

  test("with string", () => {
    expect(isSymbol("abc")).toBe(false);
  });

  test("without value", () => {
    expect(isSymbol(null)).toBe(false);
  });
});
