// E2: implement the following function

function isInArray(array, value) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === value) {
      return true;
    }
  }
  return false;
  // returns false if value is not in the array
  // returns true if value is in the array
}

function expect_to_be_equal(actual, expected) {
  if(actual == expected) {
    console.log("Tests passed!")
  } else {
    console.log(`Expected ${expected}, but got ${actual}`);
  }
}

expect_to_be_equal(isInArray([1, 2, 3], 1), true)
expect_to_be_equal(isInArray([1, 2, 3], 4), false)
expect_to_be_equal(isInArray(["12", "Jan", "hello"], "hello"), true)