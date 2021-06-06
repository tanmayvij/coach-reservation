const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    origin: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    departure: {
        type: String,
        required: true
    },
    arrival: {
        type: String,
        required: true
    },
    available: {
        type: [Number],
        default: [...Array(80).keys()].map(n => ++n)
    },
    booked: {
        type: [Number],
        default: []
    }
});

mongoose.model('Train', schema);