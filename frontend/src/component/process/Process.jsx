import { Box } from "@mui/material";
import React from "react";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import Success from "./Success";

const Process = () => {
	return (
		<>
			<Box className="h-dvh">
				<Box className="border-s-2 border-red-400 h-60 w-80 ">
					<Loading />
				</Box>
				<Box className="bg-gray-900 h-60 w-80 flex flex-col justify-center align-center ">
					<ErrorMessage />
				</Box>
				<Box className="bg-gray-900 h-60 w-80 flex flex-col justify-center align-center ">
					<Success />
				</Box>
			</Box>
		</>
	);
};

export default Process;
