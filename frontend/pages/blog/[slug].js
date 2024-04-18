import React, { useState, useEffect } from "react";
import axios from "axios";
import {baseUrl} from "../../utils/baseUrl";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";
import Link from "next/link";
import { formatDate } from "../../utils/helper";

const BlogDetail = ({ user }) => {
	const [blog, setBlog] = useState({});
    const [name, setName] = useState("");
    const [cate, setCate] = useState("");
	const [loading, setLoading] = useState(true);
	const router = useRouter();
	const {slug} = router.query;
	console.log(slug);

	const fetchBlog = async () => {
		setLoading(true);
		const response = await axios.get(`${baseUrl}/api/posts/posts/${slug}`);
		setBlog(response.data);
        setName(response.data.author.name);
        setCate(response.data.categories.name);
        console.log(cate);
		setLoading(false);
	};
	useEffect(() => {
		fetchBlog();
	},[]);

	

	return (
		<>
			<Navbar user={user} />

			{/* <PageBanner
				pageTitle="Sản phẩm"
				homePageUrl="/"
				homePageText="Trang chủ"
				activePageText="Sản phẩm"
			/> */}
			

			<div className="courses-details-area ptb-100">
				<div className="container">
					<div className="courses-details-header">
						<div className="row align-items-center">
							<div className="col-lg-8 col-md-12">
								<div className="courses-details-desc-style-two">
									<h1>{blog.title}</h1>
								</div>
                                <div className="courses-meta">
									<ul>
										<li>
											<i className="bx bx-folder-open"></i>
											<span>Thể loại</span>
												<Link
													// href={`/category/${category.slug}`}
                                                    href="#"
												>
													<a>{cate}</a>
												</Link>
										</li>
										<li>
											<i className="bx bx-group"></i>
											<span>Tác giả</span>
											<Link href="#">
												<a>
													{name}
												</a>
											</Link>
										</li>
										<li>
											<i className="bx bx-calendar"></i>
											<span>Ngày viết</span>
											<Link href="#">
												<a>{formatDate(blog.createdAt)}</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-8 col-md-12">
							<div className="courses-details-desc-style-two">
								<div className="courses-details-desc-style-two">
                                    {/* <h3>About this course</h3> */}
                                    <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
                                </div>

								

								
							</div>
						</div>

						
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default BlogDetail;
