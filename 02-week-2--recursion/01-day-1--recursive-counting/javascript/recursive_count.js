function recursiveCount(num = 0) {
  // type your code here
  console.log(num);

  if (num > 0) return recursiveCount(num - 1);
}

if (require.main === module) {
  recursiveCount(10);
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
