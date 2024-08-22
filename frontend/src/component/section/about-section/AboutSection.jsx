import { Box, Container, Typography } from "@mui/material";
import React from "react";

const AboutSection = () => {
	return (
		<>
			<Box
				className="flex flex-col md:flex-row justify-center mt-14 gap-7 md:gap-10"
				id="about"
			>
				<Box className="w-11/12 md:w-2/5 m-auto md:m-0">
					<img
						src="../../../image/section/about-us3.jpg"
						className="w-full h-72 xl:h-50dvh"
					/>
				</Box>
				<Box className="w-11/12 md:w-2/5 flex flex-col justify-center m-auto md:m-0">
					<Typography
						variant="h4"
						className="font-lato text-3xl md:text-4xl"
					>
						About Us
					</Typography>
					<Typography
						variant="p"
						component={"p"}
						color="initial"
						className="box-border w-full text-justify md:text-start md:w-4/5 dark:text-white"
					>
						At Bhavesh Web Studio, we make great websites for
						restaurants using the latest technology. We design
						easy-to-use, responsive sites that help your restaurant
						stand out online. After your site is live, we offer
						customization and updates to keep it fresh. Soon, we’ll
						also offer extra features like online ordering and
						booking systems to help your restaurant grow even more.
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default AboutSection;
