const byteSize = (str) => {
  // write your code here
/**
 * Returns the size of a string in bytes.
 * @param {string} str - The input string.
 * @returns {number} - The size of the string in bytes.
 */
function byteSize(str) {
  // If the string is empty, we can return 0 immediately
  if (str === "") return 0;

  // Create a new Blob object with the string
  // The Blob automatically encodes the string (usually as UTF-8)
  const blob = new Blob([str]);

  // Return the size property of the Blob
  return blob.size;
}

// Examples:
console.log(byteSize('hello world')); // Output: 11
console.log(byteSize('안녕하세요'));   // Output: 15 (5 characters * 3 bytes each)
console.log(byteSize(''));            // Output: 0
	
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
