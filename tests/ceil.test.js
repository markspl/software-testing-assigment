import ceil from "../source/src/ceil";

describe("Test ceil", () => {

  // There was error in documentation, as result must be 2 instead of 1.
  test("without precision", () => {
    expect(ceil(1.213231)).toBe(2);
  });

  test("with positive precision ", () => {
    expect(ceil(1.123, 2)).toBeCloseTo(1.13);
  });

  test("with negative precision", () => {
    expect(ceil(123.45, -2)).toBe(200);
  });

  test("with too big precision", () => {
    expect(ceil(1.23, 5)).toBeCloseTo(1.23);
  });

  // There was error in documentation, as result must be 10000 instead of 1000.
  test("with too small precision", () => {
    expect(ceil(1.23, -4)).toBe(10000);
  });

  test("with zero value", () => {
    expect(ceil(0, 2)).toBeCloseTo(0.0);
  });

  test("with integer", () => {
    expect(ceil(5, 2)).toBeCloseTo(5.0);
  });

});
