const sumOfArray = (numbers) => {
  let sum = 0;

  for (let number of numbers) {
     sum = sum + number;
  }
  return sum;
};

console.log(sumOfArray([1, 3, 5]));
