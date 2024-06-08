/**
 * Checks if an array contains a subarray with a sum equal to the target sum.
 *
 * @param {Array} arr - The input array.
 * @param {number} target - The target sum.
 * @return {boolean} Returns true if a subarray with the target sum is found, otherwise false.
 */
function hasSubarrayWithSum(arr, target) {
  // Initialize the start and currentSum variables
  let start = 0;
  let currentSum = 0;

  // Iterate through the array
  for (let end = 0; end < arr.length; end++) {
    // Add the current element to the running sum
    currentSum += arr[end];

    // While currentSum is larger than target, move the start pointer to the right
    while (currentSum > target && start <= end) {
      currentSum -= arr[start];
      start++;
    }
    // Check if the currentSum is equal to the target
    if (currentSum === target) {
      return true;
    }
  }

  // Return false if no subarray with the target sum is found
  return false;
}
  
  // Example usage:
  const arr = [4, 2, 7, 1, 9, 5];
  const target = 17;
  console.log(hasSubarrayWithSum(arr, target)); // Output: true
  
