import { Error } from "@mui/icons-material";
import { Box, Icon, IconButton, Typography } from "@mui/material";
import React from "react";

const ErrorMessage = () => {
	return (
		<>
			<Box className="h-full w-full flex flex-col justify-center align-center bg-slate-900">
				<IconButton className="text-4xl">
					<Error className="text-3xl text-red-500" />
				</IconButton>
				<Typography className="text-center text-yellow-300 font-k2d ">
					Failed to Send Message
				</Typography>
			</Box>
		</>
	);
};

export default ErrorMessage;
