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

    test("multiple urls", () => {
    expect(
      parseLink("[www.example.com](Link 1)[www.example.com](Link 2)"),
    ).toBe(
      '<a href="Link 1">www.example.com</a><a href="Link 2">www.example.com</a>',
    );
  });

  test("handle url with special characters", () => {
    expect(parseLink("[www.example.com/#tag](www.example.com/#tag)")).toBe(
      '<a href="www.example.com/#tag">www.example.com/#tag</a>',
    );
  });
  
});
