import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  {
    ignores: [
      "webpack.common.js",
      "webpack.prod.js",
      "webpack.dev.js",
      "tsconfig.json",
      "*.config.js",
      "*.config.ts",
      "scripts/**",
      "config/**",
      "**/*.css", 
      "dist/**", 
      "node_modules/**",
      "*.config.js",
    ],
    files: ["**/*.js", "**/*.ts"],
  },
  {
    rules: {
      "no-console": "warn",
      indent: ["error", 2],
    },
  },
]);
