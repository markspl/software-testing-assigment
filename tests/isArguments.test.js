import isArguments from "../source/src/isArguments";

describe("Test isArguments", () => {

  test("with correct value", () => {
    expect(isArguments(function() { return arguments }())).toBe(true);
  });

  test("with incorrect value", () => {
    expect(isArguments([1,2,3])).toBe(false);
  });

});