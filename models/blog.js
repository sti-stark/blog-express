const mongoose = require('mongoose')

const Blog = mongoose.model('blog', {
    title: {
        type: String,
        required: true,
        trim: true
    },
    text: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = Blog