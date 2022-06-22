var pi = 3.141;
console.log(pi.toFixed(0));          // returns 3
console.log(pi.toFixed(2));          // returns 3.14 - for working with money
console.log(pi.toPrecision(2));      // returns 3.1
console.log(pi.valueOf());           // returns number

console.log(Number(true));           // converts to number
console.log(Number(new Date()));      // number of milliseconds since 1970
console.log(parseInt("3 months"));   // returns the first number: 3
console.log(parseFloat("3.5 days")); // returns 3.5
console.log(Number.MAX_VALUE);        // largest possible JS number
console.log(Number.MIN_VALUE);        // smallest possible JS number
console.log(Number.NEGATIVE_INFINITY);// -Infinity
console.log(Number.POSITIVE_INFINITY);// Infinity