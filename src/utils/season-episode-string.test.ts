import episodes from "../episodes.json";
import { seasonEpisodeString } from "./season-episode-string";

test("greet returns a string, greeting the passed name", () => {
  expect(seasonEpisodeString(episodes[0])).toBe("S01E01");
  expect(seasonEpisodeString(episodes[1])).toBe("S01E02");
  expect(seasonEpisodeString(episodes[2])).toBe("S01E03");
  expect(seasonEpisodeString(episodes[9])).toBe("S01E10");
});
