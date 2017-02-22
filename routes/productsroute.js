const router = require('express').Router();
const ProductModel= require('../models/educationproduct');

router.post('/addProducts',function(req,res) {
 const product = new ProductModel();
       product.description=req.body.description;
       product.save(function()
     {
       res.render('product/addProducts');

     });
});

router.get('/addProducts',function(req,res) {
res.render('product/addProducts');

 });

module.exports=router;
