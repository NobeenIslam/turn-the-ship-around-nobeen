import episodes from "../episodes.json";
import isSearchTermPresent from "./isSearchTermPresent";

test("greet returns a string, greeting the passed name", () => {
  expect(isSearchTermPresent(episodes[0], "bastard son")).toBe(true);
  expect(isSearchTermPresent(episodes[0], "BASTARD son")).toBe(true);

  expect(isSearchTermPresent(episodes[1], "bastard son")).toBe(false);
  expect(isSearchTermPresent(episodes[2], "bastard son")).toBe(false);
  expect(
    isSearchTermPresent(episodes[9], "finds himself in an unfamiliar")
  ).toBe(true);
});
