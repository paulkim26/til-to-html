import { describe, test, expect } from "bun:test";
import parseLink from "~/parse-markdown/parseLink";

describe("parse link markdown", () => {
  test("url with label", () => {
    expect(parseLink("[www.example.com](Example)")).toBe(
      '<a href="Example">www.example.com</a>',
    );
  });

  test("url with no label", () => {
    expect(parseLink("[www.example.com]()")).toBe("[www.example.com]()");
  });

  test("label with no url", () => {
    expect(parseLink("[](Example)")).toBe("[](Example)");
  });

  test("empty string", () => {
    expect(parseLink("")).toBe("");
  });
});
