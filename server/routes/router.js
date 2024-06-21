const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");
const USER = require("../models/userSchema");


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

router.post("/register",async(req,res)=>{
    const {fname,email,mobile,password,cpassword} = req.body;
    if (!fname | !email | !mobile | !password | !cpassword) {
        return res.status(422).json({ error: "fill all the field" });
        console.log("data not avaliable");
    }

    try {
        const preuser = await USER.findOne({email:email});
        if (preuser) {
            return res.status(422).json({ error: "email already exist" });
        }
        else if(password !== cpassword){
            return res.status(422).json({ error: "password not matching" });
        }
        else {
            const finalUser = new USER({fname,email,mobile,password,cpassword});
            const storedata = await finalUser.save();
            console.log(storedata);
            res.status(201).json(storedata);
        }
    } catch (error) {
        
    }
})

module.exports = router