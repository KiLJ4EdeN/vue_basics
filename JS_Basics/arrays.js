var dogs = ["Bulldog", "Beagle", "Labrador"]; 
var dogs = new Array("Bulldog", "Beagle", "Labrador");  // declaration

console.log(dogs[1]);             // access value at index, first item being [0]
dogs[0] = "Bull Terier";    // change the first item

for (var i = 0; i < dogs.length; i++) {     // parsing with array.length
console.log(dogs[i]);
}

console.log("========");



console.log(dogs.toString());                        // convert to string: results "Bulldog,Beagle,Labrador"
console.log(dogs.join(" * "));                       // join: "Bulldog * Beagle * Labrador"
console.log(dogs.pop());                             // remove last element
console.log(dogs.push("Chihuahua"));                 // add new element to the end
console.log(dogs[dogs.length] = "Chihuahua");        // the same as push
console.log(dogs.shift());                           // remove first element
console.log(dogs.unshift("Chihuahua"));              // add new element to the beginning


delete dogs[0];                         // change element to undefined (not recommended)
console.log(dogs.splice(2, 0, "Pug", "Boxer"));      // add elements (where, how many to remove, element list)
var cats = [];
var birds = [];
var animals = dogs.concat(cats,birds);  // join two arrays (dogs followed by cats and birds)
console.log(dogs.slice(1, 4));                        // elements from [1] to [4-1]
console.log(dogs.sort());                            // sort string alphabetically
console.log(dogs.reverse());                         // sort string in descending order


x = [1, 2, 3, 4, 5]
console.log(x.sort(function(a, b){return a - b}));   // numeric sort
console.log(x.sort(function(a, b){return b - a}));   // numeric descending sort
highest = x[0];    
console.log(highest)                     // first item in sorted array is the lowest (or highest) value
console.log(x.sort(function(a, b){return 0.5 - Math.random()}));     // random order sort