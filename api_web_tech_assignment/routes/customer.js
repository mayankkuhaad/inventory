const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Customer = require("../models/customer");

router.use(bodyParser.json());


// READ all customers

router.get("/customerDetails", async (req,res)=>{
    try{
        const users = await Customer.find();
        res.status(200).json({
            status : "success",
            data : users
        })
    }catch(e){
        res.status(500).json({
            status : "failed",
            message : e.message
        })
    }
});

//Read specific customer

router.get("/customerDetails/:id", async (req,res)=>{
    try{
    const users = await Customer.find({_id: req.params.id});
    res.status(200).json({
        status : "success",
        data : users
    })        
    }catch(e){
        res.status(500).json({
            status : "failed",
            message : e.message
        })
    }
});

//Create customer

router.post("/createCustomer", async (req,res)=>{
    try{
        const users = await Customer.create(req.body);
        res.status(200).json({
            status : "success",
            users
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
