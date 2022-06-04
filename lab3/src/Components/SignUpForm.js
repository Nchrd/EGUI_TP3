import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

	const  SignUpForm = () => {

		const [users, setUsers] = useState({
			username : "",
			email: "",
			password: ""
		});

		const [userList, setUserList] = useState(false);

		const fetchUsers = async () => {
			const response = await axios.get("http://localhost:5000/users");
			const userList = await response.data;
			setUserList(userList);
		};

		useEffect(() => {
			const getAllUsers = async () => {
				const allUsers = await fetchUsers();
				if(allUsers) setUserList(allUsers);
			};

			getAllUsers();
		})

		const handleFormSubmit = async (e) => {

			//TODO
			//Check if user already exist 

			if(users.email === "" || users.username === "" || users.password === ""){
				alert("Please fill all the fields");
				return;
			}

			const response = await axios.post("http://localhost:5000/users" , users);

			if(response) {
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
			<form className='ui form'>
				<div>
					<label className='form-label'>
						Email Address
					</label>
					<input 
						type='email' 
						className='form-control'
						placeholder='Email'
						id='sampleInputFormControl'
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
						<btn className='btn btn-primary' onClick={handleFormSubmit}>
								Sign Up
						</btn>
					
				</div>
			</form>
		</div>
			</>
		)
	}

export default SignUpForm;