var abc = "abcdefghijklmnopqrstuvwxyz";
var esc = 'I don\'t \n know';   // \n new line
var len = abc.length;           // string length
console.log(`var abc length is: ${len}`)

// this returns an int
console.log(abc.indexOf("lmno"));            // find substring, -1 if doesn't contain 
console.log(abc.lastIndexOf("lmno"));        // last occurance
console.log(abc.slice(3, 6));                // cuts out "def", negative values count from behind, kinda like indexing tbh
console.log(abc.replace("abc","123"));       // find and replace, takes regular expressions
console.log(abc.toUpperCase());              // convert to upper case
console.log(abc.toLowerCase());              // convert to lower case

console.log(abc.concat(" ", esc));          // abc + " " + str2
console.log(abc.charAt(2));                  // character at index: "c"
console.log(abc[2]);                         // unsafe, abc[2] = "C" doesn't work
console.log(abc.charCodeAt(2));              // character code at index: "c" -> 99

console.log(abc.split(","));                 // splitting a string on commas gives an array
console.log(abc.split(""));                  // splitting on characters
let a = 128
console.log(a.toString(2));               // number to hex(16), octal (8) or binary (2)