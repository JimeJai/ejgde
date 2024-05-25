const fs = require("fs")
const uuid = require("uuid")
const pathBD = "./baseDatos.json"


function createFile(book) {
    const datoJSON = JSON.stringify(book)
    fs.writeFileSync(pathBD, datoJSON)
    return "DB modificada"
}

function readFile() {
    const booksJson = fs.readFileSync(pathBD, { encoding: "utf-8" });
    const booksJS = JSON.parse(booksJson)
    return booksJS;
}


function getAll() {
    return readFile()
}


function validateBook(book) {
    if (!book.name || !book.author || !book.sold && book.sold != 0) {
        return "Propiedades faltantes"
    } 
    if (typeof book.name != "string") {
        return "Name es un tipo de dato incorrecto"
    }
    if (typeof book.author != "string") {
        return "Author es un tipo de dato incorrecto"
    }
    if (typeof book.sold != "number") {
        return "Sold es un tipo de dato incorrecto"
    }
    return "Valid book"
}


function addBook(book) {
    validateBook(book)

    book.id = uuid.v4() 
    const books = getAll();
    books.push(book)
    createFile(books)
    return "libro creado"
}


function getById(id) {
    const books = readFile()
    const searchedBook = books.find((book) => book.id === id.toString())

    if (!searchedBook) {
        return "No existe el libro"
    }

    return searchedBook
}



function getByName(name) {
    if (typeof name != "string") {
        return "Name es un tipo de dato incorrecto"}
    const books = readFile()
    const searchedBook = books.find((book) => book.name == name)
    return searchedBook
}


function getByAuthor(author) {
    if (typeof author != "string") {
        return "Author es un tipo de dato incorrecto"}
    const books = readFile()
    const searchedBook = books.filter((book) => book.author == author)
    return searchedBook
}


function deleteById(id) {
    const books = getAll()
   const searchedBook = books.find((book) => book.id === id.toString())

 const nuevaDB = books.filter((book) => book.id != id.toString())
        if (!searchedBook) {
            return "No existe el libro"
        }
    
    return createFile(nuevaDB)

}



function modifyBook(book) {
   
    const books = getAll();

    const searchedBook = books.find((bookDB) => book.id.toString() === bookDB.id)
    if (book.name) {
        searchedBook.name = book.name
    }
    if (book.author) {
        searchedBook.author = book.author
    }
    if (book.sold) {
        searchedBook.sold = book.sold
    }
    if (book.tags) {
        searchedBook.tags = book.tags
    }
    createFile(books)
    return "Libro modificado"
}

module.exports = {
    getById,
    getAll,
    addBook,
    getByAuthor,
    getByName,
    modifyBook,
    deleteById,
}