const router = require('express').Router();

const productController = require('../controllers/product');
const validation = require('../middleware/validate');

router.get('/', productController.getAll);

router.get('/:id', productController.getSingle);

router.post('/', validation.saveProduct, productController.createProduct);

router.put('/:id', validation.saveProduct, productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router; 