const Catalog = require('../models/catalog');

const updateCatalog = async (req, res) => {
    const { jenisPakaian, bahanPakaian, harga, stok } = req.body;
    const { hargaBaru, stokBaru } = req.query;
    
    if (!jenisPakaian || !bahanPakaian || !harga || !stok) return res.status(400).json({
        success: false,
        msg: 'Semua field harus diisi!'
    });

    
    try {
        const newCatalog = await Catalog.findOneAndUpdate({ jenisPakaian }, { harga: hargaBaru, stok: stokBaru }, { new: true });
        if(!newCatalog) return res.status(404).json({
            success: false,
            msg: `Produk ${jenisPakaian} tidak ada`
        });
        
        return res.status(200).json({
            success: true,
            msg: `Produk ${jenisPakaian} berhasil diupdate`,
            data: newCatalog
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message
        })
    }
};

module.exports = updateCatalog;