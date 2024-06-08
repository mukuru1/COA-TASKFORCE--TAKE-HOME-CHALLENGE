/**
 * Transforms a given string based on its length.
 *
 * @param {string} str - The input string.
 * @return {string} The transformed string. If the length is divisible by both 3 and 5,
 *                  the string is reversed and each character is replaced with its ASCII
 *                  code. If the length is divisible by 3 but not 5, the string is reversed.
 *                  If the length is divisible by 5 but not 3, each character is replaced
 *                  with its ASCII code. If the length is not divisible by 3 or 5, the string
 *                  is returned as is.
 */
function transformString(str) {
    const len = str.length;

    // Check if the length is divisible by both 3 and 5 (i.e., 15)
    if (len % 15 === 0) {
        // Divisible by both 3 and 5 (i.e., 15)
        // Reverse the string and map each character to its ASCII code,
        // then join the resulting array with a space as the separator
        return str.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    } else if (len % 3 === 0) {
        // Divisible by 3 but not 5
        // Reverse the string
        return str.split('').reverse().join('');
    } else if (len % 5 === 0) {
        // Divisible by 5 but not 3
        // Map each character to its ASCII code, then join the resulting array with a space as the separator
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    // If not divisible by 3 or 5, return the string as is
    return str;
}
  
  // Example usage:
  console.log(transformString("Hamburger"));         // Output: "regrubmaH"
  console.log(transformString("Pizza"));             // Output: "80 105 122 122 97"
  console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
  console.log(transformString("Example"));           // Output: "Example" (length is 7, not divisible by 3 or 5)
  