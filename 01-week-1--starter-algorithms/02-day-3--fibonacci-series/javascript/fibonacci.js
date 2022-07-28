function fibonacci(num) {
  // type your code here

  if (num == 0) {
    return 0;
  } else if (num == 1) {
    return 1;
  }

  let fib = [0, 1];

  let total = 1;

  for (let i = 2; i <= num; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  return fib[fib.length - 1];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("Expecting: 2");
  console.log("=>", fibonacci(3));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("Expecting: 377");
  console.log("=>", fibonacci(14));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
