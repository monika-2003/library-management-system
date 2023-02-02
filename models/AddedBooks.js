const mongoose = require('mongoose');
const {Schema} = mongoose;

const AddedBooks = new Schema({
    Category: {
        type: String,
        required: true
    },
    Title: {
        type: String,
        required: true
    },
    Id: {
        type: String,
        required: true
    },
    Author: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('addedBooks', AddedBooks);