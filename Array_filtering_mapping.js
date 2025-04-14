// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
    { name: 'Aleya', age: 25, gender: 'female' },
    { name: 'Babul', age: 30, gender: 'male' },
    { name: 'Sabbir', age: 22, gender: 'male' },
    { name: 'Airin', age: 28, gender: 'female' }
  ];

  const getMaleNames = (people) => { 
    return people.filter(person => person.gender === "male").map(person => person.name)
  }

  console.log(getMaleNames(people)); // Output: [ 'Babul', 'Sabbir' ]