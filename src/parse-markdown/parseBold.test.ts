import { describe, test, expect } from "bun:test";
import parseBold from "~/parse-markdown/parseBold";

describe("parse bold markdown", () => {
  test("double asterisks", () => {
    expect(parseBold("**test**")).toBe("<b>test</b>");
  });

  test("double underscores", () => {
    expect(parseBold("__test__")).toBe("<b>test</b>");
  });

  test("empty string", () => {
    expect(parseBold("")).toBe("");
  });
});
