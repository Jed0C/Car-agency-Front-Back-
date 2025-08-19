// Import Mongoose library for MongoDB interaction
const mongoose = require("mongoose");
const schema = mongoose.Schema; // Shortcut to define schema

// Define the structure of a User document
const productSchema = new schema({
    title: String,                 
    img: String,            
    price:Number,
    category: {                   
        type: String,
        default: "all"
    }
});

// Create the User model based on the schema
const Product = mongoose.model('Product', productSchema);

// Export the User model so it can be used in other parts of the app
module.exports = Product;
