import mongoose from 'mongoose'

//schema 
const restaurantSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    rating: Number,
    cuisines: String,
    deliveryTime: String
})

//model
const 