function compareNumbers(num1, num2) {
  if (!num1 || !num2) return "Please input two numbers";

  const firstFrase = createFirstFrase(num1, num2);
  const secondFrase = createSecondFrase(num1, num2);

  return `${firstFrase} ${secondFrase}`;
}

function createFirstFrase(num1, num2) {
  let firstFrase = `The numbers ${num1} and ${num2}`;
  let ifNot = "are not equal.";

  if (num1 === num2) {
    ifNot = "are equal.";
  }

  return `${firstFrase} ${ifNot}`;
}

function createSecondFrase(num1, num2) {
  const sum = num1 + num2;
  let compare10 = "lesser";
  let compare20 = "lesser";

  if (sum > 10) {
    compare10 = "larger";
  }

  if (sum > 20) {
    compare20 = "larger";
  }

  return `The sum is ${sum}, that is ${compare10} than 10 and ${compare20} and than 20.`;
}

console.log(compareNumbers(12, 12));
