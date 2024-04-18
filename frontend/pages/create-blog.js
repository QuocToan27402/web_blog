import React from "react";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/camping/MainBanner";
import Features from "../components/camping/Features";
import GoogleMap from "../components/Booking/GoogleMap";
import Footer from "../components/_App/Footer"
import CreateBlog from "../components/Blog/CreateBlog";


function Index({ user }) {
	return (
		<>
			<Navbar user={user}/>
			
            <div className="ptb-100">
				<div className="container">
					<h2 className="fw-bold mb-4">Create the Blog</h2>

					

					<div className="create-course-form">
                        <CreateBlog user={user} />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}



export default Index;