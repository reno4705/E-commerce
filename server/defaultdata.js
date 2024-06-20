// import {Products} from "./constant/productsdata";
const Products = require("./constant/productsdata")
const Productsdata = require("./models/productsSchema");

const DefaultData = async() => {
    try {
        await Productsdata.deleteMany({})
        const storeData = await Productsdata.insertMany(Products);
        // console.log("data stored in default data: "+storeData);
    } catch(error) {
        console.log("Error:"+error.message)
    }
}

module.exports = DefaultData;