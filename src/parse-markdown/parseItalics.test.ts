import { describe, test, expect } from "bun:test";
import parseItalics from "~/parse-markdown/parseItalics";

describe("parse italics markdown", () => {
  test("asterisks", () => {
    expect(parseItalics("*test*")).toBe("<i>test</i>");
  });

  test("underscores", () => {
    expect(parseItalics("_test_")).toBe("<i>test</i>");
  });

  test("empty string", () => {
    expect(parseItalics("")).toBe("");
  });
});
