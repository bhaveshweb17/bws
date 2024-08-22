import React from "react";
import { Box, Drawer, MenuItem, MenuList, Link, Icon } from "@mui/material";
import { Close } from "@mui/icons-material";

const Sidebar = ({ open, action, navLink }) => {
	return (
		<>
			<Drawer open={open} onClose={() => action(!open)} anchor="right">
				<Box className="bg-slate-900 px-20 relative h-dvh">
					<MenuList className="py-10">
						{navLink.map((item, index) => (
							<MenuItem key={index}>
								<Link
									href={item.path}
									className="text-white no-underline hover:text-teal-400 font-alata"
								>
									{item.label}
								</Link>
							</MenuItem>
						))}
					</MenuList>
					<Icon
						className="absolute top-3 left-2 text-2xl  leading-none"
						onClick={() => action(!open)}
					>
						<Close className="text-xl  leading-none text-white" />
					</Icon>
				</Box>
			</Drawer>
		</>
	);
};

export default Sidebar;
