const obj = {
  first: 1,
  second: 2,
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null,
};

function strCount(obj) {
  const numbers = [];

  for (const key in obj) {
    if (typeof obj[key] === "number") {
      numbers.push(obj[key]);
    }
  }

  if (numbers.length === 0) {
    return false;
  }

  return numbers;
}

const test = strCount(obj);
console.log(test);
