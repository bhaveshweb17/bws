import React, { useState } from "react";
import { Box, Modal, IconButton, Link, Typography } from "@mui/material";
import {
	CenterFocusStrong,
	Close,
	ZoomIn,
	ZoomOutMap,
} from "@mui/icons-material";

const images = [
	// Add your image URLs here
	"hero-section.png",
	"about-us.png",
	"chef.png",
	"lunch-menu.png",
	"facilities.png",
	"our-menu.png",
	"photo-gallery.png",
	"regional-dish.png",
	"staff.png",
	"services.png",
];

const SampleGallery = () => {
	const [open, setOpen] = useState(false);
	const [fullSizeOpen, setFullSizeOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState("");

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleFullSizeOpen = (image) => {
		setSelectedImage(image);
		setFullSizeOpen(true);
	};
	const handleFullSizeClose = () => setFullSizeOpen(false);

	return (
		<>
			<Box className="grid gap-2 p-4 grid-cols-3 xl:grid-cols-6 md:grid-cols-6 lg:grid-cols-6">
				{images.slice(0, 5).map((src, index) => (
					<Box key={index} className="relative w-full">
						<img
							src={`../../../../image/sample/${src}`}
							alt={`Image ${index}`}
							className="w-full h-24"
						/>
						<IconButton
							aria-label="Zoom"
							className="absolute bottom-0 z-10 text-white bg-black end-0 text-sm"
							onClick={() => handleFullSizeOpen(src)}
						>
							<CenterFocusStrong className="text-sm" />
						</IconButton>
					</Box>
				))}
				<Box className="mt-4 flex align-center justify-center xl:justify-start">
					<Link
						onClick={handleOpen}
						className="font-lato text-sm h-fit flex my-auto"
					>
						View All
					</Link>
				</Box>
			</Box>

			<Modal
				open={open}
				onClose={handleClose}
				className="flex items-center justify-center"
			>
				<Box className="bg-white p-4 rounded-lg max-w-4xl mx-auto relative">
					<IconButton
						onClick={handleClose}
						className="absolute top-4 right-4 text-gray-600 z-10 hover:text-orange-400"
					>
						<Close />
					</IconButton>
					<Typography className="text-2xl font-lato my-2">
						Sample Photo Gallery
					</Typography>
					<Box className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
						{images.map((src, index) => (
							<Box key={index} className="relative">
								<img
									src={`../../../../image/sample/${src}`}
									alt={`Image ${index}`}
									className="w-full h-24"
								/>
								<IconButton
									aria-label="Zoom"
									className="absolute bottom-0 z-10 text-white bg-slate-700 end-0 text-sm hover:bg-orange-500"
									onClick={() => handleFullSizeOpen(src)}
								>
									<CenterFocusStrong className="text-sm" />
								</IconButton>
							</Box>
						))}
					</Box>
				</Box>
			</Modal>

			{/* Full-size Image Modal */}
			<Modal
				open={fullSizeOpen}
				onClose={handleFullSizeClose}
				className="flex items-center justify-center"
			>
				<Box className="bg-black p-4 rounded-lg max-w-4xl mx-auto relative">
					<IconButton
						onClick={handleFullSizeClose}
						className="absolute top-4 right-4 text-white z-10 hover:text-orange-400"
					>
						<Close className="" />
					</IconButton>
					<img
						src={`../../../../image/sample/${selectedImage}`}
						alt="Full-size"
						className="w-full h-auto"
					/>
				</Box>
			</Modal>
		</>
	);
};

export default SampleGallery;
