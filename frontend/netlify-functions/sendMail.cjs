const nodemailer = require("nodemailer");

exports.handler = async (event) => {
	const { fname, lname, email, phone, message } = JSON.parse(event.body);

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.SEND_EMAIL_ID, // Your email address
			pass: process.env.MAIL_PASS, // Your email password or App Password
		},
	});

	const mailOptions = {
		from: process.env.SEND_EMAIL_ID,
		to: process.env.RECEIVE_EMAIL_ID,
		subject: "Contact Form Submission",
		html: `
      <h3>Contact Form Submission</h3>
      <p><strong>First Name:</strong> ${fname}</p>
      <p><strong>Last Name:</strong> ${lname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
	};

	try {
		await transporter.sendMail(mailOptions);
		return {
			statusCode: 200,
			body: JSON.stringify({
				status: "success",
				message: "Email sent successfully",
			}),
		};
	} catch (error) {
		console.error("Error sending email:", error);
		return {
			statusCode: 500,
			body: JSON.stringify({
				status: "fail",
				message: "Failed to send email",
			}),
		};
	}
};
