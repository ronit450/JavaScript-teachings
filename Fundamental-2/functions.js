// In this module we will learn about how to use strict mode
'use strict';
// Strict mode will prevent us from using certain perks of JS and will help us to remove bad syntax errors. 

let hello = "Han bhai function men hoon men"
function print_hello(hello){
    console.log(hello)
}

print_hello(hello);


// Function declaration vs Function Expression

// Function Declaration:
function even_odd(number){
    if (number % 2 === 0) {
        return "Yes";
    }else{
        return "No";
    }
}


// Function Expression, this will produce some value and it is mostly used when we have to built any UI function

const even_odd2 = function (number){
    if (number % 2 == 0) {
        return "Yes";
    }else{
        return "No";
    }

}

console.log(`Output from Function Declaration is ${even_odd(16)}`);
console.log(`Output from Function Expression is ${even_odd2(15)}`);

// The third Type of function is arrow function, which is used when we have one line code:

const hello_world = () => console.log("kya hal he boss");
hello_world()

// The empty brackets here () are representing that we don't have any paramters needed in this. 


// But now what if we need some paramters function

const even_odd3 = number => {
        if (number % 2 == 0) {
        return "Yes";
    }else{
        return "No";
    }
}

console.log(`Output from Arrow Function  is ${even_odd3(15)}`);
// For multiple parameter
const age_calculator = (currYear, birthYear) => currYear - birthYear;

console.log(`Output from age calculator is ${age_calculator(2022,2001)}`);