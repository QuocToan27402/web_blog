import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/router";
import Pagination from "@etchteam/next-pagination";
import CategorySideNav from "../_App/CategorySideNav";
import CourseSkeletonLoader from "../../utils/CourseSkeletonLoader";
import { formatDate } from "../../utils/helper";

const BlogList = ({ user }) => {
	const [Blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);
	// const [pages, setPages] = useState(0);
	// const [coursesCount, setCoursesCount] = useState(0);
	const router = useRouter();
	// const page = router.query.page ? router.query.page : "1";
	// const size = router.query.size ? router.query.size : "9";
	// const short = router.query.short ? router.query.short : "";
	// const search = router.query.search ? router.query.search : "";

	const fetchBlogs = async () => {
		setLoading(true);

		const response = await axios.get(`${baseUrl}/api/posts/posts/`);
		setBlogs(response.data);
		console.log(response.data);
		setLoading(false);
	};
	useEffect(() => {
		fetchBlogs();
	}, []);

	

	return (
		<>
			

			<div className="main-content">
				<div className="container">
					<div className="row">
                        <div className="col-lg-3 col-md-4">
							<CategorySideNav/>
						</div>
						<div className="col-lg-9 col-md-8">
							<div className="main-content-box">
                                <div className="row justify-content-center">
                                    
                                    {Blogs.length > 0
                                        ? Blogs.map((blog) => (
                                                <div
                                                    className="col-lg-9 col-md-12"
                                                    key={blog._id}
                                                >
                                                    <div className="shopping-cart">
                                                        <div className="shopping-cart-list">
                                                            <div className="row align-items-center">
                                                                <div className="col-lg-8">
                                                                    <div className="content">
                                                                        <h3>
                                                                            <Link
                                                                                href={`/blog/${blog._id}`}
                                                                            >
                                                                                <a>
                                                                                    {
                                                                                        blog.title
                                                                                    }
                                                                                </a>
                                                                            </Link>
                                                                        </h3>

                                                                        <p className="fs-14 mb-2 fw-bolder">
                                                                            By{" "}
                                                                            {
                                                                                blog.author.name
                                                                            }
                                                                        </p>

                                                                        <ul className="list">
                                                                            <li>
                                                                                {/* {blog.content} */}
                                                                                {/* <div
                                                                                    dangerouslySetInnerHTML={{ __html: blog.content. }}
                                                                                ></div> */}
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-4 col-6">
                                                                    <div className="price text-end">
                                                                        <span className="fw-bolder fs-16 d-inline-block ms-4">
                                                                            {formatDate(
                                                                                blog.createdAt
                                                                            )}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        ))
                                        : "Empty"} 
                                </div>
                            </div>
                        </div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogList;
