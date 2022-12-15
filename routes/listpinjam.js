// (5) Buat router 
const express = require('express')
const router = express.Router() 
const ListPinjam = require('../models/ListPinjam')

// Create 
router.post('/', async(req, res) => {
    // tampung input 
    const listPinjampost = new ListPinjam({
        id_buku: req.body.id_buku,
        nama_peminjam: req.body.nama_peminjam,
        nama_buku: req.body.nama_buku,
        tanggal_pinjam: req.body.tanggal_pinjam,
        tanggal_pengembalian: req.body.tanggal_pengembalian
    })

    try {
        // simpan data 
        const listPinjam = await listPinjamPost.save()
        // response
        res.json(listPinjam)
    } catch (error) {
        res.json({message: error})
    }
})

// Read
router.get('/', async(req, res) => {
    try {
        const listPinjam = await ListPinjam.find()
        res.json(listPinjam)
    } catch (error) {
        res.json({message: error})
    }
})

// Update 
router.put('/:listPinjamId', async(req, res) => {
    // tampung input 
    const data = {
        id_buku: req.body.id_buku,
        nama_peminjam: req.body.nama_peminjam,
        nama_buku: req.body.nama_buku,
        tanggal_pinjam: req.body.tanggal_pinjam,
        tanggal_pengembalian: req.body.tanggal_pengembalian
    }

    try {
        // update data 
        const listPinjam = await ListPinjam.updateOne({_id: req.params.listPinjamId}, data)
        // response
        res.json(listPinjam)
    } catch (error) {
        res.json({message: error})
    }
})

// Delete 
router.delete('/:listPinjamId', async(req, res) => {
    try {
        // delete data 
        const listPinjam= await ListPinjam.deleteOne({_id: req.params.listPinjamId})
        // response
        res.json(listPinjam)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router