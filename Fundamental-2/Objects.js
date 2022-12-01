// Objects here means Dictionary and it works same as Python

const student_data = {
    name: "Ronit",
    Id: 06451,
    Batch : 2024,
    Degree : "Computer Science",
    age : 21,
    // Line 45 for refrence

    birthYear : function (){
        // return 2022 - this.age; 
        // We can also make a new after the computation with this operator
        this.yearBorn = 2022 - this.age
        return this.yearBorn
    },
    

    

}

// Here the key will always be in string
console.log(student_data);

console.log(`The name of the student is ${student_data.name}`);
const Fname = "name";
const id = "Id";
console.log(` ${student_data[Fname]} and his id is ${student_data[id]}`);


// user_data = prompt("What do you want to know about student");
// we will also have to check whether that value exsist or not

// if (student_data[user_data]){
//     console.log(student_data[user_data]);
// }else{
//     alert("False Value");
// }

// If we want to add a new key so
student_data["CurrSemester"] = 5;
console.log(student_data)

// We can also add the function in the key value pair as well, lets say we want to add a key which says number of semester remaning and to calculate it we are creating a new fucntion 

// Arrow function which would simply subtract the current semester from total_sem
const remSem = (currSem) => 8 - currSem;

student_data["remSemester"] = remSem(student_data.CurrSemester);
console.log(student_data)

// Apart from assigning integer, string, bool, we can also have function type as value as well
student_data["calcAge"] = (birth_year) => 2022- birth_year;

console.log(student_data.calcAge(2001));
// In the above method we have to pass the birthdate as well, but whatiff we have to access the value from the same object. For this, the varable name should be same. 

// Lets create another function which would tell my birth date, using the age I have provided in the Object

console.log(student_data.birthYear())
console.log(student_data.yearBorn);
