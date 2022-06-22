var x = "2";
try { 
    if(x == "")  throw "empty";                 // error cases
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x > 10)   throw "too high";
}
catch(err) {                                    // if there's an error
    console.log("Input is " + err);             // output error
    console.error(err);                         // write the error in console
}
finally {
    console.log("Done Executing.");              // executed regardless of the try / catch result
    console.log("The number Entered Was: " + x)
}