import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import { Link, MenuItem, Avatar, MenuList, Icon } from "@mui/material";
import Sidebar from "../drawer/Sidebar";
import { Menu } from "@mui/icons-material";

const Navbar = () => {
	const navMenuList = [
		{ label: "Home", path: "#home" },
		{ label: "About", path: "#about" },
		{ label: "Service", path: "#service" },
		{ label: "Contact", path: "#contact" },
	];
	const [open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);

	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<AppBar sx={{ background: "black" }} position="fixed">
				<Toolbar className="flex justify-between md:justify-around h-20 ">
					<Avatar
						src="../../../image/logo/logo(dark).png"
						className="object-fill"
						onClick={() => (location.href = "./index.html")}
					/>
					<Icon
						onClick={() => setOpen(!open)}
						className="text-2xl leading-none md:hidden sm:inline"
					>
						<Menu className="text-2xl" />
					</Icon>
					<MenuList className=" md:flex hidden">
						{navMenuList.map((item, index) => (
							<MenuItem key={index} className="">
								<Link
									href={item.path}
									className="text-white no-underline hover:text-teal-400 font-alata"
								>
									{item.label}
								</Link>
							</MenuItem>
						))}
					</MenuList>
				</Toolbar>
			</AppBar>
			<Sidebar open={open} action={setOpen} navLink={navMenuList} />
		</>
	);
};

export default Navbar;
