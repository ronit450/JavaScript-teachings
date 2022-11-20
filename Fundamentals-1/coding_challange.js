
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK 😀

let marks_mass = 78;
let john_mass = 92;
let marks_height = 1.69;
let john_height = 1.95;

let marks_bmi = marks_mass/ (marks_height* marks_height);
let john_bmi = john_mass/ (john_height* john_height);

let markHigherBMI = (marks_bmi > john_bmi);

console.log(markHigherBMI);
if (marks_bmi > john_bmi){
    console.log(`mark ka bmi barha he meri jan jo k he ${marks_bmi}`);
}
else if (john_bmi > marks_bmi){
    console.log(`john ka bmi barha he meri jan jo k he ${marks_bmi}`);
}
else{
    console.log(`Dono ka equal he`);
}