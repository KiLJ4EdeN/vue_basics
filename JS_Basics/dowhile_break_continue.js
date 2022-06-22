var i = 1;                      // initialize
do {                            // enters cycle at least once
    i *= 2;                     // increment to avoid infinite loop
    console.log(i + ", ");      // output
    } while (i < 100)  


console.log("=========="); 
for (var i = 0; i < 10; i++) {
    if (i == 5) { break; }          // stops and exits the cycle
    console.log(i);                 // last output number is 4
    }


console.log("=========="); 
for (var i = 0; i < 10; i++) {
    if (i == 5) { continue; }       // skips the rest of the cycle
    console.log(i);                 // skips 5
    }