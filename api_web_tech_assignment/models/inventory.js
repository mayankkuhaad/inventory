// inventory_id, inventory_type, item_name, available_quantity.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    inventory_id : {type : String, required : true},
    inventory_type : {type : String, required : true},
    item_name : {type:  String, required: true},
    available_quantity : {type:  Number, required: true}
})

const inventoryModel = mongoose.model("Inventory", inventorySchema);
module.exports = inventoryModel;