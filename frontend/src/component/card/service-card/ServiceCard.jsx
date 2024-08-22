import { Card, CardContent, CardMedia, Typography, Link } from "@mui/material";
import React, { useState } from "react";

const ServiceCard = ({ image, title, content }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleContent = (event) => {
		event.preventDefault();
		setIsExpanded(!isExpanded);
	};

	return (
		<Card className="min-h-96 hover:bg-slate-300">
			<CardMedia
				component={"img"}
				image={`../../../image/service/${image}`}
				className="h-64 w-full"
				alt={title}
			/>
			<CardContent className="font-alata">
				<Typography className="text-lg font-semibold font-lato">
					{title}
				</Typography>
				<Typography className="font-lato">
					{isExpanded ? content : `${content.substring(0, 100)}...`}
					<Link
						href="#"
						onClick={toggleContent}
						color="primary"
						underline="hover"
						className="text-sm"
						style={{ cursor: "pointer" }}
					>
						{isExpanded ? "Read Less" : "Read More"}
					</Link>
				</Typography>
			</CardContent>
		</Card>
	);
};

export default ServiceCard;
