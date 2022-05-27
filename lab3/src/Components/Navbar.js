import React, {useState} from 'react'
import { Link } from 'react-router-dom'

	function Navbar() {

	const {click, setClick} = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<>
			<nav className='navbar'>
				<div className='navbar-container'>
					<Link to='/' className='navbar-logo'>
						The EGUI Blog <i className='fab fa-typo3'></i>
					</Link>
					<div className='menu-icon' onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link to='/Login' className='nav-links' onClick={closeMobileMenu}>
								Login
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/SignUp' className='nav-links-mobile' onClick={closeMobileMenu}>
								Sign Up
							</Link>
						</li>
					</ul>
				</div>
			</nav>      
		</>
	)
	}

	export default Navbar