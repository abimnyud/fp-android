const Catalog = require('../models/catalog');

const uploadCatalog = async (req, res) => {
    const { jenisPakaian, bahanPakaian, harga, stok } = req.body;
    if(!jenisPakaian || !bahanPakaian || !harga || !stok) return res.status(400).json({
        success: false,
        msg: 'Semua field harus diisi!'
    });
    
    const catalogCheck = await Catalog.findOne({ jenisPakaian, bahanPakaian });
    if(catalogCheck) return res.status(400).json({
        success: false,
        msg: 'Katalog sudah ada'
    });
    
    if(typeof harga !== 'number' || typeof stok !== 'number') return res.status(400).json({
        success: false,
        msg: 'Harga/stok harus berupa angka'
    });
    
    const newCatalog = await new Catalog({
        jenisPakaian,
        bahanPakaian,
        harga,
        stok,
        createdAt: Date.now(),
        updatedAt: Date.now()
    });
    
    try {
        await newCatalog.save()
        res.status(201).json({ 
            success: true,
            msg: `Katalog ${jenisPakaian} berhasil ditambahkan` 
        });
    }
    catch(err) {
        res.status(400).json({
            success: false,
            msg: `Katalog ${jenisPakaian} gagal ditambahkan`
        });
    }
    
}

module.exports = uploadCatalog;