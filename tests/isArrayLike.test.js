/**
 * @jest-environment jsdom
 */

import isArrayLike from "../source/src/isArrayLike";

describe("Test isArrayLike", () => {

  test("with array", () => {
    expect(isArrayLike([1,2,3])).toBe(true);
  });

  test("with DOM", () => {
    document.body.innerHTML = `
      <h1>Topic</h1>
      <p>Test tag name p</p>
      <button>Button</button>
    `;

    expect(isArrayLike(document.body.children)).toBe(true);
  });

  test("with string", () => {
    expect(isArrayLike("abc")).toBe(true);
  });

  test("with function", () => {
    expect(isArrayLike(Function)).toBe(false);
  });

  test("without value", () => {
    expect(isArrayLike(null)).toBe(false);
  });
});
