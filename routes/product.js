const router = require('express').Router();

const productController = require('../controllers/product');

router.get('/', productController.getAll);

router.get('/:id', productController.getSingle);

router.post('/', productController.createProduct);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router; 