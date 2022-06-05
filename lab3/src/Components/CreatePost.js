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
    ownerId: "",
    id: ""
  })

  const addPost = async (e) => {
    newEntry.date = Date().toLocaleString();
    newEntry.ownerId = Session.get("userId");

    if(newEntry.content === "" || newEntry.title === ""){
      alert("Please fill all the fields");
      return;
    }

    const blog = await axios.get(`http://localhost:5000/blogs/${Session.get("blogId")}`);
    newEntry.id = blog.data[0].entrylist.lenght + 1;
    blog.data[0].entrylist.push(newEntry);
    const newEntryList = blog.data[0].entrylist;

    const response = await axios.patch(`http://localhost:5000/blogs/${Session.get("blogId")}`, {entrylist : newEntryList});
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
      ownerId: "",
      id: ""
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