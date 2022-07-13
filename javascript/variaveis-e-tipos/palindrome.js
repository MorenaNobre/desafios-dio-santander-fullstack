//first solution
function checkPalindrome(string) {
  if (!string) return "non-existent string";

  return string.split("").reverse().join("") === string;
}

// console.log(checkPalindrome("radar"));
// console.log(checkPalindrome("gato"));

//===========================================================

//second solution
function checkPalindrome2(string) {
  if (!string) return "non-existent string";

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(checkPalindrome2("radar"))
console.log(checkPalindrome2("gato"))
