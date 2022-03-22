import { tagRemover } from "./tagRemover";

test("tagRemover takes a string, and returns the string without HTML tags", () => {
  expect(tagRemover("<p>Hello Hello</p>")).toBe("Hello Hello");
  expect(tagRemover("Hello Hello")).toBe("Hello Hello");
  expect(tagRemover("<p>episodes")).toBe("episodes");
  expect(tagRemover("</p>")).toBe("");
});
