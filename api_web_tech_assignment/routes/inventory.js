const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Inventory = require("../models/inventory");

router.use(bodyParser.json());


// READ all customers

router.get("/inventory/:id", async (req,res)=>{
    try{
        const inventory = await Inventory.find({_id: req.params.id});
        res.status(200).json({
            status : "success",
            data : inventory
        })
    }catch(e){
        res.status(500).json({
            status : "failed",
            message : e.message
        })
    }
});

//Read specific customer  /inventory/inventoryType

router.get("/inventory/:inventory_type", async (req,res)=>{
    try{
    const inventory = await Inventory.find({_inventory_type: req.params.inventory_type});
    res.status(200).json({
        status : "success",
        data : inventory
    })        
    }catch(e){
        res.status(500).json({
            status : "failed",
            message : e.message
        })
    }
});

//Create inventory item

router.post("/createInventory", async (req,res)=>{
    try{
        const inventory = await Inventory.create(req.body);
        res.status(200).json({
            status : "success",
            inventory
        })
    }catch(e){
        res.status(500).json({
            status : "success",
            message : e.message
        })
    }
});


//update inventory
router.put("/inventory", async (req,res)=>{
    try{
        const inventory = await Inventory.findOneAndUpdate({_id: req.params.id},req.body);
        res.status(200).json({
            status : "success",
            inventory
        })
    }catch(e){
        res.status(500).json({
            status : "failed",
            message : e.message
        })

    }
})

router.get("*", (req,res)=>{
    res.status(404).json({
        status: "failed",
        message : "invalid request"
    })
});

module.exports = router;
