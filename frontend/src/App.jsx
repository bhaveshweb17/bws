import React from "react";
import Navbar from "./component/header/navbar/Navbar";
import HeroSection from "./component/header/hero-section/HeroSection";
import "./css/style.css";
import AboutSection from "./component/section/about-section/AboutSection";
import OurMission from "./component/section/our-mission/OurMission";
import AboutOffer from "./component/section/about-offer/AboutOffer";
import OurVision from "./component/section/our-vision/OurVision";
import Service from "./component/section/service/Service";
import AdditionalService from "./component/section/service/AdditionalService";
import Sample from "./component/section/sample/Sample";
import Contact from "./component/section/contact-us/Contact";
import Footer from "./component/section/footer/Footer";
import { ThemeProvider } from "@mui/material";
import { linkTheme } from "./theme/theme";
import Process from "./component/process/Process";
function App() {
	return (
		<>
			<Navbar />
			<HeroSection />
			{/* <Process /> */}
			<AboutSection />
			<AboutOffer />
			<OurMission />
			<OurVision />
			<ThemeProvider theme={linkTheme}>
				<Service />
				<AdditionalService />
				<Sample />
				<Contact />
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default App;
