// In this file, we will learn about destructuring arrays in JavaScript

// Destructuring is a way to extract data from arrays and objects

const temp_Arr = [1, 2, 3];
// Now if I want to store the thre elements of this array into three different variables so conventioanl way is
const a = temp_Arr[0];
const b = temp_Arr[1];
const c = temp_Arr[2];

// But if I want to do this in a single line, then I can use destructuring
const [x, y, z] = temp_Arr;

// Now if I want to store the first and last element of the array into two different variables so we will simply put a whole it leave it empty
let [first, , last] = temp_Arr;
// now first and last will have 1 and 3 respectiveely
console.log(first, last);

// Now if we want to switch their values such as first will have 3 and last will have 1
[first, , last] = [last, , first];
console.log(first, last);


// We can also do the nested destructuring as well
const nested_Arr = [1, 2, [3, 4]];
// Now if I want to store the first element of the array into i, the second element into j and the third element into k
const [i, , [j, k]] = nested_Arr;