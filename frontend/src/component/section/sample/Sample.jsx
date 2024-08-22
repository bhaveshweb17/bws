import {
	Box,
	Container,
	MenuList,
	Typography,
	MenuItem,
	Button,
	Link,
} from "@mui/material";
import React from "react";
import SampleGallery from "./SampleGallery";

const Sample = () => {
	const featureList = [
		"Responsive Design",
		"Easy Navigation",
		"Attractive Layouts",
		"Contact Form",
		"Image Gallery",
	];
	return (
		<>
			<Container
				maxWidth="xl"
				className="mt-20  shadow-gray-400 shadow-lg dark:shadow-md border-x-2 border-b-2 my-5 dark:bg-gradient-to-b dark:from-orange-900 dark:to-gray-950"
			>
				<Box className="flex flex-col xl:flex-row gap-7 xl:gap-10 py-5 xl:py-20">
					<Box className=" xl:w-1/2 ">
						<img
							src="../../../image/section/sample.jpg"
							alt=""
							className="h-full w-full lg:h-50dvh"
						/>
					</Box>
					<Box className="xl:w-1/2 ">
						<Typography
							variant="h5"
							className="font-lato font-semibold"
						>
							Beast Bite Restaurant (Sample Site)
						</Typography>
						<Typography className="font-lato">
							Beast Bite Restaurant offers a sleek and modern
							design that’s easy to navigate. Our sample site
							shows how we can present your restaurant with a
							clean look, clear menus, and engaging visuals. It’s
							designed to attract and keep your customers’
							attention.
						</Typography>
						<Typography className="text-lg mt-2 font-bold font-lato">
							Features
						</Typography>
						<MenuList variant="square">
							{featureList.map((item, index) => (
								<>
									{console.log(item)}
									<MenuItem className=" font-lato">
										{item}
									</MenuItem>
								</>
							))}
						</MenuList>
						<SampleGallery />
						<Link
							href="https://sample-design-one.vercel.app/"
							target="_blank"
							className="no-underline text-white bg-black p-3 px-4 rounded-full text-sm font-lato mx-auto flex w-fit dark:bg-pink-500 dark:shadow dark:shadow-gray-400 hover:text-yellow-100"
						>
							View Sample
						</Link>
					</Box>
				</Box>
			</Container>
		</>
	);
};

export default Sample;
