import React from 'react'
import { Link } from 'react-router-dom'

function EditPost() {
  return (
    <>
      <h1>Edit a post</h1>
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
              Edit the post
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditPost