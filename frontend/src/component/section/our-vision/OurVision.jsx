import { Container, Box, Typography } from "@mui/material";
import React from "react";

const OurVision = () => {
	return (
		<>
			<Container
				maxWidth="xl"
				className="px-2 py-10 md:px-44 md:py-28 shadow-gray-400 shadow-md border-x-2 border-b-2 my-5 dark:bg-gradient-to-r dark:from-slate-900 dark:to-cyan-900"
			>
				<Box className="w-full md:w-4/5 m-auto ">
					<Typography
						variant="h4"
						className="font-alata  text-center"
					>
						Our Vision
					</Typography>
					<Typography
						variant="p"
						className="w-4/5 text-2xl text-center flex-wrap md:text-3xl md:w-1/2 font-lato "
					>
						<strong className="text-3xl">“</strong>Our vision is to
						lead in providing affordable, effective online solutions
						for restaurants, offering more than just websites to
						help them thrive in the digital world.
						<strong className="text-3xl">”</strong>
					</Typography>
				</Box>
			</Container>
		</>
	);
};

export default OurVision;
