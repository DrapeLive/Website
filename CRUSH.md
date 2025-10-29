# Project Guidelines for Drape Website

## Build and Development Commands

- **Install Dependencies:** `pnpm install`
- **Development Server:** `pnpm dev`
- **Build Project:** `pnpm build`
- **Run Linter:** `pnpm lint`
- **Type Check:** `pnpm run tsc` (Implicitly run by `next build`, but useful for standalone checks)

## Code Style and Conventions

- **Language:** TypeScript
- **Framework:** Next.js, React
- **Formatting:** Enforced by ESLint (using `eslint-config-next`). Run `pnpm lint` to check for issues.
- **Typing:** Strict typing is enforced (`"strict": true` in `tsconfig.json`). Ensure all code is type-safe.
- **Imports:** Prefer absolute imports using the `@/` alias for modules within the `src` directory (e.g., `import { Component } from '@/components/Component';`).
- **Naming Conventions:**
    - **Components:** PascalCase (e.g., `MyComponent.tsx`)
    - **Variables/Functions:** camelCase (e.g., `myVariable`, `myFunction`)
    - **Files:** kebab-case for directories and component files (e.g., `my-component.tsx`), or `index.ts` for barrel files.

## Error Handling

- Implement robust error handling, especially for API calls and external interactions.
- Use `try...catch` blocks for asynchronous operations.

## Testing

- Currently, there are no explicit test commands configured in `package.json`. If adding tests, consider using Jest or React Testing Library, following a pattern like `*.test.ts` or `*.spec.ts` for test files.
- To run all tests (if a testing framework is added): `pnpm test`
- To run a single test file: `pnpm test <path_to_test_file>` (This command will vary depending on the chosen testing framework.)
