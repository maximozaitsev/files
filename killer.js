// Task.
// Given a dictionary with all the names of the suspects
// and everyone that they have seen on that day
// and also a list of the names of the dead people:
// return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'

const suspectInfo = {
  James: ["Jacob", "Bill", "Lucas"],
  Johnny: ["David", "Kyle", "Lucas"],
  Peter: ["Lucy", "Kyle"],
};
const dead = ["Lucas", "Bill"];

function killer(suspectInfo, dead) {
  const resultKeys = [];

  for (const key in suspectInfo) {
    const valuesToCheck = suspectInfo[key];
    let allValuesFound = true;

    for (const value of dead) {
      if (!valuesToCheck.includes(value)) {
        allValuesFound = false;
        break;
      }
    }

    if (allValuesFound) {
      resultKeys.push(key);
    }
  }
  return resultKeys.join(", ");
}

const test = killer(suspectInfo, dead);
console.log(test);

// Более простое решение
// function killer(suspectInfo, dead) {
//   return Object.keys(suspectInfo).find((x) =>
//     dead.every((y) => suspectInfo[x].includes(y))
//   );
// }
