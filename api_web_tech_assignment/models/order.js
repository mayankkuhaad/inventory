// customer_id, inventory_id,item_name, quantity
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    customer_id : {type : String, required : true},
    inventory_id : {type : String, required : true},
    item_name : {type:  String, required: true},
    quantity : {type:  Number, required: true}
})

const orderModel = mongoose.model("Order", orderSchema);
module.exports = orderModel;