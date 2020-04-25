import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar({ title, icon }) {
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
					<li className='nav-item'>
						<Link className='nav-link text-light' to='/'>
							Home<span className='sr-only'>(current)</span>
						</Link>
					</li>
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
