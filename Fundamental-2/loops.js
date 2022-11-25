// // For loop
// for (let i = 0; i < 10; i++){
//     console.log(i)
// }

// // If we dont know the length of array
// const temp_arr = [5,1,4,6,3,5,9];

// for (let i = 0; i < temp_arr.length; i++){
//     console.log(temp_arr[i])
// }

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

// If we want the keys of dictionary 
for (const key of Object.keys(student_data)){
    console.log(key);
}

// Nested Loop
let counter = 1;
let final_matrics = []

for (let i = 0; i < 5; i ++){
    let first_temp = []
    for (let j = 0; j < 5; j++){
        first_temp.push(counter);
        counter += 1;
    }
    final_matrics.push(first_temp);
}


for (let i = 0; i < 5; i ++){
    for (let j = 0; j < 5; j++){
        console.log(final_matrics[i][j]);
    }
  
}

// While Loop
let count = 10;
while(count >0){
    console.log(count);
    count--;
}
