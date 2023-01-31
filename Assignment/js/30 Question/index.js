// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.
function calculator(num1, num2, operator) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return "Invalid operator";
    }
  }