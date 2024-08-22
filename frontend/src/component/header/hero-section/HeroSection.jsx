import { Box, Container, Typography } from "@mui/material";
import React from "react";
import "./hero.css";
const HeroSection = () => {
	return (
		<>
			<Box
				className="hero-section   bg-no-repeat px-2 md:px-5  text-white"
				id="home"
				sx={{
					background:
						"linear-gradient(90deg, rgba(2,0,22,0.7410539215686274) 0%, rgba(5,41,48,0.6138830532212884) 100%),url('../../../image/background/hero-image.jpg');",
					backgroundSize: "100% 100%",
				}}
			>
				<Box className="hero-content  h-90dvh flex flex-col gap-2   ps-3 sm:ps-0 md:ps-20 justify-center  w-full  md:w-5/6 lg:w-1/2">
					<Typography className="font-k2d text-4xl md:text-5xl font-semibold shadow-teal-700 text-center md:text-start">
						Build <br />
						Your Website <br /> With Bhavesh Web Studio
					</Typography>
					<Typography
						variant="p"
						className=" font-alata text-justify md:text-start "
					>
						Welcome to Bhavesh Web Studio! We create beautiful,
						easy-to-use websites for your restaurant. Using the
						latest technology, we make sure your site looks great
						and works well. Let’s get started and make your
						restaurant’s website stand out!
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default HeroSection;
