# til-to-html

This tool converts [TIL](https://simonwillison.net/2022/Nov/6/what-to-blog-about/) posts written in [Markdown](https://www.markdownguide.org/) into static HTML pages.

## Setup

1. Install [Bun](https://bun.sh/) v1.0.1 (or higher). Note: as of this version, [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) is required if running in Windows.
2. Install dependencies with:

```bash
bun install
```

## Usage

### Run tool

```bash
bun start [-h | --help] [-v | --version] [-o | --output directory] filename | directory
```

### Compile executable

```bash
bun run build
```

### Run tool as executable

```bash
til-to-html [-h | --help] [-v | --version] [-o | --output directory] filename | directory
```

### Command Line Arguments

| Argument          | Description                                                                                        |
| ----------------- | -------------------------------------------------------------------------------------------------- |
| `--version`, `-v` | Display version information.                                                                       |
| `--help`, `-h`    | Display usage message.                                                                             |
| `--output`, `-o`  | Set custom output directory. If ommitted, files will be output to a folder named `til`. (optional) |

### Examples

#### View version information

```bash
bun start -v
```

#### View usage message

```bash
bun start -h
```

#### Parse 1 file

```bash
bun start examples/til.txt
```

#### Parse a folder of files

```bash
bun start examples/dir
```

#### Parse a folder of files and output to a new directory

```bash
bun start examples/dir -o output
```

## Additional Features

- Parses a title from the input files. If the first line is followed by two blank lines, a `<h1>` tag will be generated in the HTML.
- Can define a custom output directory with the `--output`/`-o` argument.
