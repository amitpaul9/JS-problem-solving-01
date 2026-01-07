let count = 0;

const vowelscounter = (v) => {
  let vowelLowerCase = v.toLowerCase();
  let vowels = "aeiou";

  for (vowel of vowelLowerCase) {
    if (vowels.includes(vowel)) {
      count++;
    }
  }
  return count;
};

console.log(vowelscounter("programming"));
