import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Session from 'react-session-api'

function EditPost() {

  const [post, setPost] = useState({
    title: "",
    content: "",
    date:"",
    owner:"",
    blogId: ""
  })

  const fetchPost = async () => {
    const response = await axios.get(`http://localhost:5000/entries?id=${Session.get("postId")}`);
    setPost(response.data[0]);
  }

  useEffect(() => {
    fetchPost();
  }, [])

  const editPost = async () => {
    post.date = new Date().toLocaleString();
    post.blogId = Session.get("blogId");
    post.owner = Session.get("username");

    const response = await axios.put(`http://localhost:5000/entries/${Session.get("postId")}`, post);
    if(!response){
      alert("Oops... Something went wrong !");
    }
  }

  const newUrl = `/blogs/${Session.get("blogId")}`;

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
              <Link to='/' className='btn btn-primary' onClick={editPost()}>
                  Edit the entry
              </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditPost