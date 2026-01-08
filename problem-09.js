const factorial = (number) => {
  let result = 1;
  if (number < 1) {
    return "number is not valid";
  }
  for (let n = 1; n <= number; n++) {
    result = result * n;
  }
  return result;
};
console.log(factorial(10));
