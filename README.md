# Unexpected String Concatenation in JavaScript

This repository demonstrates a common, yet easily overlooked, bug in JavaScript related to loose typing and implicit type coercion.  The `myFunction` adds a number and a string, resulting in string concatenation rather than numerical addition. This behavior can lead to unexpected results and errors if not handled carefully.

## Bug Description
The bug arises from JavaScript's dynamic typing. When adding a number and a string, JavaScript implicitly converts the number to a string and performs string concatenation instead of numerical addition.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js`.
3. Run the code using a JavaScript runtime (e.g., Node.js).
4. Observe the unexpected output.

## Solution
The solution involves explicit type checking or conversion to ensure that both operands are numbers before performing the addition. This is shown in `bugSolution.js`.