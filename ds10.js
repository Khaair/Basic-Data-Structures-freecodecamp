function quickCheck(arr, elem) {
    // change code below this line
  return arr.indexOf(elem) === -1 ? false : true;
    // change code above this line
  }
  
  // change code here to test different cases:
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
  
  // Checks arr for elem, returning -1 if false
  // Ternary operator to return boolean based on result = -1 or not