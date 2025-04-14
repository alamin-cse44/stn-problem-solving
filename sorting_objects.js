// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
    { make: 'Toyota', model: 'Corolla', year: 2010 },
    { make: 'Honda', model: 'Civic', year: 2008 },
    { make: 'Ford', model: 'Mustang', year: 2015 },
    { make: 'Chevrolet', model: 'Malibu', year: 2012 }
];

const sortCarsByYear = (cars) => {
    return cars.sort((a, b) => a.year - b.year);
}


console.log(sortCarsByYear(cars));