let first = 5;
let second = 7;
console.log(first, second);
// wrong approach
/* first = second;
second = first; */

// approach-1
/* const tempo = first;
first = second;
second = tempo; */

// approach-2---- Destructuring
[first, second] = [second, first];
console.log(first, second);
