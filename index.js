function hasTargetSum(array, target) {
  // iterate over all elements in array 
  for (let i = 0; i < array.length; i++){
    // for every array[i], iterate over the rest of element (array[j])
    for (let j = i + 1; j < array.length; j++){
      // test if array[i] + array [j] == target
      if(array[i] + array[j] == target){
        return true;
      }
    }
  }
  // if addition of any of the two elements in array is not == target, return false
  return false;
}

/*
hasTargetSum([3, 8, 12, 4, 11, 7], 10);
// returns true, since 3 and 7 add up to 10
hasTargetSum([22, 19, 4, 6, 30], 25);
// returns true, since 19 and 6 add up to 25
hasTargetSum([1, 2, 5], 4);
// returns false, since no pair of numbers adds up to 4
*/

/* 
  Write the Big O time complexity of your function here
  O(n2)
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
