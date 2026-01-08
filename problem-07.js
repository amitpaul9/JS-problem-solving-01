const evenFiner = (numbers) => {
  let evenNumbers = [];
  for (let number of numbers) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
};

console.log(evenFiner([1, 2, 9, 5, 4]));
