// Node modules
import { configDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./vitest-setup.js"],
    includeSource: ["src/**/*.{js,ts}"],
    exclude: [...configDefaults.exclude],
  },
});
