const express = require('express');
const router = express.Router();

// Add Catalog Path
const addCatalog = require('../controller/addCatalog');
router.post('/addCatalog', addCatalog);

// Show All Catalogs Path
const showCatalogs = require('../controller/showCatalogs');
router.get('/showCatalogs', showCatalogs);

// Show Catalog Path
const showCatalog = require('../controller/showCatalog');
router.get('/showCatalog/:jenisPakaian', showCatalog);

// Update Catalog Path
const updateCatalog = require('../controller/updateCatalog');
router.put('/updateCatalog', updateCatalog);

// Delete Catalog Path
const deleteCatalog = require('../controller/deleteCatalog');
router.delete('/deleteCatalog', deleteCatalog);

module.exports = router;