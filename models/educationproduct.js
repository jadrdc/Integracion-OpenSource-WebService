const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
description : String
});

module.exports=mongoose.model('Products',ProductSchema);
