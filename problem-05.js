const removeDUblicate = (numbers) => {
  let filters = [];

  for (let number of numbers) {
    if (!filters.includes(number)) {
      filters.push(number);
    }
  }
  return filters;
};

console.log(removeDUblicate([1, 1, 5, 7, 2, 2]));
