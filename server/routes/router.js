const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

// get productsdata api
router.get("/getproducts", async (req, res) => {
    try {
        const productsdata = await Products.find();
        // console.log("product details consoled: "+productsdata);
        res.status(201).json(productsdata);
    } catch (error) {
        console.log("error" + error.message);
    }
});

// get individual data
router.get("/getproductsone/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const individualdata = await Products.findOne({ id: id });
        // console.log(individualdata);
        res.status(201).json(individualdata);
    } catch (error) {
        res.status(400).json(individualdata);
        console.log("error" + error);
    }
});

// -------register------
router.post("/register", async (req, res) => {
    const { fname, email, mobile, password, cpassword } = req.body;
    if (!fname | !email | !mobile | !password | !cpassword) {
        return res.status(422).json({ error: "fill all the field" });
        console.log("data not avaliable");
    }

    try {
        const preuser = await USER.findOne({ email: email });
        if (preuser) {
            return res.status(422).json({ error: "email already exist" });
        } else if (password !== cpassword) {
            return res.status(422).json({ error: "password not matching" });
        } else {
            const finalUser = new USER({
                fname,
                email,
                mobile,
                password,
                cpassword,
            });
            const storedata = await finalUser.save();
            console.log(storedata);
            res.status(201).json(storedata);
        }
    } catch (error) {}
});

// -------login-------
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ error: "fill all the data" });
    }
    try {
        const userlogin = await USER.findOne({ email: email });
        if (userlogin) {
            const ismatch = await bcrypt.compare(password, userlogin.password);
            // console.log(ismatch);

            if (!ismatch) {
                res.status(401).json({ error: "incorrect password" });
            } else {
                // token generate
                const token = await userlogin.generateAuthtoken();
                console.log(token);
                res.cookie("Amazonweb", token, {
                    expires: new Date(Date.now() + 900000),
                    httpOnly: true
                });
                res.status(201).json(userlogin);
            }
        } else {
            res.status(404).json({ error: "email not present" });
        }
    } catch (error) {
        res.status(400).json({ error: "invalid details" });
    }
});

// adding data into cart
router.post("/addcart/:id", authenticate, async (req, res) => {
    try {
        const { id } = req.params;
        const cart = await Products.findOne({id: id});
        console.log(cart);

        const UserContact = await USER.findOne({ _id: req.userID });
        console.log(UserContact);

        if (UserContact) {
            const cartData = await UserContact.addcartdata(cart);
            await UserContact.save();
            console.log(cartData);
            res.status(201).json(UserContact);
        } else {
            res.status(401).json({ error: "invalid user" });
        }
    } catch (error) {
        res.status(401).json({ error: "invalid user" });
    }
});

module.exports = router;
