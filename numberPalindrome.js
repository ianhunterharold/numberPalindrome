  /**
 * @param {number} x
 * @return {boolean}
 */
// given a number 
// return a boolean 

var isPalindrome = function(x) {
  if (x < 0){
    return false; 
  }
    // negative numbers are not palindromes 

  let turnToString = x.toString();
  
  for (let i=0, j = turnToString.length -1; i < (turnToString.length/2); i++, j--){
    if (turnToString[i] !== turnToString[j]){
      return false;
    }
  }
  return true;
};
const pizza = 10000001;
isPalindrome(pizza)

// as a human step

// compare first and last 
// if they are not the same return false 
// if you continue up until the mid point and the numbers are the same they are true 

// negative - return false 

// as a programer 
// if num is neg return false 
// change the integer into a string 
// two pointers, first and last, compare values
// if not the same return false 
// final return true 





