const Catalog = require('../models/catalog');

const deleteCatalog = async (req, res) => {
    const { jenisPakaian, bahanPakaian } = req.query;
    const catalogCheck = await Catalog.findOne({ jenisPakaian: jenisPakaian, bahanPakaian: bahanPakaian });
    if(!catalogCheck) return res.status(400).json({ 
        success: false, 
        msg: `Produk ${jenisPakaian} tidak ada`
    });

    try {
        await Catalog.findOneAndDelete({ jenisPakaian: jenisPakaian, bahanPakaian: bahanPakaian });
        return res.status(200).json({
            success: true,
            msg: `Produk ${jenisPakaian} berhasil dihapus`
        });
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message
        })
    }
};

module.exports = deleteCatalog;