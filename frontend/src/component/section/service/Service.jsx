import { Container, Box, Grid, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "../../card/service-card/ServiceCard";

const Service = () => {
	const cardData = [
		{
			image: "service1.jpg",
			title: "QR Menu & Website Solution ",
			content:
				"We create QR codes for your menu and website. Customers can scan the QR code to see your menu and visit your website while at your restaurant.",
		},
		{
			image: "service2.jpg",
			title: "Website Design",
			content:
				"We design websites that look great on any device. Our services include responsive design, attractive cards, single or multiple pages, galleries, service pages, contact forms, menu pages, review systems, sliders, search features, and more.",
		},
		{
			image: "service3.jpg",
			title: "Dynamic Web Solution (coming soon) ",
			content:
				"Soon, we’ll offer online delivery systems, table reservations, event booking systems, and dashboards to help your restaurant run smoothly.",
		},
	];
	return (
		<>
			<Container
				maxWidth="xl"
				className="py-10  shadow-gray-400 shadow-md border-x-2 border-b-2 my-5 dark:bg-gradient-to-r dark:from-emerald-600 dark:to-slate-900 "
			>
				<Box className="our-service" id="service">
					<Typography className=" font-alata text-4xl text-center my-10 ">
						Our Service
					</Typography>
					<Grid
						container
						columns={{ xl: 3, md: 3, sm: 2, xs: 1 }}
						className="justify-center"
						spacing={2}
					>
						{cardData.map((item, index) => (
							<Grid
								item
								key={index}
								className="2xl:w-1/4 lg:w-1/3 md:w-1/3 sm:w-1/2"
							>
								<ServiceCard
									image={item.image}
									title={item.title}
									content={item.content}
								/>
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
		</>
	);
};

export default Service;
