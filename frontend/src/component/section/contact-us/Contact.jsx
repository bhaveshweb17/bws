import { Box, Container } from "@mui/material";
import React from "react";
import ContactForm from "../../form/contact-form/ContactForm";

const Contact = () => {
	return (
		<>
			<Container
				maxWidth="xl"
				className=" shadow-gray-400 shadow-lg py-1  dark:shadow-md border-x-2 border-b-2 my-5 dark:bg-gradient-to-r dark:from-gray-900 dark:to-purple-900"
			>
				<Box
					className="contact-us flex gap-5 h-80dvh md:h-60dvh lg:h-60dvh max-h-svh justify-center align-center my-5 md:my-24 "
					id="contact"
				>
					<Box className="contact-form-container  w-full lg:w-1/2 justify-center align-center md:h-full">
						<ContactForm />
					</Box>
					<Box className="contact-image h-full xl:h-50dvh  hidden  lg:flex xl:w-1/2">
						<img
							src="../../../image/section/contact-us.jpg"
							className=" lg:h-60dvh  w-full border shadow-slate-900 rounded-md"
						/>
					</Box>
				</Box>
			</Container>
		</>
	);
};

export default Contact;
