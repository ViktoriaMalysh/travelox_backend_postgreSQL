const express = require("express");
const app = express();
require("dotenv").config();
// const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require("body-parser");
const cors = require("cors");
   
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(require("morgan")("dev"));

const api = require("./Endpoints/api");
const user = require("./Endpoints/user");
const reservation = require("./Endpoints/reservation"); 

// const users = require('./route/users')
// const admin = require('./route/admin')
// const team = require('./route/team')

// app.post("/payment", async (req, res) => {
// 	let { amount, id } = req.body
// 	try {
//         console.log('123')
// 		const payment = await stripe.paymentIntents.create({
// 			amount,
// 			currency: "USD",
// 			description: "Spatula company",
// 			payment_method: id,
// 			confirm: true
// 		})
// 		console.log("Payment", payment)
// 		res.json({
// 			message: "Payment successful",
// 			success: true
// 		})
// 	} catch (error) {
// 		console.log("Error", error)
// 		res.json({
// 			message: "Payment failed",
// 			success: false
// 		})
// 	}
// })

app.use("/api", api);

app.use("/reservation", reservation);

app.use("/", user);

module.exports = app;
