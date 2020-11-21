import capitalize from "../source/src/capitalize";

describe("Test capitalize", () => {

  test("with empty string", () => {
    expect(capitalize("")).toEqual("");
  });

  test("with uppercase string", () => {
    expect(capitalize("TEXT")).toEqual("Text");
  });

  test("with lowercase string", () => {
    expect(capitalize("text")).toEqual("Text");
  });

  test("with string starting with number", () => {
    expect(capitalize("1 euro")).toEqual("1 euro");
  });

  test("with string containing number", () => {
    expect(capitalize("Some 1 text")).toEqual("Some 1 text");
  });

});
