const express = require("express");
const router = express.Router();

const Product = require("../model/Product");

router.get("/", async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({msg : "server error"});
    }
});


router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({msg : "server error"});
    }
})

module.exports = router;