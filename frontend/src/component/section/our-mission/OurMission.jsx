import { Box, Typography } from "@mui/material";
import React from "react";

const OurMission = () => {
	return (
		<>
			<Box className="flex flex-col md:flex-row justify-center mt-14  gap-7 md:gap-10 pb-10   ">
				<Box className="w-11/12 m-auto md:m-0 md:w-2/5">
					<img
						src="../../../image/section/our-mission.jpg"
						className="w-full h-72 xl:h-50dvh"
					/>
				</Box>
				<Box className=" w-11/12 m-auto md:m-0 md:w-2/5 flex flex-col justify-center">
					<Typography
						variant="h4"
						className="font-lato text-3xl md:text-4xl"
					>
						Our Mission
					</Typography>
					<Typography
						variant="body2"
						color="initial"
						className="box-border w-full text-justify md:text-start md:w-4/5 dark:text-white"
					>
						In India, about 60% of restaurants don’t have a website.
						Our mission is to change that by providing easy and
						affordable website solutions. We want to help
						restaurants grow online and improve their digital
						presence. As having a website becomes a must for all
						businesses, we’re here to support restaurants with the
						tools they need to succeed.
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default OurMission;
