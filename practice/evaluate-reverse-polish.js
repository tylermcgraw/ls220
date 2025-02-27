/**
 * Evaluate the value of an arithmetic expression in Reverse Polish Notation.
 * Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
 * 
 * @param {string[]} tokens - An array of strings representing an arithmetic expression in RPN
 * @return {number} - The result of the expression
 */

// Algorithm

function evalRPN(tokens) {
    let stack = [];
    tokens.forEach(token => {
      if (/-?\d+/.test(token)) {
        stack.push(Number(token));
      } else if (token === '+') {
        stack.push(
          stack.pop() + stack.pop()
        );
      } else if (token === '-') {
        stack.push(
          - stack.pop() + stack.pop()
        );
      } else if (token === '*') {
        stack.push(
          stack.pop() * stack.pop()
        );
      } else if (token === '/') {
        let num2 = stack.pop();
        let num1 = stack.pop();
        stack.push(Math.trunc(num1 / num2));
      }
    });
    return stack[0];
}

// Test cases
console.log(evalRPN(["2", "1", "+", "3", "*"])); // Expected output: 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // Expected output: 6
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // Expected output: 22
console.log(evalRPN(["4", "3", "-"])); // Expected output: 1
console.log(evalRPN(["3", "11", "+", "5", "-"])); // Expected output: 9