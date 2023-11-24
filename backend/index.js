const express = require('express')
const app = express();
const ship = require('./models/Ship');
const cors = require('cors');
require('./db')


app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello")
})

//create a ship

app.post("/shipping", async (req, res) => {
    try {
        const data = req.body;
        const createdShipping = new ship(data);
        await createdShipping.save();
        res.send("Shipping created")
    } catch (error) {
        res.send(error);
    }

});

//read

app.get("/shipping",async(req, res) => {
    try {
        const shippingList =await ship.find();
        res.send(shippingList);
    } catch (error) {
        res.send(error)
    }
})

//update

app.put("/shipping/:id",async(req, res) => {
    try {
        const data = req.body;
        await ship.updateOne({_id:req.params.id},{$set:data})
        res.send("Shipping updated");
    } catch (error) {
        res.send(error)
    }
})

//delete

app.delete("/shipping/:id",async(req, res) => {
    try {
        await ship.deleteOne({_id:req.params.id});
        res.send("Shipping deleted");
    } catch (error) {
        res.send(error)
    }
})

//get shipping by id

app.get("/shipping/:id",async(req, res) => {
    try {
        const shippingById =await ship.findById({_id:req.params.id});
        res.send(shippingById);
    } catch (error) {
        res.send(error)
    }
})


app.listen(5000,console.log("Listening"))