import {
	Card,
	CardActions,
	CardContent,
	Icon,
	Typography,
} from "@mui/material";
import React from "react";

const AdditionalServiceCard = ({ icon, title, content }) => {
	return (
		<Card className="relative p-4 border border-gray-300 z-0 overflow-visible min-h-96 hover:bg-blue-300">
			{/* Icon Container */}
			<div className="absolute top-0 left-1/2 transform -translate-x-2/4 -translate-y-3/4 flex items-center justify-center z-10 mt-4">
				<Icon className="text-5xl text-white bg-slate-800 rounded-full ">
					{icon}
				</Icon>
			</div>

			<CardContent className="pt-16">
				{" "}
				{/* Added padding to avoid overlap with icon */}
				<Typography className="text-xl font-bold font-lato mb-2 text-center">
					{title}
				</Typography>
				<Typography className="font-lato text-lg">{content}</Typography>
			</CardContent>
		</Card>
	);
};

export default AdditionalServiceCard;
