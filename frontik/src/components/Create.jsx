import React,{useState} from 'react'

const Create = () => {
  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');
  const [author,setAuthor] = useState('');
  const [cat,setCat] = useState(1);
  const handleSubmit = (e) =>{
	e.preventDefault();
	const article = {title:title,content:body,author:author,cat_id:cat}
	fetch('http://127.0.0.1:8000/api/v1/articlelist/',{
		method:'POST',
		headers:{'Content-Type':"application/json"},
		body: JSON.stringify(article)
	})
  }
  return (
	
	<div className="container">
		<h2 className='create_title'>Add new article</h2>
		<form onSubmit={handleSubmit} className='create_form'>
			<label htmlFor="" className='form_label'>Article title</label>
			<input type="text" required value={title} onChange={(e) =>setTitle(e.target.value)} />

			<label htmlFor="" className='form_label'>Article body</label>
			<textarea type="text" required value={body} onChange={(e) =>setBody(e.target.value)} />

			<label htmlFor="" className='form_label'>Article`s author</label>
			<input type="text" required value={author} onChange={(e) =>setAuthor(e.target.value)} />

			<select name="" id="" value={cat} onChange={(e) => setCat(e.target.value)}>
				<option value="1">техноблон</option>
				<option value="2">кухняблог</option>
			</select>
			<button className='button-92'>Add Article</button>
		</form>
	</div>
  )
}

export default Create