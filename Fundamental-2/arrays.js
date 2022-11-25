// Arrays in the javascript works exactly the same as python
const sst_friends_number = [11133,11134,11135,111136];
// Another way to declare the array is 
const sst_friends_name = new Array("varoon", "Ronit", "Dheeraj", "Gunesh");

// now to access any element we will use the same method
console.log(sst_friends_name[0], sst_friends_number[0]);
// .length will give the length of entire array
console.log(sst_friends_name[0].length);

// We can store the multiple type of variables at the same time in this such as
const temp_arr = new Array("Ronit", 11134, true);

// The other methods such as push, pop, out works exactly the same
temp_arr.push("Daharki");
console.log(temp_arr);

// If we want to add elements to the beginning of an array we will use
temp_arr.unshift("Narain Dass");
console.log(temp_arr);


// Now if we want to pop it, it will pop the top element
temp_arr.pop()
console.log(temp_arr);

// For removing any element from the front, we will use 
console.log(temp_arr.shift());

// if we want to know the index of particular element we will use 
console.log(temp_arr.indexOf(11134));
// If it is not present so it will output -1
console.log(temp_arr.indexOf("Narain Dass"));

// The better version of it is includes which will return true if element present
console.log(temp_arr.includes(11134))
console.log(temp_arr.includes("Narain Dass"));
