const Car = require('../models/cars');

exports.getAllCars = async (res, req, next) => {
    try {
        const data = await Car.find();
        if (data && data.length !== 0){
            return res.status(200).send({
                message: "Cars found!",
                payload: data
            })
        }
        res.status(500).send({
            message: "Cars not found!"
        })
    } catch(err){
        res.status(500).send(err);
    }
};

exports.getCarById = async (res, req, next) => {
    try {
        const data = await Car.findById(req.params.id);
        if (data){
            return res.status(200).send({
                message: "Car found!",
                payload: data
            })
        }
        res.status(500).send({
            message: "Car not found!"
        })
    } catch(err){
        res.status(500).send(err);
    }
};

exports.createCar = async (req, res, next) => {
    try {
        const data = new Car({
            name: req.body.name,
            brand: req.body.brand, 
            color: req.body.color,
            price: req.body.price
        })
        const result = await data.save();
        if (result){
            return res.status(201).send({
                message: "Car created!",
                payload: result
            })
        }
        res.status(500).send({ //status 500 better 
            message: "Car not created!",
        })
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.updateCar = async (res, req, next) => {
    try {
        const data = {
            name: req.body.name,
            brand: req.body.brand, 
            color: req.body.color,
            price: req.body.price
        }
        const result = await Car.findByIdAndUpdate(req.params.id, data);
        if (result){
            return res.status(200).send({
                message: "Car updated!",
                payload: result
            })
        }
        res.status(500).send({
            message: "Car not updated!"
        })
    } catch(err){
        res.status(500).send(err);
    }
};

exports.deleteCar = async (res, req, next) => {
    try {
        const data = {
            name: req.body.name,
            brand: req.body.brand, 
            color: req.body.color,
            price: req.body.price
        }
        const result = await Car.findByIdAndDelete(req.params.id, data);
        if (result){
            return res.status(200).send({
                message: "Car deleted!",
                payload: result
            })
        }
        res.status(500).send({
            message: "Wrong input!"
        })
    } catch(err){
        res.status(500).send(err);
    }
};