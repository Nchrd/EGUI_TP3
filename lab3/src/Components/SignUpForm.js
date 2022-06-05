import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Session from 'react-session-api'

	const  SignUpForm = () => {

		const [users, setUsers] = useState({
			username : "",
			email: "",
			password: ""
		});

		const handleFormSubmit = async (e) => {

			//Check if all fields are completed
			if(users.email === "" || users.username === "" || users.password === ""){
				alert("Please fill all the fields");
				return;
			}

			
			//Check if mail is free
			const userMail = await axios.get(`http://localhost:5000/users?email=${users.email}`);

			if(userMail.data[0] !== undefined){
				alert("Mail already taken");
				return;
			}


			//Check if username is free
			const userName = await axios.get(`http://localhost:5000/users?username=${users.username}`);

			if(userName.data[0] !== undefined){
				alert("Username already taken");
				return;
			}


			//Put user in db
			const response = await axios.post("http://localhost:5000/users" , users);

			if(response) {
				Session.set("username", users.username);
				const newUser = await axios.get(`http://localhost:5000/users?username=${users.username}`);
				Session.set("userId", newUser.data[0].id);
				alert("User created");
			} else {
				alert("Oops... Something went wrong !");
				return;
			}
			setUsers({
				username : "",
				email: "",
				password: ""
			})
		}

		return (
			<>
			<div>
				<h1>Sign Up</h1>
			<form className='ui form'>
				<div>
					<label className='form-label'>
						Email Address
					</label>
					<input 
						type='email' 
						className='form-control'
						placeholder='Email'
						value={users.email}
						onChange={(e) => setUsers({ ...users, email : e.target.value})}/>
					<label className='form-label'>
						Username
					</label>
					<input 
						type='text' 
						className='form-control'
						placeholder='Username'
						value={users.username}
						onChange={(e) => setUsers({ ...users, username : e.target.value})}/>
					<label className='form-label'>
						Password
					</label>
					<input 
						type='password' 
						className='form-control'
						placeholder='Password'
						value={users.password}
						onChange={(e) => setUsers({ ...users, password : e.target.value})}/>
						<div  style={{alignContent:"center", alignItems:"center", margin:"20px 20px 20px 20px"}}>
						<Link to='/login' className='btn btn-primary' onClick={handleFormSubmit}>
								Sign Up
							</Link>
						</div>	
				</div>
			</form>
		</div>
			</>
		)
	}

export default SignUpForm;