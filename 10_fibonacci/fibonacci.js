const fibonacci = function(num) {
    num = parseInt(num);

    if (num < 0) return 'OOPS';

    if (num < 1) return 0;

    if (num < 3) return 1;

    let total = 1;
    let last = 1;
    let temp = 1;

    for (let i = 2; i < num; i++) {
        temp = total;
        total = last + total;
        last = temp;        
    }

    return total
};

// Do not edit below this line
module.exports = fibonacci;


// # Exercise 10 - Fibonacci

// Create a function that returns a specific member of the Fibonacci sequence:

// > A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
// > In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
// > To learn more about Fibonacci sequences, go to: https://en.wikipedia.org/wiki/Fibonacci_sequence

// ```javascript
// fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6); // returns 8
// ```
