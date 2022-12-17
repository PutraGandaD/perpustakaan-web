// (5) Buat router 
const express = require('express')
const router = express.Router() 
const ListBuku = require('../models/ListBuku')

// Create 
router.post('/', async(req, res) => {
    // tampung input 
    const listBukuPost = new ListBuku({
        id_buku: req.body.id_buku,
        judul_buku: req.body.judul_buku,
        penulis_buku: req.body.penulis_buku,
        terbit_buku: req.body.terbit_buku
    })

    try {
        // simpan data 
        const listBuku = await listBukuPost.save()
        // response
        res.json(listBuku)
    } catch (error) {
        res.json({message: error})
    }
})

// Read
router.get('/', async(req, res) => {
    try {
        const listBuku = await ListBuku.find()
        res.json(listBuku)
    } catch (error) {
        res.json({message: error})
    }
})

// Update 
router.put('/:listBukuId', async(req, res) => {
    // tampung input 
    const data = {
        id_buku: req.body.id_buku,
        judul_buku: req.body.judul_buku,
        penulis_buku: req.body.penulis_buku,
        terbit_buku: req.body.terbit_buku
    }

    try {
        // update data 
        const listBuku = await ListBuku.updateOne({_id: req.params.listBukuId}, data)
        // response
        res.json(listBuku)
    } catch (error) {
        res.json({message: error})
    }
})

// Delete 
router.delete('/:listBukuId', async(req, res) => {
    try {
        // delete data 
        const listBuku = await ListBuku.deleteOne({_id: req.params.listBukuId})
        // response
        res.json(listBuku)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router