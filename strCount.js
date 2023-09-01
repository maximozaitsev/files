const obj = {
  first: 1,
  second: 2,
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null,
};

function strCount(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      return obj[key];
    }
  }
  return false;
}

const test = strCount(obj);
console.log(test);
