const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");

// get productsdata api
router.get("/getproducts", async(req,res)=> {
    try {
        const productsdata = await Products.find();
        // console.log("product details consoled: "+productsdata);
        res.status(201).json(productsdata);
    } catch (error) {
        console.log("error"+error.message);
    }
})

// get individual data
router.get("/getproductsone/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const individualdata = await Products.findOne({id:id});
        // console.log(individualdata);
        res.status(201).json(individualdata);
    } catch (error) {
        res.status(400).json(individualdata);
        console.log("error"+ error);
    }
})

module.exports = router