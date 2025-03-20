// Define Book type
type Book = {
    title: string;
    author: string;
    publishedDate: Date;
    available: boolean;
    genre: Genre; // Changed from string to enum
};

// Define Genre enum
enum Genre {
    Fiction = "Fiction",
    NonFiction = "Non-Fiction",
    Biography = "Biography",
    Science = "Science",
    Fantasy = "Fantasy",
    Thriller = "Thriller",
    History = "History"
}

// addBook function (returns a new array instead of modifying in place)
function addBook(books: Book[], book: Book): Book[] {
    return [...books, book];
}

// searchByGenre function (matches against the correct enum)
function searchByGenre(books: Book[], genre: Genre): Book[] {
    return books.filter((book) => book.genre === genre);
}

// updateAvailability function (returns a new updated array)
function updateAvailability(books: Book[], title: string, available: boolean): Book[] {
    return books.map((book) =>
        book.title === title ? { ...book, available } : book
    );
}

// Example usage
let library: Book[] = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publishedDate: new Date(1925, 4, 10), available: true, genre: Genre.Fiction },
    { title: "1984", author: "George Orwell", publishedDate: new Date(1949, 6, 8), available: false, genre: Genre.Fiction },
    { title: "Steve Jobs", author: "Walter Isaacson", publishedDate: new Date(2011, 10, 24), available: true, genre: Genre.Biography },
];

// Adding a book
library = addBook(library, { title: "Dune", author: "Frank Herbert", publishedDate: new Date(1965, 8, 1), available: true, genre: Genre.Science });
console.log("Updated Library:", library);

// Searching books by genre
const fictionBooks = searchByGenre(library, Genre.Fiction);
console.log("Fiction Books:", fictionBooks);

// Updating book availability
library = updateAvailability(library, "1984", true);
console.log("Library after updating availability:", library);
