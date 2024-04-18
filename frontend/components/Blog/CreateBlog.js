import React, { useState, useEffect } from "react";
import controls from "../../utils/RTEControl";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
	ssr: false,
	loading: () => null,
});
import axios from "axios";
import { parseCookies } from "nookies";
import {baseUrl} from "../../utils/baseUrl";
import LoadingSpinner from "../../utils/LoadingSpinner";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const INITIAL_VALUE = {
	title: "",
	content: "",
    author: "",
    catId: "",
};

const CreateBlog = ({ user }) => {
	const { auth_token } = parseCookies();
	const [blog, setBlog] = useState(INITIAL_VALUE);
	const [disabled, setDisabled] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const [categories, setCategories] = useState([]);
	const router = useRouter();

	// useEffect(() => {
	// 	const isBlog = Object.values(blog).every((el) => Boolean(el));
	// 	isBlog ? setDisabled(false) : setDisabled(true);
	// }, [blog]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(`${baseUrl}/api/category/`);
			setCategories(response.data);
		};

		fetchData();
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setBlog((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			
			const options = {
				headers: {
				  Authorization: `Bearer ${auth_token}`,
				},
				withCredentials: true,
			};
            console.log(user);
            blog.author = user._id;
			const payload = { ...blog };
            console.log(payload);
			const url = `${baseUrl}/api/posts/posts`;
			const response = await axios.post(url, payload);
			setLoading(false);

			toast.success("Tạo bài viết thành công", {
				style: {
					border: "1px solid #4BB543",
					padding: "16px",
					color: "#4BB543",
				},
				iconTheme: {
					primary: "#4BB543",
					secondary: "#FFFAEE",
				},
			});
            router.push("/");
		} catch (err) {
			console.log(err);
			
			toast.error(err.data, {
				style: {
					border: "1px solid #ff0033",
					padding: "16px",
					color: "#ff0033",
				},
				iconTheme: {
					primary: "#ff0033",
					secondary: "#FFFAEE",
				},
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="row">
				<div className="col-md-6">
					<div className="form-group">
						<label className="form-label fw-semibold">
							Blog Title
						</label>
						<input
							type="text"
							className="form-control"
							placeholder="Blog Title"
							name="title"
							value={blog.title}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<label className="form-label fw-semibold">
							Blog Category
						</label>
						<select
							className="form-select"
							name="catId"
							value={blog.catId}
							onChange={handleChange}
						>
							<option value="">Select</option>
							{categories.length > 0 &&
								categories.map((cat) => (
									<option key={cat._id} value={cat._id}>
										{cat.name}
									</option>
								))}
						</select>
					</div>
				</div>

				<div className="col-md-12">
					<div className="form-group h-100">
						<label className="form-label fw-semibold">
							Overview
						</label>
						<RichTextEditor
							// controls={controls}
							value={blog.content}
							onChange={(e) =>
								setBlog((prevState) => ({
									...prevState,
									content: e,
								}))
							}
						/>
					</div>
				</div>
				
				<div className="col-12">
					<button
						type="submit"
						className="default-btn"
						// disabled={disabled}
					>
						<i className="flaticon-right-arrow"></i>
						Create Blog <span></span>
						{/* {loading ? <LoadingSpinner /> : ""} */}
					</button>
				</div>
			</div>
		</form>
	);
};

export default CreateBlog;
