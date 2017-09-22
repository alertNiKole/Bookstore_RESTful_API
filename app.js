/* Bookstore API, written with Traversy */

//  Required elements/modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Client folder path
app.use(express.static(__dirname+'/client'));

//  Include Middleware 
app.use(bodyParser.json());

//  Required / Includes [Objects]
Genre = require('./models/genre'); //include Genre model
Book = require('./models/book'); //include Book model
Type = require('./models/type'); //include Type model

//  Establish Connection(s)
// Mongoose Connection
mongoose.connect('mongodb://localhost/bookstore' ,{
    useMongoClient: true,
    /* other options */
  });

  const db = mongoose.connection;

/*/ Landing Route /*/
app.get('/', (req, res) => {
    res.send('Please navigate to /api/books or api/genres');
});

//GET [ALL]
app.get('/api/genres', (req, res) => {
    Genre.getGenres((err, genres) => {
        if(err) {
            throw err;
        }
        res.json(genres);
    });
});


//GET[ONE]


//GET [ONE] GENRES [by id]
app.get('/api/genres/:_id', (req, res) => {
    Genre.getGenresById(req.params._id,(err, genre) => {
        if(err) {
            throw err.message;
        }
        res.json(genre);
    });
});

//[PUT/POST] (remove for production load)

app.post('/api/genres/', (req, res) => {
    let genre = req.body;
    Genre.addGenre(genre, (err, genres)=> {
        if(err) {
            throw err.message;
        }
        res.json(genre);
    }); 
});

//[PUT]  Update genre (remove for production load)

app.put('/api/genres/', (req, res) => {
    let id = req.params._id;
    let genre = req.body;
    Genre.updateGenre(id, genre, (err, genres) => {
        if(err) {
            throw err.message;
        }
        res.json(genre);
    }); 
});

//[DELETE] Genre
app.delete('/api/genres/:_id', (req, res) => {
    let id = req.params.id;
    Genre.removeGenre(id, (err, genre) =>{
        if(err) {
            throw err.message;
        }
        res.json(genre);
    });
});

/*       BOOKS         */

//GET [ALL] BOOKS

app.get('/api/books', (req, res) => {
    Book.getBooks((err, books) => {
        if(err) {
            throw err;
        }
        res.json(books);
    });
});


//GET [ONE] BOOK [by id]
app.get('/api/books/:_id', (req, res) => {
    Book.getBookById(req.params._id,(err, book) => {
        if(err) {
            throw err.message;
        }
        res.json(book);
    });
});

//PUT/POST

app.post('/api/books/', (req, res) => {
    let book = req.body;
    Book.addBook(book, (err, books)=> {
        if(err) {
            throw err.message;
        }
        res.json(book);
    }); 
});

//Update Books

app.put('/api/books/', (req, res) => {
    let query = {_id, id};
    let update ={
        name: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        buy_url: book.buy_url
    };
    Book.findOneAndUpdate(query, update, options, callback);
});


//DELETE BOOKS

app.delete('/api/books/:_id', (req, res) => {
    let id = req.params.id;
    Book.removeBook(id, (err, book) =>{
        if(err) {
            throw err.message;
        }
        res.json(book);
    });
});

/* TYPES */
//GET  TYPES [ALL]

app.get('/api/types/', (req, res) => {
    Type.getTypes((err, types) => {
        if(err) {
            throw err.message;
        }
        res.json(types);
    });
});

//GET[ONE]
//PUT/POST
//DELETE

/*/ Initialize Server /*/
app.listen(3716);
console.log('The goose is cooking on 3716');