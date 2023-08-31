function isVowel(letter) {
  return ["a", "e", "i", "o", "u"].includes(letter.toLowerCase());
}

function vowelOne(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (isVowel(s[i])) {
      result += "0";
    } else {
      result += "1";
    }
  }

  return result;
}

const s = "рello, main";
const convertedString = vowelOne(s);
console.log(convertedString);
