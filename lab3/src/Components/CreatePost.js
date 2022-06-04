import React from 'react'
import { Link } from 'react-router-dom'

function CreatePost() {
  return (
    <>
      <h1>Create a post in a blog</h1>
      <div className='App Container'>
        <form>
          <div>
            <label className='form-label'htmlFor='inputPostTitle'>
              Post Title
            </label>
            <input type='' className='form-control'id='inputPostTitle'/>
            <label className='form-label'htmlFor='inputContent'>
              Post Content
            </label>
            <input type='' className='form-control'id='inputContent'/>
            <Link to='/' className='btn btn-primary'>
              Share the post
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreatePost