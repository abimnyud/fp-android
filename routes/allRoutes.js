import { Router } from 'express';
const router = Router();

// Add Catalog Path
import addCatalog from '../controller/addCatalog';
router.post('/addCatalog', addCatalog);

// Show All Catalogs Path
import showCatalogs from '../controller/showCatalogs';
router.get('/showCatalogs', showCatalogs);

// Show Catalog Path
import showCatalog from '../controller/showCatalog';
router.get('/showCatalog/:jenisPakaian', showCatalog);

// Update Catalog Path
import updateCatalog from '../controller/updateCatalog';
router.put('/updateCatalog', updateCatalog);

// Delete Catalog Path
import deleteCatalog from '../controller/deleteCatalog';
router.delete('/deleteCatalog', deleteCatalog);

export default router;