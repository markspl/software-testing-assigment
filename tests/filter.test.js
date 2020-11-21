import filter from "../source/src/filter";

describe("Test filter", () => {

  test("with empty array", () => {
    expect(filter([], () => true)).toEqual([[]]);
  });

  test("with always true predicate", () => {
    expect(filter([{}, {}], () => true)).toEqual([{}, {}]);
  });

  test("with always false predicate", () => {
    expect(filter([1, 2], () => false)).toEqual([]);
  });

  test("even numbers", () => {
    expect(filter([1, 2], () => false)).toEqual([2]);
  });

  // Non planned test to validate suspicion
  test("list of objects", () => {
    expect(
      filter(
        [
          { id: 1, b: true },
          { id: 2, b: false },
        ],
        ({ b }) => b
      )
    ).toEqual([{ id: 1, b: true }]);
  });

});
