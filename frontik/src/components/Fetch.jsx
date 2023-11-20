import React from 'react'
import { useEffect,useState } from 'react'
const BASE_URL = 'http://127.0.0.1:8000/api/v1'
const Fetch = () => {
	const[blogs,setBlogs] = useState([]);
	useEffect(()=>{
		const Fetchart = async()=>{
			const response = await fetch(`${BASE_URL}/articlelist/`);
			const arts = await response.json();
			setBlogs(arts.articles);
		}
		Fetchart();
	},[])
	return (
		<div className="container">
			<div className="Fetch_title">Newest Blogs</div>

				{blogs.map(blog => (
			<div className="card">
				<div className="cart-title">{blog.title}</div>
				<div className="cart-body">{blog.content}</div>

				<div className="cart-author">{blog.author}</div>
				
			</div>
		))}
		</div>
	)
}

export default Fetch