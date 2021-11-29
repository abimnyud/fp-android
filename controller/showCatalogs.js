const Catalog = require('../models/catalog');

const showCatalogs = async (req, res) => {
    catalogCheck = await Catalog.find();
    if (!catalogCheck) return res.status(404).json({
        success: false, 
        msg: 'Katalog kosong, silakan membuat objek untuk mengisi database ini'
    });

    try {
        return res.status(200).json({
            success: true,
            data: catalogCheck
        });
    } catch (err) {
        return res.status(400).json({
            success: false,
            msg: `Database error, silakan periksa! ${err.message}`
        });
        
    }
};

module.exports = showCatalogs;