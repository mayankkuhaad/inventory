const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    customer_id : {type : String, required : true},
    customer_name : {type:  String, required: true},
    email : {type:  String, required: true, unique : true}
})

const customerModel = mongoose.model("Customer", customerSchema);
module.exports = customerModel;