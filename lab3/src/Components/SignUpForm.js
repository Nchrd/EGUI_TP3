import React from 'react'
import { Link } from 'react-router-dom'
import Users from '../db.json'

function SignUpForm() {
  return (
    <>
    <div>
		<form>
			<div>
				<label className='form-label'htmlFor='inputEmail'>
					Email Address
				</label>
				<input type='email' className='form-control'id='inputEmail'/>
				<label className='form-label'htmlFor='inputUsername'>
					Username
				</label>
				<input type='' className='form-control'id='inputUsername'/>
				<label className='form-label'htmlFor='inputPassword'>
					Password
				</label>
				<input type='password' className='form-control'id='inputPassword'/>
				<label className='form-label'htmlFor='inputPasswordConfirm'>
					Confirm password
				</label>
				<input type='password' className='form-control'id='inputPasswordConfirm'/>
				<Link to='/' className=' btn btn-primary'>
					Sign Up
				</Link>
			</div>
		</form>
	</div>
    </>
  )
}

export default SignUpForm