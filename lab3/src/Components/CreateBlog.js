import axios from 'axios';
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Session from 'react-session-api'

function CreateBlog() {

	const [title, setTitle] = useState("");

	const addBlog = async () => {
		const user = await axios.get(`http://localhost:5000/users?username=${Session.get("username")}`);

		if(user.data[0] === undefined){
			alert("You need to login or sign up before creating a Blog");
			return;
		}

		const entryList = [];
		const newBlog = {
			title: title,
			ownerId: Session.get("userId"),
			entryList: entryList
		};
		
		const response = await axios.post("http://localhost:5000/blogs", newBlog);

		if(response){
			alert("Blog Created");
		} else {
			alert("Oops... Something went wrong !");
		}

		setTitle("");
	}

  return (
    <>
      <h1>Create a blog</h1>
      <div className='App Container'>
		<form>
			<div>
				<label className='form-label'htmlFor='inputTitle'>
					Blog Title
				</label>
				<input 
					type='' 
					className='form-control'
					value={title}
					onChange={(e) => setTitle(e.target.value)}/>
				<Link to='/' className='btn btn-primary' onClick={addBlog}>
					Login
				</Link>
			</div>
		</form>
	</div>
    </>
  )
}

export default CreateBlog