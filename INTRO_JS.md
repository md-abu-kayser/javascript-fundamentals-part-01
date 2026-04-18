# Introduction to Javascript

## 1. Introduction to JavaScript, Run JavaScript in VSCode

JavaScript is a programming language used to build interactive web pages and server-side applications. It can run in a web browser or in Node.js.

To run JavaScript in VS Code:

- Install Node.js from https://nodejs.org
- Open the folder or file in VS Code
- Use the terminal and type `node file.js`
- Optionally use extensions like Code Runner for quick execution
- Use the debugger with a `launch.json` configuration to step through code

Key concepts:

- JavaScript is interpreted at runtime rather than compiled beforehand.
- It supports event-driven and asynchronous programming.
- It is dynamically typed, so variable types can change.

## 2. Maths Needed to Start Learning Programming Language

Programming relies on basic math concepts more than advanced math.

Important topics:

- Arithmetic: `+`, `-`, `*`, `/`, `%`
- Order of operations: parentheses, multiplication/division, addition/subtraction
- Simple algebra: solving for a variable
- Logic and comparison: `>`, `<`, `===`, `!==`

Why it matters:

- Writing formulas and calculations
- Manipulating values
- Controlling loops and conditions

## 3. What is a variable, five things you need to declare a variable

A variable stores a value that can be used later in the program.

To declare a variable in JavaScript you need:

1. A keyword: `var`, `let`, or `const`
2. A name: a valid identifier
3. Optional initialization: assigning a value when declared
4. Scope: where the variable is available in code
5. Correct syntax: no invalid characters and proper punctuation

Example:

```js
let age = 25;
const name = "Alice";
var price = 99.99;
```

Important details:

- `let` is block-scoped and can be reassigned.
- `const` is block-scoped and cannot be reassigned after initialization.
- `var` is function-scoped or global and has different hoisting behavior.

## 4. Variable data types, Numeric, String, Boolean

JavaScript has several primitive data types. The most common are:

- Number: `42`, `3.14`, `-7`
- String: `"hello"`, `'world'`, `` `template` ``
- Boolean: `true`, `false`

Examples:

```js
let score = 100;
let title = "JavaScript";
let isReady = true;
```

Why each matters:

- Numbers are used for calculations.
- Strings are used for text and messages.
- Booleans are used for conditions and decisions.

## 5. JavaScript Keyword, Variable name naming convention

JavaScript keywords are reserved words with special meaning in the language.

Common keywords include:

- `var`, `let`, `const`
- `function`, `return`
- `if`, `else`, `switch`, `case`
- `for`, `while`, `break`, `continue`
- `try`, `catch`, `class`, `extends`, `import`, `export`

Naming conventions:

- Use `camelCase` for variables and functions: `firstName`, `calculateTotal`
- Use `PascalCase` for classes: `Person`, `Car`
- Avoid reserved words as names
- Start names with a letter, `$`, or `_`
- Do not use spaces or hyphens

Good examples:

```js
let userAge = 30;
const maxScore = 100;
function calculateSum(a, b) {
  return a + b;
}
```

## 6. Know the fundamentals of JS Numbers

JavaScript uses the `Number` type for most numeric values.

Key facts:

- All normal numbers are stored as floating point values.
- Integers and decimals use the same type.
- Special values exist: `NaN`, `Infinity`, `-Infinity`.

Examples:

```js
let x = 10;
let y = 3.5;
let invalid = NaN;
let big = Infinity;
```

Common behaviors:

- `0.1 + 0.2` is not exactly `0.3` because of floating-point precision.
- Use `Number.isNaN(value)` to check for `NaN` safely.
- Use `parseInt("42")` and `parseFloat("3.14")` to convert strings.

## 7. Mathematical operation shorthand

JavaScript supports shorthand operators for updating values.

Common shorthand operators:

- `+=`, `-=`, `*=`, `/=`, `%=` for update assignment
- `++` and `--` for increment and decrement

Example:

```js
let count = 0;
count += 5; // count = count + 5
count--; // count = count - 1
```

Also useful:

- Exponentiation: `2 ** 3 === 8`
- Remainder: `10 % 3 === 1`

### Interview Preparation

1. Practice fundamentals: variables, data types, operators, and simple code samples.
2. Understand key concepts: scope, hoisting, closures, async vs sync, `let`/`const` behavior.
3. Prepare common answers: `==` vs `===`, `let` vs `const`, variable declaration rules.
4. Practice coding problems: average calculations, loops, and condition logic.
5. Explain with examples: use short code snippets when describing concepts.
6. Review VS Code workflow: opening files, running `node file.js`, and using the debugger.

---
