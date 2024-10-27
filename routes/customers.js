const router = require('express').Router();

const customersController = require('../controllers/customers');
//const validation = require('../middleware/validate');
const {isAuthenticated} = require('../middleware/authenticate');

router.get('/', customersController.getAll);

router.get('/:id', customersController.getSingle);

router.post('/', /*validation.saveCustomer,*/ isAuthenticated, customersController.createCustomer);

router.put('/:id', /*validation.saveCustomer,*/ isAuthenticated, customersController.updateCustomer);

router.delete('/:id', isAuthenticated, customersController.deleteCustomer);

module.exports = router; 