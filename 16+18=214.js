function sumAndCombineUnits(num1, num2) {
  const sumUnits = (num1 % 10) + (num2 % 10);
  const sumTens = (Math.floor(num1 / 10) % 10) + (Math.floor(num2 / 10) % 10);
  const sumHundreds =
    (Math.floor(num1 / 100) % 10) + (Math.floor(num2 / 100) % 10);
  const sumThousands =
    (Math.floor(num1 / 1000) % 10) + (Math.floor(num2 / 1000) % 10);
  const sumTenThousands = Math.floor(num1 / 10000) + Math.floor(num2 / 10000);

  let result =
    String(sumTenThousands) +
    String(sumThousands) +
    String(sumHundreds) +
    String(sumTens) +
    String(sumUnits);

  return parseInt(result);
}

const num1 = 1236;
const num2 = 30977;
const result = sumAndCombineUnits(num1, num2);
console.log(result);
