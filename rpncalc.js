const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function rpn(newExpression) {
  let expression = newExpression.split(" ");
  let stack = [];
  if (expression === "") {
    return 0;
  }

  for (let i = 0; i < expression.length; i++) {
    if (!isNaN(expression[i])) {
      stack.push(expression[i]);
    } else {
      let a = stack.pop();
      let b = stack.pop();
      if (expression[i] === "+") {
        stack.push(parseInt(a) + parseInt(b));
      } else if (expression[i] === "-") {
        stack.push(parseInt(b) - parseInt(a));
      } else if (expression[i] === "*") {
        stack.push(parseInt(a) * parseInt(b));
      } else if (expression[i] === "/") {
        stack.push(parseInt(b) / parseInt(a));
      }
    }
  }

  if (stack.length > 1) {
    return "ERROR";
  } else {
    return stack[0];
  }
}
readline.question(`> `, (expression) => {
  console.log(rpn(expression));
  readline.close();
});
