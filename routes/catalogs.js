const express = require('express');
const router = express.Router();
const { verifyAdmin } = require('../controller/verifyToken');

// Add Catalog Path
const addCatalog = require('../controller/addCatalog');
router.post('/add', verifyAdmin, addCatalog);

// Show All Catalogs Path
const showAllCatalogs = require('../controller/showAllCatalogs');
router.get('/', showAllCatalogs);

// Show Catalog Path
const showCatalog = require('../controller/showCatalog');
router.get('/:jenisPakaian', showCatalog);

// Update Catalog Path
const updateCatalog = require('../controller/updateCatalog');
router.put('/update', verifyAdmin, updateCatalog);

// Delete Catalog Path
const deleteCatalog = require('../controller/deleteCatalog');
router.delete('/:id', verifyAdmin,deleteCatalog);

module.exports = router;