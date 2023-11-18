import { describe, test, expect } from "bun:test";
import parseBold from "~/parse-markdown/parseBold";

describe("parse bold markdown", () => {
  test("double asterisks", () => {
    expect(parseBold("**test**")).toBe("<b>test</b>");
  });

  test("double underscores", () => {
    expect(parseBold("__test__")).toBe("<b>test</b>");
  });

  test("parse multiple instances of bold", () => {
    expect(parseBold("**bold1****bold2**")).toBe("<b>bold1</b><b>bold2</b>");
  });

  test("empty string", () => {
    expect(parseBold("")).toBe("");
  });
});
