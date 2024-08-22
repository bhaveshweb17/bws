import * as React from "react";
import { Box, Typography } from "@mui/material";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

const Success = () => {
	const [animationData, setAnimationData] = useState(null);

	useEffect(() => {
		fetch(
			"https://lottie.host/c61406fc-b3d6-4fcc-b36b-10be0addf2ef/sBFpN7AErH.json"
		)
			.then((response) => response.json())
			.then((data) => setAnimationData(data))
			.catch((error) =>
				console.error("Error loading Lottie animation:", error)
			);
	}, []);

	return (
		<Box className="h-full w-full flex items-center justify-center flex-col">
			{animationData ? (
				<>
					<Lottie
						animationData={animationData}
						loop={true} // Set to true if you want it to loop
						style={{ width: 150, height: 150 }} // Adjust size as needed
					/>
					<Typography className="text-green-500 text-center font-k2d">
						Thank you! Your message has been sent successfully.
					</Typography>
				</>
			) : (
				""
			)}
		</Box>
	);
};

export default Success;
