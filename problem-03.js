const isPalindrome = (string) => {
  let result = string.split("").reverse().join("");

  return result === string;
};

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
