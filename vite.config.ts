// Node modules
import { configDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// Properties
const exludedTestFiles = [
  "playwright-tests/", // Playwright E2E tests
  "src/cosmos/", // Cosmos UI fixtures
  "src/types/", // TypeScript custom data types
  ...configDefaults.exclude,
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./vitest-setup.ts"],
    includeSource: ["src/**/*.{js,ts}"],
    exclude: exludedTestFiles,
    coverage: { exclude: exludedTestFiles }, // coverage report has a different config file than the test, hence the repetition
  },
});
