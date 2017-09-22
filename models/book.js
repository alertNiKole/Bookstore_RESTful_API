const mongoose = require('mongoose');

//Schema for  Book

let bookSchema = mongoose.Schema({
    genre: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: false
    },

    author: {
        type: String,
        required: false
    },

    pages: {
        type: String,
        required: false
    },

    image_url: {
        type: String
    },

    buy_url: {
        type: String
    },

    create_date: {
        type: Date,
        default: Date.now
    }
});
    
const Book = module.exports = mongoose.model('Book', bookSchema);

// Get Books
module.exports.getBooks = (callback, limit) => {
	Book.find(callback).limit(limit);
};

//Add Books
module.exports.addBook = ((book, callback) => {
    Book.create(book, callback);
});

//Get a Single Book
module.exports.getBookById = (id, callback) => {
	Book.findById(id, callback);

};


//Update bOOK

module.exports.updateBook = (id, book,  options, callback) =>  {
    let query = {_id: id};
    let update = {
        name: book.title,
        genre: book.genre,
        description:book.description,
        publisher: book.publisher,
        pages: book.pages,
        buy_url: book.buy_url
    };

Book.findOneAndUpdate(query, update, opions, callback);
};
//Delete Books
module.exports.removeBook = (id, callback)=> {
    let query ={_id: id};
Book.remove(query, callback);
};