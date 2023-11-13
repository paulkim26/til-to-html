import { describe, test, expect } from "bun:test";
import parseMarkdown from "~/parse-markdown";

describe("parse markdown", () => {
  test("markdown empty string", () => {
    const markdown = "";
    const fname = "File Name";
    const expected =
      '<!doctype html>\n<html lang="en">\n<head>\n\t<link rel="stylesheet" href="style.css">\n\t<meta charset="utf-8">\n\t<title>File Name</title>\n\t<script src="index.js"></script>\n\t<meta name="viewport" content="width=device-width, initial-scale=1">\n</head>\n<body>\n\t<div class="search-container"><input id="search-input" placeholder="Search...." type="text" oninput="handleInput(this.value)"></div>\t<div id="post-1" class="post">\n\t</div>\n</body>\n</html>\n';

    expect(parseMarkdown(markdown, fname)).toBe(expected);
  });

  test("filename empty string", () => {
    const markdown = "";
    const fname = "";
    const expected =
      '<!doctype html>\n<html lang="en">\n<head>\n\t<link rel="stylesheet" href="style.css">\n\t<meta charset="utf-8">\n\t<title></title>\n\t<script src="index.js"></script>\n\t<meta name="viewport" content="width=device-width, initial-scale=1">\n</head>\n<body>\n\t<div class="search-container"><input id="search-input" placeholder="Search...." type="text" oninput="handleInput(this.value)"></div>\t<div id="post-1" class="post">\n\t</div>\n</body>\n</html>\n';

    expect(parseMarkdown(markdown, fname)).toBe(expected);
  });

  test("markdown non-empty string", () => {
    const markdown = "This is a test.";
    const fname = "File Name";
    const expected =
      '<!doctype html>\n<html lang="en">\n<head>\n\t<link rel="stylesheet" href="style.css">\n\t<meta charset="utf-8">\n\t<title>File Name</title>\n\t<script src="index.js"></script>\n\t<meta name="viewport" content="width=device-width, initial-scale=1">\n</head>\n<body>\n\t<div class="search-container"><input id="search-input" placeholder="Search...." type="text" oninput="handleInput(this.value)"></div>\t<div id="post-1" class="post">\n\t\t<p>This is a test.</p>\n\t</div>\n</body>\n</html>\n';

    expect(parseMarkdown(markdown, fname)).toBe(expected);
  });
});
