import episodes from "../episodes.json";
import { createEpSelectorName } from "./createEpSelectorName";

test("greet returns a string, greeting the passed name", () => {
  expect(createEpSelectorName(episodes[0])).toBe("S01E01 - Winter is Coming");
  expect(createEpSelectorName(episodes[1])).toBe("S01E02 - The Kingsroad");
  expect(createEpSelectorName(episodes[2])).toBe("S01E03 - Lord Snow");
  expect(createEpSelectorName(episodes[9])).toBe("S01E10 - Fire and Blood");
});
