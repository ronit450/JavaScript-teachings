// alert("Kya hal he bosss");
console.log("bodmos chhora");
// To declare any datatype Dynamicalluy in JS we use let command, this means the type of variable can be changed later in the execution 
let my_Strinf = "My name is Ronit Kataria";

let number1 = 3;
number1 += 3
console.log(number1)

// Boolean Variable
let Ispalindrom = false;
if (Ispalindrom == true){
    alert("The given string is not Palindrome")
}


// Undefined varibales means empty values which means we dont sign it with type of datatype
let undefined_datatype;

// Big int varibale means variable to hold large amount of data that cant be usually represented in regular int
const alsoHuge = BigInt(9007199254740991)

// To know what type of variable we have we can use typeof character
console.log(typeof Ispalindrom);


// There is another type of variable which is known as dynamic which means that if it is int at one point, it can be used as string at other points as well
// As we have defined IsPalindrome variable a booleam value, now if we assign it string value
Ispalindrom = "true";
// Now it should print string variable
console.log(typeof Ispalindrom);

// another datatype we have is null which is not considered as varibale but an object. 
console.log(typeof null); 


// Another way to declare variable is var which means the type of it cannot be changed. 
var hello = "hello";
console.log(typeof hello);
hello = 50;
console.log(typeof hello);


// Comparison Operators
let age_of_ronit = 21;
let age_of_murtaza = 15;

console.log(age_of_murtaza > age_of_ronit);

// to store the string and come concatenation of variable we will use $ sign with  ` which is button above tab

const name = 'Ronit';
const full_name = `Hello My name is ${name}`
console.log(full_name);


// To convert any string into number we use Number method:
let year = '1991';
year = Number(year);
console.log(typeof year);

// Now we can also convert the number ot String
year = String(year);
console.log(typeof year);

// Type coercion:
// This is the basic fundamental resource given by Javascript where it automatically converts the type of any variable:
console.log('Ronit is'+ 21 + 'years old');
// Now this will convert the 21 which is number to a string

console.log('21' - '10' - 5);
// Here 21 and 10 which are strings will be converted as number so - operator automatlicayy converts string numbers to numbers

// same like - operator all other operator such as / * > < will also covert it to number such as
console.log('14'*'2');
console.log('23' > '18');


// Then there comes falsy values which means that they will always fives false in boolean conversion
// There are 5 falsy values which are = null, 0, undefined, NaN(Not a number), ''

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(null));


// As in other language we have two equal signs to check whether two things are equal or not
// here for strict operator we have three equal sign and this is called strict operator and it will not perform any co-ercion
let age = 21;
if (age === 21) console.log("barhe ho gae ho");

// the second is == which will perform co-ercon as well
age = '22';
if (age  == 22) console.log("dono same to he yar");

// Switch Statements
let day = 'wednesday';

switch (day){
    case 'monday':
        console.log("Monday he bhai ye");
        break;
    case 'tuesday':
        console.log("Tuesday bhi sahi hota he ");
                break;

    // Two cases it means for both cases it will print the statement
    case 'Wednesday':
    case 'wednesday':
        console.log("Subah subah ko class hoti he yar");
        break;

    case 'Thrusday':
        console.log("Sab se behtreen din");
        break;

    case 'Friday':
        console.log("LA ka quiz hota he Allah maf kare");
        break;
    // if any of the input does not matches so we write the default case
    default:
        console.log("ye din hi nh exsist karta bhai");

}

// Tenary Operator: It is used when we have one if and else statement so rather using if block we use tenary operator

let my_age = 5;
my_age >= 18 ? console.log("Wah bhai bara ho gya he") : console.log("bacha he bhai tu");

// We can also use tenary operator inside the print or one line statements as well
console.log(`My relative age is ${my_age >= 18 ? my_age = 0 : my_age = 20}`);


console.log(my_age)
