# til-to-html

This tool converts TIL posts written in markdown into HTML pages.

## Setup

### Requisites

- [Bun](https://bun.sh/) v1.0.1 or higher

To install dependencies:

```bash
bun install
```

## Usage

### Run in development mode

```bash
bun start [-h | --help] [-v | --version] [-o | --output directory] filename | directory
```

### Compile executable

```bash
bun build
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

## Additional Features

- Parses a title from the input files. If the first line is followed by two blank lines, a `<h1>` tag will be generated in the HTML.
- Can define a custom output directory with the `--output`/`-o` argument.
