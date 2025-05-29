# Build Tools Showcase

This project demonstrates a modern frontend setup using **Webpack**, **TypeScript**, **Sass**, **ESLint**, and **Prettier**. It showcases a modular build pipeline with clean source structure, automated asset bundling, and consistent code formatting.

---

##  Project Overview

This web project includes:

- TypeScript for scalable, type-safe JavaScript.
- Sass for modular, nested, and maintainable CSS.
- Webpack for bundling and asset management.
- ESLint for linting and enforcing coding standards.
- Prettier for automatic code formatting.
- Live development server with hot-reloading.
- Copying static assets like JSON or images.
- Optional test setup (if integrated).

---

## Setup and Run Instructions

1. **Push Initial Setup**

git init
git add .
git commit -m "Add setup"
git remote add my repo address
git branch -M main
git push -u origin main

## Build Process Explained
### Webpack
Entry Point: src/scripts/main.ts

### Loaders Used:

ts-loader — transpiles TypeScript to JavaScript.

sass-loader + css-loader + style-loader — compiles and injects .scss and .css styles.

### Plugins:

HtmlWebpackPlugin — injects bundled files into index.html.

CopyWebpackPlugin — copies assets/ folder to dist/.

### TypeScript
Type checking and transpilation configured via tsconfig.json.

Files are located in src/.

### Sass
All Sass files are imported in your main.ts or in SCSS entry points.

Compiled into CSS and injected into the DOM during build.

## Linting and Formatting Strategy
ESLint
Configured to lint all .ts and .js files in src/.

Uses:

@typescript-eslint

eslint-config-prettier

eslint-plugin-import

### Prettier Extension
Used prettier Extension for all formatting 

### Combined with:
Linting: npm run lint

## Available NPM Scripts
Script	Description
dev	Starts Webpack Dev Server
build:	Builds the project for production
lint:	Runs ESLint on all .ts/.js files
test	Runs Jest tests