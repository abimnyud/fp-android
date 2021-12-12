const Catalog = require('../models/catalog');

const deleteCatalog = async (req, res) => {
    const { id } = req.params;
    const catalogCheck = await Catalog.findOne({ _id: id});
    if(!catalogCheck) return res.status(400).json({ 
        success: false, 
        msg: `Produk dengan id ${id} tidak ditemukan`
    });

    try {
        await Catalog.findOneAndDelete({ _id: id });
        return res.status(200).json({
            success: true,
            msg: `Produk dengan id ${id} berhasil dihapus`
        });
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message
        })
    }
};

module.exports = deleteCatalog;