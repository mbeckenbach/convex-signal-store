<!-- nx configuration start-->
<!-- Leave the start & end comments to automatically receive updates. -->

# General Guidelines for working with Nx

- When running tasks (for example build, lint, test, e2e, etc.), always prefer running the task through `nx` (i.e. `nx run`, `nx run-many`, `nx affected`) instead of using the underlying tooling directly
- You have access to the Nx MCP server and its tools, use them to help the user
- When answering questions about the repository, use the `nx_workspace` tool first to gain an understanding of the workspace architecture where applicable.
- When working in individual projects, use the `nx_project_details` mcp tool to analyze and understand the specific project structure and dependencies
- For questions around nx configuration, best practices or if you're unsure, use the `nx_docs` tool to get relevant, up-to-date docs. Always use this instead of assuming things about nx configuration
- If the user needs help with an Nx configuration or project graph error, use the `nx_workspace` tool to get any errors

<!-- nx configuration end-->

# Project-Specific Guidelines

- Always use `pnpm` as the package manager. Never use npm or yarn.
- When reading the Nx dependency graph, use the CLI command `npx nx graph --file=stdout` instead of the MCP `nx_workspace` tool. The CLI output is more concise and avoids token limits.
- ALWAYS use Nx CLI generators (`nx g`) for creating Angular-related files such as apps, libraries, components, services, pipes, directives, etc. Never create these files manually.
- When creating new Angular apps, always use: Tailwind CSS v4, CSS (not SCSS), and Playwright for e2e tests. After generation, upgrade Tailwind to v4 and remove v3 artifacts (tailwind.config.js, autoprefixer).
- Always place libraries in the `libs/` directory unless explicitly told otherwise.
- All libraries must be buildable by default. Only make them publishable if explicitly requested.
