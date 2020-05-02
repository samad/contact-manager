import React, { useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

function Navbar({ title, icon }) {
	const authContext = useContext(AuthContext);

	const { isAuthenticated, logout, user } = authContext;

	const onLogout = () => {
		logout();
	};

	const authLinks = (
		<Fragment>
			<li className='nav-item'>
				<span className='nav-link text-light'>Hello, {user && user.name}</span>
			</li>
			<li className='nav-item'>
				<a href='#!' className='nav-link text-light' onClick={onLogout}>
					<i className='fas fa-sign-out-alt'></i> <span className='hide-sm'>Logout</span>
				</a>
			</li>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<li className='nav-item'>
				<Link className='nav-link text-light' to='/register'>
					Register
				</Link>
			</li>
			<li className='nav-item'>
				<Link className='nav-link text-light' to='/login'>
					Login
				</Link>
			</li>
		</Fragment>
	);

	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-primary'>
			<a className='navbar-brand text-light' href='/'>
				<i className={icon}></i> {title}
			</a>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarSupportedContent'
				aria-controls='navbarSupportedContent'
				aria-expanded='false'
				aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='collapse navbar-collapse' id='navbarSupportedContent'>
				<ul className='navbar-nav ml-auto'>
					{isAuthenticated ? authLinks : guestLinks}
					<li className='nav-item'>
						<Link className='nav-link text-light' to='/about'>
							About
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
};

Navbar.defaultProps = {
	title: 'Contact Keeper',
	icon: 'fas fa-id-card-alt',
};

export default Navbar;
