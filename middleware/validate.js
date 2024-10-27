const validator = require('../helpers/validate');

const saveCustomer = (req, res, next) => {
    const validationRule = {
        firstname: 'required|string',
        lastname: 'required|string',
        email: 'required|email',
        resident: 'required|string',
        username: 'required|string',
        workplace: 'required|string',
        bank: 'required|string',
        creditsaleduration: 'required|string',
        phone: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status){
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        }else{
            next();
        }
    });
};

const saveProduct = (req, res, next) => {
    const validationRule = {
        description: 'required|string',
        price: 'required|string',
        warrant: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status){
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        }else{
            next();
        }
    });
};

module.exports = {
    saveCustomer,
    saveProduct
}