// (4) Buat Schema 
const mongoose = require('mongoose')

const ListBukuSchema = mongoose.Schema({
    // Buat Schema data
    id_buku: {
        type: String,
        required: true
    },
    judul_buku: {
        type: String,
        required: true
    },
    penulis_buku: {
        type: String,
        required: true
    },
    terbit_buku: {
        type: String,
        required: true
    },
    
})

module.exports = mongoose.model('ListBuku', ListBukuSchema)