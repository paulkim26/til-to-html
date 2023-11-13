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

## Formatting

This project uses [Prettier](https://prettier.io/) to automatically format its code. To do so, run:

```bash
bun run format
```

## Linting

This project uses [ESLint](https://eslint.org/) to find potential problems in code. To do so, run:

```bash
bun run lint
```

## Testing

This project uses [Bun's built-in test runner](https://bun.sh/docs/cli/test). To run it, run:

```bash
bun test
```

If you add a new module that introduces functions that return a value, please add an accompanying test module in the same directory.

For example, if you add a module name `feature.ts`, please add an accompanying `feature.test.ts` with tests that encompass all potential use cases of the functions within.

## Editor Setup

### Visual Studio Code

To integrate with Visual Studio Code, it is highly recommended to install the following plugins:

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
