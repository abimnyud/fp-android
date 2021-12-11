const Catalog = require('../models/catalog');

const deleteCatalog = async (req, res) => {
    const { jenisPakaian, bahanPakaian } = req.query;
    const catalogCheck = await Catalog.findOne({ jenisPakaian, bahanPakaian});
    if(!catalogCheck) return res.status(400).json({ 
        success: false, 
        msg: `Produk ${jenisPakaian} dengan bahan ${bahanPakaian} tidak ada`
    });

    try {
        await Catalog.findOneAndDelete({ jenisPakaian, bahanPakaian });
        return res.status(200).json({
            success: true,
            msg: `Produk ${jenisPakaian} dengan bahan ${bahanPakaian} berhasil dihapus`
        });
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message
        })
    }
};

module.exports = deleteCatalog;