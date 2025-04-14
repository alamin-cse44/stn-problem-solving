// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const people = [ 
    {name: "Rehan", age: 27},
    {name: "Sabbir", age: 22},
    {name: "Airin", age: 28},
 ]

 const modifyPersonAge = (people, name, newAge) => { 
    const person = people.find(person => person.name === name);
    if (person) {
        person.age = newAge;
    }
    return people;
  }


  console.log(modifyPersonAge(people, "Sabbir", 23)); 