import React from "react";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/camping/MainBanner";
import Features from "../components/camping/Features";
import GoogleMap from "../components/Booking/GoogleMap";
import Footer from "../components/_App/Footer"
import MyBlog from "../components/Blog/MyBlog";
import PageBanner from "../components/Common/PageBanner"


function Index({ user }) {
	return (
		<>
			<Navbar user={user}/>
            <PageBanner
				pageTitle="Blog của tôi"
				homePageUrl="/"
				homePageText="Homepage"
				activePageText="Blog của tôi"
			/>
			<MyBlog user={user}/>
			<Footer />
		</>
	);
}



export default Index;