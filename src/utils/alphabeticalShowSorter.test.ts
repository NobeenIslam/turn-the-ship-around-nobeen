import shows from "../shows.json";
import { alphabeticalShowSorter } from "./alphabeticalShowSorter";

test("shorts shows alphabetically by name", () => {
  expect(alphabeticalShowSorter(shows[0], shows[0])).toBe(0);
  expect(alphabeticalShowSorter(shows[0], shows[1])).toBe(1);
  expect(alphabeticalShowSorter(shows[1], shows[0])).toBe(-1);
});
