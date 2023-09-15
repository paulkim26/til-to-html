# til-to-html

This tool converts TIL posts written in [Markdown](https://www.markdownguide.org/) into HTML pages.

## Status

This project is currently a work in progress. The following features are yet to be implemented:

| Feature                                        | State         |
| ---------------------------------------------- | ------------- |
| Parse a single text file                       | `Complete`    |
| Parse a folder of text files                   | `Complete`    |
| Ability to generate standalone executable tool | `Complete`    |
| Identify and format Markdown titles            | `Complete`    |
| Clear out existing output folder if found      | `Complete`    |
| `--version` option                             | `Complete`    |
| `--help` option                                | `Complete`    |
| `--output` option                              | `Complete`    |
| Parse Markdown headers                         | `In Progress` |
| Parse Markdown links                           | `In Progress` |
| Parse Markdown styled text (i.e. bold, italic) | `In Progress` |
| Parse Markdown blockquotes                     | `In Progress` |
| Parse Markdown lists                           | `In Progress` |
| Parse Markdown code blocks                     | `In Progress` |
| Parse Markdown horizontal rules                | `In Progress` |

See: https://www.markdownguide.org/basic-syntax/

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
