// Import required modules
const express = require("express");
const Product = require("../models/product"); // Import the User model (Mongoose schema)

// Create a new Express router instance for user routes
const productRouter = express.Router();


// Route: Add a new product
// Method: POST /user/add
// Description: Receives user data in the request body, creates a new user, and saves it to the database
productRouter.post("/add", async (req, res) => {
    try {
        let newproduct = new Product(req.body);         // Create a new User instance from request body
        let result = await newproduct.save();        // Save the user to the database
        res.send({ product: result, msg: "product is added" });  // Send success response
    } catch (error) {
        console.log(error); // Log any errors
    }
});


// Route: Get all users
// Method: GET /user/
// Description: Retrieves and returns all users from the database
productRouter.get("/", async (req, res) => {
    try {
        let result = await Product.find();           // Fetch all users
        res.send({ products: result, msg: "all products" });  // Send response with list of users
    } catch (error) {
        console.log(error);
    }
});


// Route: Get a single user by ID
// Method: GET /user/:id
// Description: Retrieves one user based on their ID
productRouter.get("/:id", async (req, res) => {
    try {
        let result = await Product.findById(req.params.id);  // Find user by ID
        res.send({ user: result, msg: "one product" });
    } catch (error) {
        console.log(error);
    }
});


// Route: Delete a user by ID
// Method: DELETE /user/:id
// Description: Deletes a user based on their ID
productRouter.delete("/:id", async (req, res) => {
    try {
        let result = await Product.findByIdAndDelete(req.params.id);  // Delete user by ID
        res.send({ msg: "product is deleted" });
    } catch (error) {
        console.log(error);
    }
});


// Route: Update a user by ID
// Method: PUT /user/:id
// Description: Updates a user's data based on their ID and request body
productRouter.put("/:id", async (req, res) => {
    try {
        let result = await Product.findByIdAndUpdate(
            { _id: req.params.id },               
            { $set: { ...req.body } }             
        );
        res.send({ msg: "product is updated" });
    } catch (error) {
        console.log(error);
    }
});


// Export the user router to be used in other parts of the app
module.exports = productRouter;
