import React from "react";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/camping/MainBanner";
import Features from "../components/camping/Features";
import GoogleMap from "../components/Booking/GoogleMap";
import Footer from "../components/_App/Footer"
import BlogList from "../components/Blog/BlogList";


function Index({ user }) {
	return (
		<>
			<Navbar user={user}/>
			<BlogList />
			<Footer />
		</>
	);
}



export default Index;