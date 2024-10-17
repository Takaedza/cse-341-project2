const router = require('express').Router()

//router.get('/', (req, res) => {res.send('Hello World!');});

// Define your routes here
router.get('/', (req, res) => {
    //#swagger.tags=['Hello World']
    res.send('Hello World!');
  });
  
router.use('/customers', require('./customers'));
router.use('/product', require('./product'));

module.exports = router; 