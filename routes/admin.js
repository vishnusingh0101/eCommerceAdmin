const express = require('express');

const router = express.Router();

const ProductData = require('../model/data');

const adminController = require('../controller/adminControl')

router.get('/all-product', async (req, res, next) => {
    ProductData.findAll()
    .then(products =>{
        res.json(products)
    })
    .catch(err => console.log(err));
});

router.post('/add-product', async (req, res, next) => {
    try{
        const data = await ProductData.create({
            price: req.body.price,
            name: req.body.name,
            category: req.body.category
        });
        res.status(200).json({newProduct: data});
    }catch(err) {
        console.log(err);
        res.status(500).json({error: err});
    }
});

router.delete('/delete/:id', (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    ProductData.destroy({where: {id: id}})
    .then(product => {
        console.log(product);
        console.log('delete success');
        res.status(200).json({product});
    })
    .catch(err => console.log(err));
});

module.exports = router;
