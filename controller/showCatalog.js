const Catalog = require('../models/catalog');

const showCatalog = async (req, res) => {
    const { jenisPakaian } = req.params;
    catalogCheck = await Catalog.findOne({ jenisPakaian: jenisPakaian });

    if (!catalogCheck) return res.status(404).json({
        success: false,
        msg: `Tidak ada produk ${jenisPakaian} di database ini!`
    })

    try {
        return res.status(200).json({
            success: true,
            data: catalogCheck
        });
    } catch (err) { 
        return res.status(400).json({
            success: false,
            msg: error.message
        })
    };
}

module.exports = showCatalog;