const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes

app.use("/api/products", productRoute);

mongoose
	.connect(
		"mongodb+srv://Ihsan:tcqjECYKvYaJy9mh@backenddb.jojmu.mongodb.net/Node-Js-Crud?retryWrites=true&w=majority&appName=BackendDB"
	)
	.then(() => {
		console.log("Connected to the database");
		app.listen(3000, () => {
			console.log("Server is running on port 3000");
		});
	})
	.catch(() => {
		console.log("Connection failed");
	});
