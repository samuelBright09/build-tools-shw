# Project: Build Tool Showcase
 ## Initial Code Quality Assessment
Upon running ESLint for the first time, the project reported a total of:

1318 problems:

1317 errors

1 warning

Key issues included:

Use of undeclared or unused variables (@typescript-eslint/no-unused-vars)

Linting of compiled output files (dist/bundle.js)

Invalid file types (e.g. .css) being parsed by ESLint

Unexpected token errors caused by lack of proper TypeScript and ESM support

## Issues 
#### Compiled files (dist/) being linted:	
Updated eslint.config.js to include ignores: ['dist/**']
#### Linting .css and other unsupported files	
Updated ignores array to also skip **/*.css
#### Console warning
cleared console.log(error) and replaced with throw new Error(error)

### 858 fixable with npx eslint . --fix

indentation

missing semicolons

spacing

unused vars (in some cases)