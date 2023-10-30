# til-to-html

This tool converts [TIL](https://simonwillison.net/2022/Nov/6/what-to-blog-about/) posts written in [Markdown](https://www.markdownguide.org/) (.txt, .md) into static HTML pages.

## Features

- Parses a title from the input files. If the first line is followed by two blank lines, a `<h1>` tag will be generated in the HTML.
- Can define a custom output directory with the `--output`/`-o` argument.
- Program will exit with a non-zero exit code in an error occurred.
- Added support for Markdown horizontal rules.
- Can load arguments from a `.toml` configuration file.
- Added search field.

## Setup

### Install Bun

Install [Bun](https://bun.sh/) v1.0.1 (or higher).

Notes for Windows 11 users:

- As of writing, [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) is required if running in Windows.
- WSL requires that [Virtual Machine Platform](https://support.microsoft.com/en-us/windows/enable-virtualization-on-windows-11-pcs-c5578302-6e43-4b4b-a449-8ced115f58e1) is enabled.

#### Install unzip

Bun requires a tool called unzip.

Run the following command in WSL (or alternative installation method):

```bash
sudo apt-get install unzip
```

### Install project dependencies

Navigate to the application's directory and run the following command:

```bash
bun install
```

## Usage

### Run tool

```bash
bun start [-h | --help] [-v | --version] [-o | --output directory] [-c | --config filepath] filepath | directory
```

### Compile executable

```bash
bun run build
```

### Run tool as executable

```bash
til-to-html [-h | --help] [-v | --version] [-o | --output directory] [-c | --config filepath] filepath | directory
```

### Command Line Arguments

| Argument          | Description                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------- |
| `-v`, `--version` | Display version information.                                                                      |
| `-h`, `--help`    | Display usage message.                                                                            |
| `-o`, `--output`  | Set custom output directory. If omitted, files will be output to a folder named `til`. (optional) |
| `-c`, `--config`  | Use a `.toml` configuration file.                                                                 |

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
bun start ./examples/til.txt
```

#### Parse a folder of files

```bash
bun start ./examples/dir
```

#### Parse a folder of files and output to a new directory

```bash
bun start ./examples/dir -o output
```

#### Load a `.toml` configuration file

```bash
bun start -c ./examples/config.toml
```
