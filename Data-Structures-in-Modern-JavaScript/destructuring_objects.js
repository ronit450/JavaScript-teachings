// We can apply the same concept of Destructuring to objects as well
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours:{
    monday:{
        open: 12,
        close: 22,
    },
    tuesday:{
        open: 11,
        close: 23,
  },
    wednesday:{
        open: 0, // Open 24 h
        close: 24,
    },
    }
};


// Now we have to create a simple object to retrieve the data from it using destructuring. 
// The names of the variables should be same as the properties of the object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// We also have another methods where we can change the name of the variables while destructuring

// also if the values we are trying to retrieve from the object are not present in the object then it will return undefined so to protect from null values we can use the default values

// without default values
// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;


// with default values
const { name: restaurantName = [], openingHours: hours=[], categories: tags = [], temp = [] } = restaurant;

// though temp does not exist in the object but it will return an empty array

console.log(restaurantName, hours, tags, temp);