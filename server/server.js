const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.SERVER_PORT;

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.SEND_EMAIL_ID, // Your email address
		pass: process.env.MAIL_PASS, // Your email password or App Password
	},
});

app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
	const { fname, lname, email, phone, message } = req.body;

	const mailOptions = {
		from: process.env.SEND_EMAIL_ID, // Sender address
		to: process.env.RECEIVE_EMAIL_ID, // List of recipients
		subject: "Contact Form Submission", // Subject line
		html: `
            <h3>Contact Form Submission</h3>
            <p><strong>First Name:</strong> ${fname}</p>
            <p><strong>Last Name:</strong> ${lname}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
        `, // HTML body
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error("Error sending email:", error);
			return res
				.status(500)
				.json({ status: "fail", message: "Failed to send email" });
		}
		res.status(200).json({
			status: "success",
			message: "Email sent successfully",
		});
	});
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
