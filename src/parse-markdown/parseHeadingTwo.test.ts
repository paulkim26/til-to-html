import { describe, test, expect } from "bun:test";
import parseHeadingTwo from "~/parse-markdown/parseHeadingTwo";

describe("parse heading two markdown", () => {
  test("double pound", () => {
    expect(parseHeadingTwo("## test")).toBe("<h2>test</h2>");
  });

  test("empty string", () => {
    expect(parseHeadingTwo("")).toBe(false);
  });
});
