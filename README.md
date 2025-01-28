# React TypeScript Template

This repository provides a boilerplate template for a React project using TypeScript. It includes configurations for Vite, ESLint, Github workflow, Prettier and Husky for pre-commit hooks to enforce linting and formatting.

---

## Features

- **React with TypeScript**: Provides strong typing support and modern React features.
- **ESLint**: Configured for linting TypeScript and React code.
- **Prettier**: Ensures consistent code formatting.
- **Vite**: Super fast development server and build tool.
- **GitHub Actions**: Automates workflows for building, testing, and linting project.
- **Husky**: Pre-commit hooks to ensure code quality before committing.
- **Folder Structure**: A well-organized project layout for scalability and maintainability.

---

## Folder Structure

```
project-root/
├── .github/
│   └── workflows/
│       └── ci-pipeline.yml # GitHub Actions workflow for CI
├── .husky/               # Husky configuration for git hooks
├── public/               # Static assets
├── src/
│   ├── assets/           # Static assets like images, fonts, etc.
│   ├── components/       # Reusable React components
│   │   ├── Example/      # Example component folder
│   │      ├── Example.tsx
│   │      └── index.ts   # File for simplified imports
│   ├── constants/        # Static values and constants
│   ├── hooks/            # Custom React hooks
│   ├── layouts/          # Layout components for consistent page structure
│   ├── messages/         # Application messages and text
│   ├── pages/            # Page components for routing
│   │   ├── HomePage/
│   │      ├── HomePage.tsx
│   │      └── index.ts   # File for simplified imports
│   ├── services/         # API calls and service logic
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions and helpers
│   ├── App.tsx           # Main App component
│   ├── main.tsx          # Main entry file for the application
│   ├── index.tsx         # Entry point of the application
│   └── vite-env.d.ts     # Environment declaration
├── .commitlintrc.json    # Commitlint configuration
├── .gitignore            # Git ignore file
├── .lintstagedrc.json    # Lint-staged configuration
├── .prettierignore       # Files and folders to ignore by Prettier
├── .prettierrc.json      # Prettier configuration
├── .eslint.config        # ESLint configuration
├── package.json          # Project dependencies and scripts
├── README.md             # Documentation 
├── tsconfig.app.json     # TypeScript configuration for app
├── tsconfig.json         # TypeScript configuration
├── tsconfig.node.json    # TypeScript configuration for Node.js
├── vite.config.ts        # Vite configuration
```

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/dmromaniv/react-ts-template.git
   cd react-ts-template
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173/` to view the template.

---

## Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run lint:fix`: Fixes code quality issues detected by ESLint.
- `npm run format`: Formats the code using Prettier.
- `npm run format:check`: Checks if the code is properly formatted using Prettier.
- `npm run check-types`: Runs TypeScript type checking.
- `npm run prepare`: Automatically sets up Husky Git hooks.

---

## ESLint and Prettier

### ESLint

ESLint is configured to work seamlessly with TypeScript and React. The configuration file (`eslint.config`) includes recommended rules for TypeScript and React.

### Prettier

Prettier is set up to ensure consistent code formatting. Configuration options are defined in `.prettierrc`, and unnecessary files are ignored via `.prettierignore`.

To manually format code, run:

```bash
npm run format
```

---

## Husky

Husky is set up to enforce linting and formatting before every commit. This ensures that code pushed to the repository adheres to defined quality standards.

### Setting Up Husky

Husky is pre-configured in this template. To install Husky hooks, run:
```bash
npx husky install
```

#### Pre-commit Hook

The pre-commit hook automatically runs ESLint and Prettier checks via `lint-staged` to ensure code quality. 

- You can find the hook configuration in the `.husky/pre-commit file:`

#### Commit-msg Hook

Husky is also configured with a commit-msg hook to enforce consistent commit messages using `commitlint`. This ensures that all commit messages follow the Conventional Commits standard.

- The commit-msg hook is configured in the `.husky/commit-msg file:`

---

## GitHub Actions


#### Branch Protection

Pushes directly to the main or dev branches are prohibited to ensure code quality. All changes must go through a pull request process.

#### Workflow:

The workflow runs on push and pull request. It performs the following steps:

- Dependency Installation: Installs project dependencies using Node.js.

- Linting and Formatting: Ensures code adheres to ESLint and Prettier rules, runs types checking.

- Building: Runs build.

---

## Vite

Vite is used as the build tool and development server for this project, providing fast performance and an intuitive setup. The configuration is defined in `vite.config.ts`.

To start the development server:

```bash
npm run dev
```

To build the application for production:

```bash
npm run build
```





