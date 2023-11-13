import { describe, test, expect } from "bun:test";
import parseHorizontalRule from "~/parse-markdown/parseHorizontalRule";

describe("parse horizontal rule markdown", () => {
  test("triple asterisks", () => {
    expect(parseHorizontalRule("***")).toBe("<hr />");
  });

  test("triple dashes", () => {
    expect(parseHorizontalRule("---")).toBe("<hr />");
  });

  test("triple underscores", () => {
    expect(parseHorizontalRule("___")).toBe("<hr />");
  });

  test("empty string", () => {
    expect(parseHorizontalRule("")).toBe(false);
  });
});
