const { date } = require('joi');
const Catalog = require('../models/catalog');

const updateCatalog = async (req, res) => {
    const { id } = req.body;
    const { jenisBaru, bahanBaru, hargaBaru, stokBaru } = req.query;
    
    if (!id) return res.status(400).json({
        success: false,
        msg: 'Field id harus diisi!'
    });

    
    try {
        const newCatalog = await Catalog.findOneAndUpdate({ _id: id }, { 
            jenisPakaian: jenisBaru, 
            bahanPakaian: bahanBaru, 
            harga: hargaBaru, 
            stok: stokBaru, 
            updatedAt: Date.now() 
        }, { new: true });

        if(!newCatalog) return res.status(404).json({
            success: false,
            msg: `Produk dengan ${id} tidak ada`
        });
        
        return res.status(200).json({
            success: true,
            msg: `Produk dengan id ${newCatalog._id} berhasil diupdate`
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message
        })
    }
};

module.exports = updateCatalog;