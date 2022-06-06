import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Session from 'react-session-api'

function EditPost() {

  const newUrl = `/blogs/${Session.get("blogId")}`;

  const [post, setPost] = useState({
    title: "",
    content: "",
    date:"",
    owner:"",
    blogId: ""
  })

  const editPost = async () => {
    const postData = axios.get(`http://localhost:5000/entries/${Session.get("postId")}`);
    setPost(postData);
    const response = await axios.put(`http://localhost:5000/entries/${Session.get("postId")}`, post);
    if(response){
      alert("Entry modified");
    }else{
      alert("Oops... Something went wrong !");
    }
  }

  return (
    <>
      <h1>Edit a post</h1>
      <div className='App Container'>
        <form>
          <div>
            <label className='form-label'htmlFor='inputPostTitle'>
              Post Title
            </label>
            <input 
              type='text'  
              className='form-control'
              value={post.title}
              onChange={(e) => setPost({...post, title: e.target.value})}/>
            <label className='form-label'htmlFor='inputContent'>
              Post Content
            </label>
            <input 
              type='text' 
              className='form-control'
              value={post.content}
              onChange={(e) => setPost({...post, content: e.target.value})}/>
            <Link to={newUrl} className='btn btn-primary' onClick={editPost()}>
              Edit the post
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditPost