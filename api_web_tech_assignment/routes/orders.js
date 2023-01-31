const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Order = require("../models/order");

router.use(bodyParser.json());


// read all orders

router.get("/orders", async (req,res)=>{
    try{
        const orders = await Order.find();
        res.status(200).json({
            status : "success",
            data : orders
        })
    }catch(e){
        res.status(500).json({
            status : "failed",
            message : e.message
        })
    }
});

//Read specific customer

// router.get("/customerDetails/:id", async (req,res)=>{
//     try{
//     const users = await Customer.find({_id: req.params.id});
//     res.status(200).json({
//         status : "success",
//         data : users
//     })        
//     }catch(e){
//         res.status(500).json({
//             status : "failed",
//             message : e.message
//         })
//     }
// });

//Create order

router.post("/createOrders", async (req,res)=>{
    try{
        const orders = await Order.create(req.body);
        res.status(200).json({
            status : "success",
            orders
        })
    }catch(e){
        res.status(500).json({
            status : "success",
            message : e.message
        })
    }
});

router.get("*", (req,res)=>{
    res.status(404).json({
        status: "failed",
        message : "invalid request"
    })
});

module.exports = router;
