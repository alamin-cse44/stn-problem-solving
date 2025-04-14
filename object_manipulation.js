// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
]


const getBookTitles = (books) => { 
    return books.map(book => book.title)
}

console.log(getBookTitles(books)); // Output: [ 'To Kill a Mockingbird', '1984' ]