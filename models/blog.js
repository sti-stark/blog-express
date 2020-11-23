const mongoose = require('mongoose')
const validator = require('validator')

const Blog = mongoose.model('Test', {
    text1: {
        type: String,
        required: true,
        trim: true
    },
    text2: {
        type: String,
        required: true,
        trim: true
    },
    text3: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = Blog