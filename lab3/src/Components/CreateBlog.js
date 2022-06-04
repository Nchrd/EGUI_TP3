import React from 'react'
import { Link } from 'react-router-dom'

function CreateBlog() {
  return (
    <>
      <h1>Create a blog</h1>
      <div className='App Container'>
		<form>
			<div>
				<label className='form-label'htmlFor='inputTitle'>
					Blog Title
				</label>
				<input type='' className='form-control'id='inputTitle'/>
				<Link to='/' className='btn btn-primary'>
					Login
				</Link>
			</div>
		</form>
	</div>
    </>
  )
}

export default CreateBlog