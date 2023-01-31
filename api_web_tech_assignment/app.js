const express = require("express");
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/api_web_tech_assignment', ()=>{
    console.log("db connected");
});

const customerRoutes = require("./routes/customer");
const inventoryRoutes = require("./routes/inventory");
const orderRoutes = require("./routes/orders");


const app = express();

app.get("/",(req,res)=>{
    res.send("okay");
})

app.use("/api/v1",customerRoutes);
app.use("/api/v1",inventoryRoutes);
app.use("/api/v1",orderRoutes);

app.listen(3005,()=>{console.log("server running at port 3005")})