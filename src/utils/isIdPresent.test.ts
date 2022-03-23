import episodes from "../episodes.json";
import isIdPresent from "./isIdPresent";

test("greet returns a string, greeting the passed name", () => {
  expect(isIdPresent(episodes[0], "4952")).toBe(true);
  expect(isIdPresent(episodes[0], "6587")).toBe(false);
  expect(isIdPresent(episodes[1], "4953")).toBe(true);
  expect(isIdPresent(episodes[2], "4954")).toBe(true);
  expect(isIdPresent(episodes[9], "4961")).toBe(true);
});
