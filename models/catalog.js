const mongoose = require('mongoose');

const catalog = mongoose.Schema({
    jenisPakaian: {
        type: String,
        required: true
    },
    bahanPakaian: {
        type: String,
        required: true
    },
    harga: {
        type: Number,
        required: true
    },
    stok: {
        type: Number, 
        required: true
    },
    createdAt: {
        type: Date,
        default: Date()
    },
    updatedAt: {
        type: Date,
        default: Date()
    }
});

module.exports = mongoose.model('Catalog', catalog);