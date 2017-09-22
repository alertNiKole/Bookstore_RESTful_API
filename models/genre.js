const mongoose = require('mongoose');

//Schema for Genre

let genreSchema = mongoose.Schema({
    Genre: {
            type: String,
            required: true
    },
    Description:{
        type: String,
        required: false
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

//Export Genre
const Genre = module.exports = mongoose.model('Genre', genreSchema);

// Get Genres
module.exports.getGenres = (callback, limit) => {
	Genre.find(callback).limit(limit);
};

//Add New Genre
module.exports.addGenre = (genre, callback) => {
    Genre.create(genre, callback);
};
 
//Update Genre

module.exports.updateGenre = (id, genre, options, callback) =>  {
    let query = {_id: id};
    let update = {
        name: genre.name
    };
    Genre.findOneAndUpdate(query,update, opions, callback);
};

//Delete Genre
module.exports.removeGenre = (id, callback)=> {
    let query ={_id: id};
Genre.remove(query, callback);
};