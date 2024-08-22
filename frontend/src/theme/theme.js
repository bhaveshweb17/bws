import { createTheme } from "@mui/material";

export const linkTheme = createTheme({
	components: {
		MuiLink: {
			styleOverrides: {
				root: {
					color: "gray",
					textDecoration: "none",
					"&:hover": {
						textDecoration: "none",
						color: "purple",
					},
				},
			},
		},
	},
});

export const inputTheme = createTheme({
	components: {
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					color: "gray",

					"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
						borderColor: "gray", // Change to the color you want
					},
					"&:hover .MuiOutlinedInput-notchedOutline": {
						borderColor: "gray", // Change to the color you want
					},
					"& .MuiOutlinedInput-notchedOutline": {
						borderColor: "gray",
					},
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					"&.Mui-focused": {
						color: "gray",
					},
				},
			},
		},
		MuiFormLabel: {
			styleOverrides: {
				root: {
					color: "gray",
				},
			},
		},
	},
});

export const buttonTheme = createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					background: "linear-gradient(crimson,orange)",
				},
			},
		},
	},
});
