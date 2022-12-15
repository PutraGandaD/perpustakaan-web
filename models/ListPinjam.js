// (4) Buat Schema 
const mongoose = require('mongoose')

const ListPinjamSchema = mongoose.Schema({
    // Buat Schema data
    nama_peminjam: {
        type: String,
        required: true
    },
    id_buku: {
        type: String,
        required: true
    },
    nama_buku: {
        type: String,
        required: true
    },
    tanggal_pinjam: {
        type: String,
        required: true
    },
    tanggal_pengembalian: {
        type: String,
        required: true
    }
    
})

module.exports = mongoose.model('ListPinjam', ListPinjamSchema)