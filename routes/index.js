const router = require('express').Router()

//router.use('/', require('./swagger'));

//router.get('/', (req, res) => {res.send('Hello World!');});

// Define your routes here
router.get('/', (req, res) => {
    //#swagger.tags=['Hello World']
    res.send('Hello World!');
  });

router.use('/', require('./swagger'));
router.use('/customers', require('./customers'));
router.use('/product', require('./product'));

/*router.get('/logout', (req, res, next) => {
  req.logout(function(err) {
    if (err) {return next(err); }
    res.redirect('/')
  });
})*/

module.exports = router; 