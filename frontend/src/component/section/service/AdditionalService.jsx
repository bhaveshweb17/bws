import { Box, Container, Grid, Typography } from "@mui/material";
import { BugReport, Code, Email, Upgrade } from "@mui/icons-material";
import React from "react";
import AdditionalServiceCard from "../../card/service-card/AdditionalServiceCard";
const AdditionalService = () => {
	const cardData = [
		{
			icon: (
				<Upgrade className="text-4xl p-2 h-full w-full flex justify-center align-center" />
			),

			title: "Upgrades",
			content:
				"We provide ongoing support to upgrade your website and systems as needed. Whether you want to add new features, improve performance, or keep up with the latest technologies, we ensure your site stays current and effective.",
		},
		{
			icon: (
				<Code className="text-4xl p-2 h-full w-full flex justify-center align-center" />
			),

			title: "Code Maintenance",
			content:
				"Our maintenance services ensure your website continues to function smoothly. We handle any functionality issues, make necessary changes, and ensure everything works as it should, so you don’t have to worry about technical problems.",
		},
		{
			icon: (
				<BugReport className="text-4xl p-2 h-full w-full flex justify-center align-center" />
			),

			title: "Error Fixing",
			content:
				"If you encounter any bugs or errors after your site goes live, we’re here to help. We quickly address and fix any issues to minimize disruptions and keep your website running perfectly.",
		},
	];

	return (
		<>
			<Container
				maxWidth="xl"
				className="shadow-lg shadow-gray-400 py-16 dark:shadow-md border-x-2 border-b-2 my-5 dark:bg-gradient-to-r dark:from-gray-900 dark:to-rose-900"
			>
				<Box>
					<Typography
						variant="h4"
						className="text-center my-16 font-alata "
					>
						Additional Service
					</Typography>
					<Grid
						container
						columns={{ xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
						className="justify-center"
						spacing={2}
						rowSpacing={5}
					>
						{cardData.map((item, index) => (
							<Grid
								item
								key={index}
								className="w-full sm:w-1/2 md:w-1/3 xl:1/5"
							>
								<AdditionalServiceCard
									icon={item.icon}
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

export default AdditionalService;
