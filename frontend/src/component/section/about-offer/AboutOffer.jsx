import React from "react";
import { Box, Typography } from "@mui/material";
const AboutOffer = () => {
	return (
		<>
			<Box className="flex flex-col-reverse md:flex-row justify-center mt-14 gap-4">
				<Box className=" w-11/12 m-auto md:m-0 md:w-2/5 flex flex-col justify-center">
					<Typography
						variant="h4"
						className="font-lato text-3xl md:text-4xl"
					>
						What We Offer ?
					</Typography>
					<Typography
						variant="p"
						className="box-border w-full text-justify md:text-start md:w-11/12 lg:4/5"
					>
						At Bhavesh Web Studio, we provide QR code menus to make
						your restaurant’s menu easily accessible via
						smartphones, enhancing customer experience and boosting
						website traffic. We also offer website design services
						using the latest technologies like React, Node, Material
						UI, and Tailwind CSS. Our website features include
						attractive food dish sliders, detailed pages for each
						menu item, modern and responsive design, rating and
						review systems, stylish designs for services, staff, and
						menu cards, and simple, animated gallery sections.
					</Typography>
				</Box>
				<Box className="w-11/12 m-auto md:m-0 md:w-2/5">
					<img
						src="../../../image/section/about-offer.jpg"
						className="w-full h-72 xl:h-50dvh"
					/>
				</Box>
			</Box>
		</>
	);
};

export default AboutOffer;
