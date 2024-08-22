import {
	OutlinedInput,
	FormControl,
	InputLabel,
	Box,
	Button,
	Typography,
	ThemeProvider,
	Modal,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { buttonTheme, inputTheme } from "../../../theme/theme";
import axios from "axios";
import Loading from "../../process/Loading";
import ErrorMessage from "../../process/ErrorMessage";
import Success from "../../process/Success";

const ContactForm = () => {
	const [formData, formDataHandler] = useState({
		fname: "",
		lname: "",
		email: "",
		phone: "",
		message: "",
	});
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(null);
	const [open, setOpen] = useState(false);

	const inputHandler = (e) => {
		const { name, value } = e.target;
		formDataHandler({ ...formData, [name]: value });
	};

	const validateForm = (data) => {
		const errors = {};
		if (!data.fname) errors.fname = "First name is required";
		if (!data.lname) errors.lname = "Last name is required";
		if (!data.email || !/\S+@\S+\.\S+/.test(data.email))
			errors.email = "Valid email is required";
		if (!data.phone) errors.phone = "Phone number is required";
		if (!data.message) errors.message = "Message is required";
		return errors;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formErrors = validateForm(formData);
		setErrors(formErrors);

		if (Object.keys(formErrors).length > 0) return;

		setLoading(true);
		setOpen(true);
		try {
			const response = await axios.post(
				"http://localhost:5000/send-email",
				formData
			);
			setSuccess(response.data.status === "success");
		} catch (error) {
			setSuccess(false);
		} finally {
			setLoading(false);
		}
	};

	// Close modal 3 seconds after success
	useEffect(() => {
		let timer;
		if (success) {
			timer = setTimeout(() => {
				setOpen(false);
			}, 3000);
		}
		return () => clearTimeout(timer);
	}, [success]);

	const handleClose = () => setOpen(false);

	return (
		<div className="flex items-center justify-center min-h-full">
			<ThemeProvider theme={inputTheme}>
				<form
					action=""
					method="POST"
					className="flex flex-col gap-5 w-full p-3 md:p-6"
					onSubmit={handleSubmit}
				>
					<Typography variant="h4" className="font-alata text-center">
						Connect With Us
					</Typography>
					<Box className="flex flex-col md:flex-row gap-5 w-full">
						<FormControl className="w-full rounded-md">
							<InputLabel htmlFor="fname">First Name</InputLabel>
							<OutlinedInput
								type="text"
								id="fname"
								name="fname"
								placeholder="First Name"
								value={formData.fname}
								variant="filled"
								label="First Name"
								className="p-2"
								onChange={inputHandler}
								required
							/>
							{errors.fname && (
								<Typography color="error">
									{errors.fname}
								</Typography>
							)}
						</FormControl>
						<FormControl className="w-full rounded-md">
							<InputLabel htmlFor="lname">Last Name</InputLabel>
							<OutlinedInput
								type="text"
								id="lname"
								name="lname"
								placeholder="Last Name"
								value={formData.lname}
								variant="filled"
								label="Last Name"
								className="p-2"
								onChange={inputHandler}
								required
							/>
							{errors.lname && (
								<Typography color="error">
									{errors.lname}
								</Typography>
							)}
						</FormControl>
					</Box>
					<FormControl className="rounded-md">
						<InputLabel htmlFor="phone">Phone Number</InputLabel>
						<OutlinedInput
							type="tel"
							id="phone"
							name="phone"
							placeholder="Phone Number"
							value={formData.phone}
							variant="filled"
							label="Phone Number"
							className="p-2"
							onChange={inputHandler}
							required
						/>
						{errors.phone && (
							<Typography color="error">
								{errors.phone}
							</Typography>
						)}
					</FormControl>
					<FormControl className="rounded-md">
						<InputLabel htmlFor="email">Email</InputLabel>
						<OutlinedInput
							type="email"
							id="email"
							name="email"
							placeholder="Email"
							value={formData.email}
							variant="filled"
							label="Email"
							className="p-2"
							onChange={inputHandler}
							required
						/>
						{errors.email && (
							<Typography color="error">
								{errors.email}
							</Typography>
						)}
					</FormControl>
					<FormControl className="rounded-md">
						<InputLabel htmlFor="message">Message</InputLabel>
						<OutlinedInput
							type="text"
							id="message"
							name="message"
							placeholder="Write your message ..."
							value={formData.message}
							variant="filled"
							label="Message"
							onChange={inputHandler}
							required
							multiline
						/>
						{errors.message && (
							<Typography color="error">
								{errors.message}
							</Typography>
						)}
					</FormControl>

					<Button
						type="submit"
						variant="contained"
						className="w-24 capitalize m-auto rounded-full bg-indigo-600 dark:bg-yellow-400 dark:text-black"
						size="large"
					>
						Submit
					</Button>
					<Typography className="text-xs">
						<span className="text-black font-bold dark:text-yellow-300">
							Note:
						</span>{" "}
						The information you provide will be used solely for
						contacting you. By proceeding, you consent to this use.
					</Typography>
				</form>

				<Modal
					open={open}
					onClose={handleClose}
					className="h-dvh w-full  flex align-center justify-center"
				>
					<Box className="bg-slate-900 h-60 w-96 my-auto">
						{loading ? (
							<Typography>
								<Loading />
							</Typography>
						) : success === null ? (
							<Typography>
								<ErrorMessage />
							</Typography>
						) : success ? (
							<Typography>
								<Success />
							</Typography>
						) : (
							<Typography>
								<ErrorMessage />
							</Typography>
						)}
					</Box>
				</Modal>
			</ThemeProvider>
		</div>
	);
};

export default ContactForm;
