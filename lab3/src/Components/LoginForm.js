import React from 'react'
import { Link } from 'react-router-dom'

function LoginForm() {
  return (
    <>
    <div className='App Container'>
		<form>
			<div>
				<label className='form-label'htmlFor='inputUsername'>
					Username
				</label>
				<input type='' className='form-control'id='inputUsername'/>
				<label className='form-label'htmlFor='inputPassword'>
					Password
				</label>
				<input type='password' className='form-control'id='inputPassword'/>
				<Link to='/' className='btn btn-primary'>
					Login
				</Link>
			</div>
		</form>
	</div>
    </>
  )
}

export default LoginForm