const ProductData = require("../model/data");


exports.postAddExpence = async (req, res, next) => {
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
}