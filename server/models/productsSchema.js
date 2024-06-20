const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id:String,
    url:String,
    title:String,
    price:Object,
    description:String,
    discount:String,
    tagline:String
});

const Productsdata = new mongoose.model("products",productSchema);
module.exports = Productsdata;