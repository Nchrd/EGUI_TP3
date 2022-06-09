import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Session from 'react-session-api'

function CreatePost() {

  const currentBlog = `/blogs/${Session.get("blogId")}`;
  const [newEntry, setNewEntry] = useState({
    title: "",
    content: "",
    date: "",
    owner: "",
    blogId: 0
  })

  const addPost = async (e) => {

    const user = await axios.get(`http://localhost:5000/users?username=${Session.get("username")}`);

		if(user.data[0] === undefined){
			alert("You need to login or sign up before creating an entry");
			return;
		}

    newEntry.date = new Date().toLocaleString();
    newEntry.owner = Session.get("username");
    newEntry.blogId = Session.get("blogId");

    if(newEntry.content === "" || newEntry.title === ""){
      alert("Please fill all the fields");
      return;
    }

    const response = await axios.post(`http://localhost:5000/entries`, newEntry);
    
    if(response){
      alert("Entry added");
    }else{
      alert("Oops... Something went wrong !");
			return;
    }

    setNewEntry({
      title: "",
      content: "",
      date: "",
      owner: "",
      blogId: 0
    })
  }

  return (
    <>
      <h1>Create a post in a blog</h1>
      <div className='App Container'>
        <form>
          <div>
            <label className='form-label'htmlFor='inputPostTitle'>
              Post Title
            </label>
            <input 
              type='text' 
              className='form-control'
              value={newEntry.title}
              onChange={(e) => setNewEntry({...newEntry, title: e.target.value})}/>
            <label className='form-label'htmlFor='inputContent'>
              Post Content
            </label>
            <input 
              type='text' 
              className='form-control'
              value={newEntry.content}
              onChange={(e) => setNewEntry({...newEntry, content: e.target.value})}/>
            <Link to={currentBlog} className='btn btn-primary' onClick={addPost}>
              Share the post
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreatePost