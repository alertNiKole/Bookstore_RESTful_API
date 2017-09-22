const mongoose = require('mongoose');

//Schema for  Types
let typeSchema = mongoose.Schema({
    
    type: {
            type: String,
            required: true
    },
    description: {
        type: String,
        required: false
    },
    create_date: {
        type: Date,
        default: Date.now
    },
});
    
//Export Genre
const Type = module.exports = mongoose.model('Type', typeSchema);

// Get Genres
module.exports.getTypes = (callback, limit) => {
	Type.find(callback).limit(limit);
};

//Add New Genre
module.exports.addType = (type, callback) => {
    Type.create(type, callback);
};