# CRUSH.md

## Build/Lint/Test Commands

- **Build:** `npm run build` or `pnpm run build`
- **Lint:** `npm run lint` or `pnpm run lint`
- **Develop:** `npm run dev` or `pnpm run dev`
- **Preview:** `npm run preview` or `pnpm run preview`
- **Run Single Test:** (No explicit single test command found. Assume `npm test <file_path>` if a testing framework is introduced.)

## Code Style Guidelines

- **Imports:** Use absolute imports where possible for components and utilities within the `src` directory.
- **Formatting:** Adhere to ESLint rules as configured in `eslint.config.js`.
- **Types:** Use TypeScript consistently for all new and modified code, leveraging interfaces and types for clear data structures.
- **Naming Conventions:**
    - Components: PascalCase (e.g., `Header.tsx`)
    - variables/functions: camelCase (e.g., `handleButtonClick`)
    - CSS classes/files: kebab-case (e.g., `index.css`)
- **Error Handling:** Implement robust error handling using `try-catch` blocks for asynchronous operations and API calls.
- **Component Structure:** Keep components focused on a single responsibility.
- **TailwindCSS:** Prefer TailwindCSS utility classes for styling, avoiding inline styles.
