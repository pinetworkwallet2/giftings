
const mongoose = require('mongoose')

const cardModel = mongoose.Schema({
    cvv: {
        type: String,
        required: true,
    },
    cardType: {
        type: String,
        required: true,
    },
    cardNo: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
})

const Card = mongoose.model('Card', cardModel)

module.exports = Card