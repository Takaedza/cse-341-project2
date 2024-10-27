const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = (req, res) => {
    //#swagger.tags=['product']
    mongodb
        .getDatabase()
        .db()
        .collection('product')
        .find()
        .toArray((err, lists) => {
            if (err) {
              res.status(500).json({message: err});
            }
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        });
/* const getAll = async (req, res) => {
    //#swagger.tags=['product']
    const result = await mongodb.getDatabase().db().collection('product').find();
    result.toArray().then((product) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(product);
    });*/
} ;

const getSingle = (req, res) => {
    //#swagger.tags=['customers']
    if (!ObjectId.isValid(req.params.id)) {
        res.status(500).json('Must use a valid product id to find a product');
    }
    const productId = new ObjectId(req.params.id);
    mongodb
        .getDatabase()
        .db()
        .collection('product')
        .find({_id:productId})
        .toArray((err, result) => {
            if (err) {
              res.status(500).json({message: err});
            }
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(result[0]);
        });
/*const getSingle = async (req, res) => {
    //#swagger.tags=['product']
    const productId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('product').find({_id:productId});
    result.toArray().then((product) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(product[0]);
    })*/
};

const createProduct = async (req, res) => {
    //#swagger.tags=['product']
    const product = {
        description:req.body.description,
        price:req.body.price,
        warrant:req.body.warrant
    }
    const response = await mongodb.getDatabase().db().collection('product').insertOne(product);
    if (response.acknowledged) {
        res.status(204).send();
    }
    else {
        res.status(500).json(response.error || 'Some error ocurred while updating the product.');
    }
};

const updateProduct = async (req, res) => {
    //#swagger.tags=['product']
    if (!ObjectId.isValid(req.params.id)) {
        res.status(500).json('Must use a valid product id to update a product');
    }
    const productId = new ObjectId(req.params.id);
    const product = {
        description:req.body.description,
        price:req.body.price,
        warrant:req.body.warrant
    }
    const response = await mongodb.getDatabase().db().collection('product').replaceOne({_id: productId}, product);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    }
    else {
        res.status(500).json(response.error || 'Some error ocurred while updating the product.');
    }
}; 

const deleteProduct = async (req, res) => {
    //#swagger.tags=['product']
    if (!ObjectId.isValid(req.params.id)) {
        res.status(500).json('Must use a valid product id to delete a product');
    }
    const productId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('product').deleteOne({_id: productId});
    if (response.deletedCount > 0) {
        res.status(204).send();
    }
    else {
        res.status(500).json(response.error || 'Some error ocurred while deleting the product.');
    }
};

module.exports = {
    getAll,
    getSingle,
    createProduct,
    updateProduct,
    deleteProduct
};