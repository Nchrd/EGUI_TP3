import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Session from 'react-session-api'

function LoginForm() {

	const [users, setUsers] = useState({
		username: "",
		password: ""
	})

	const handleFormSubmit = async (e) => {

		//Check if all fields were completed
		if(users.username === "" || users.password === ""){
			alert("Please fill all the fields");
			return;
		}

		//Check is credentials are good
		const user = await axios.get(`http://localhost:5000/users?username=${users.username}`);

		if(!user.data[0]) {
			alert("Username does not exists");
			return;
		}

		if(users.password !== user.data[0].password) {
			alert("Wrong password");
			return;
		}

		alert("Bonjour");

		//Enable session
		
		Session.set("username", users.username);
		Session.set("id", user.data[0].id);
	}

  return (
    <>
    <div>
			<h1>Login</h1>
		<form>
			<div>
				<label className='form-label'htmlFor='inputUsername'>
					Username
				</label>
				<input 
					type='text' 
					className='form-control'
					value={users.username}
					onChange={(e) => setUsers({...users, username: e.target.value})}/>
				<label className='form-label'htmlFor='inputPassword'>
					Password
				</label>
				<input 
					type='password' 
					className='form-control'
					value={users.password}
					onChange={(e) => setUsers({...users, password: e.target.value})}/>
				<Link to='/' className='btn btn-primary' onClick={handleFormSubmit}>
					Login
				</Link>
			</div>
		</form>
	</div>
    </>
  )
}

export default LoginForm;