const capitalizer = (words) => {
  let wordArray = words.split(" ");
  let capitalWord = [];
  for (let word of wordArray) {
    let newWord = word[0].toUpperCase() + word.slice(1);
    capitalWord.push(newWord);
  }
  return capitalWord.join(" ");
};

console.log(capitalizer("hello world"));

// let words = "i am amit";
// console.log(words[0].toUpperCase() + words.slice(1));
