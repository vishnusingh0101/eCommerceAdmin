const express = require('express');

const router = express.Router();

const ProductData = require('../model/data');

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
        res.status(200).json({newExpence: data});
    }catch(err) {
        console.log(err);
        res.status(500).json({error: err});
    }
});

router.delete('/delete', (req, res, next) => {
    const id = req.params.id;
    ProductData.destroy({where: {id}})
    .then(product => {
        console.log(product);
        console.log('delete success');
        res.sendStatus(200);
    })
    .catch(err => console.log(err));

});

module.exports = router;
