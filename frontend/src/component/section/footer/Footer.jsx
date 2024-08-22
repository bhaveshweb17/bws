import {
	Email,
	Facebook,
	Instagram,
	LinkedIn,
	Phone,
	WhatsApp,
	YouTube,
} from "@mui/icons-material";
import { Box, Container } from "@mui/material";
import React from "react";

const Footer = () => {
	const quickLinkList = [
		{ name: "home", href: "#home" },
		{ name: "about", href: "#about" },
		{ name: "service", href: "#service" },
		{ name: "contact", href: "#contact" },
	];

	const contactInfo = [
		{
			icon: <Phone />,
			value: "+91 9723884857",
			href: "tel:+919723884857",
		},
		{
			icon: <Email />,
			value: "bhaveshwebstudio@gmail.com",
			href: "mailto:bhaveshwebstudio@gmail.com",
		},
		{
			icon: <WhatsApp />,
			value: "+91 9723884857",
			href: "https://wa.me/+919723884857",
		},
	];

	const serviceList = [
		{ name: "QR Setup", href: "#qr-setup" },
		{ name: "Web Design", href: "#web-design" },
		{ name: "Upgrades", href: "#upgrades" },
	];

	const socialMediaList = [
		{
			icon: <Instagram />,
			platform: "Instagram",
			link: "https://www.instagram.com/bhavesh_web_studio",
		},
		{
			icon: <Facebook />,
			platform: "Facebook",
			link: "https://www.facebook.com/people/Bhavesh-Parmar/61555367647617/?ref=xav_ig_profile_web",
		},
		{
			icon: <YouTube />,
			platform: "YouTube",
			link: "https://www.youtube.com/@BhaveshWebStudio",
		},
		{
			icon: <LinkedIn />,
			platform: "LinkedIn",
			link: "https://www.linkedin.com/in/bhavesh-web-studio/",
		},
	];

	return (
		<Box
			component="footer"
			className="bg-gray-900 text-white py-12 relative border-t-2 border-gray-50"
		>
			<Container maxWidth="lg">
				{/* Logo and Content */}
				<div className="flex flex-col items-center md:items-start md:flex-row justify-center md:justify-between mb-8">
					{/* Logo */}
					<div className="mb-6 md:mb-0 text-center md:text-left">
						<img
							src="../../../image/logo/logo(dark).png" // Replace with your logo path
							alt="Logo"
							className="w-32 h-32"
							onClick={() => (location.href = "./index.html")}
						/>
					</div>

					{/* Quick Links */}
					<div className="mb-6 md:mb-0 text-center md:text-left">
						<h2 className="text-xl md:text-2xl font-bold mb-4 font-lato">
							Quick Links
						</h2>
						<ul className="space-y-2">
							{quickLinkList.map(({ name, href }) => (
								<li key={name} className="hover:text-gray-400">
									<a
										href={href}
										className="text-gray-300 capitalize font-k2d px-3"
									>
										{name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div className="mb-6 md:mb-0 text-center md:text-left">
						<h2 className="text-xl md:text-2xl font-bold mb-4 font-lato">
							Contact Info
						</h2>
						<ul className="space-y-4">
							{contactInfo.map(({ icon, value, href }) => (
								<li
									key={value}
									className="flex items-center justify-center md:justify-start space-x-3"
								>
									<a
										href={href}
										target="blank"
										className="text-gray-400 hover:text-white font-k2d px-3"
									>
										{icon}&nbsp;
										<span>{value}</span>
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div className="mb-6 md:mb-0 text-center md:text-left">
						<h2 className="text-xl md:text-2xl font-bold mb-4 font-lato">
							Services
						</h2>
						<ul className="space-y-2">
							{serviceList.map(({ name, href }) => (
								<li
									key={name}
									className="text-gray-300 hover:text-gray-400 font-k2d px-3"
								>
									<a href={href}>{name}</a>
								</li>
							))}
						</ul>
					</div>

					{/* Social Media */}
					<div className="text-center md:text-left">
						<h2 className=" text-xl md:text-2xl font-bold mb-4 font-lato">
							Follow Us
						</h2>
						<div className="flex justify-center md:justify-start space-x-4 px-3">
							{socialMediaList.map(({ icon, link }) => (
								<a
									key={link}
									href={link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-white text-xl"
								>
									{icon}
								</a>
							))}
						</div>
					</div>
				</div>
			</Container>
			{/* Footer Bottom */}
			<div className="text-center text-gray-400 absolute bottom-0 w-full py-3 border-t">
				<p className="text-sm sm:text-base font-lato">
					&copy; {new Date().getFullYear()} Bhavesh Web Studio. All
					rights reserved.
				</p>
			</div>
		</Box>
	);
};

export default Footer;
