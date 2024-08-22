import * as React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

function GradientCircularProgress() {
	return (
		<>
			<svg
				width={0}
				height={0}
				style={{ position: "absolute" }} // Ensure SVG doesn't affect layout
			>
				<defs>
					<linearGradient
						id="my_gradient"
						x1="0%"
						y1="0%"
						x2="0%"
						y2="100%"
					>
						<stop offset="0%" stopColor="#e01cd5" />
						<stop offset="100%" stopColor="#1CB5E0" />
					</linearGradient>
				</defs>
			</svg>
			<CircularProgress
				sx={{
					"svg circle": {
						stroke: "url(#my_gradient)",
						strokeLinecap: "round", // Ensure stroke is visible
						strokeWidth: 4, // Adjust stroke width if needed
					},
					color: "transparent", // Make base color transparent to show gradient
				}}
			/>
		</>
	);
}

const Loading = () => {
	return (
		<Box className="h-60 w-full flex items-center justify-center flex-col bg-slate-900">
			<GradientCircularProgress />
			<Typography className="text-gray-200 text-center font-k2d">
				Please wait for a few seconds ...
			</Typography>
		</Box>
	);
};

export default Loading;
