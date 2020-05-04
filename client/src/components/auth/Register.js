import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

function Register(props) {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;
	const { register, error, clearErrors, isAuthenticated } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/');
		}

		if (error === 'User	already exists') {
			setAlert(error, 'danger');
			clearErrors();
		}
	}, [error, isAuthenticated, props.history, clearErrors, setAlert]);

	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = user;

	const onChange = (ev) => setUser({ ...user, [ev.target.name]: ev.target.value });

	const onSubmit = (ev) => {
		ev.preventDefault();
		if (name === '' || email === '' || password === '') {
			setAlert('Please Enter All Fields', 'danger');
		} else if (password !== password2) {
			setAlert('Passwords do not match', 'danger');
		} else {
			register({ name, email, password });
		}
	};

	return (
		<div className='form-container my-2'>
			<h1>
				Account <span className='text-primary'>Register</span>
			</h1>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						name='name'
						value={name}
						className='form-control'
						onChange={onChange}
						required
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						value={email}
						className='form-control'
						onChange={onChange}
						required
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						value={password}
						className='form-control'
						onChange={onChange}
						minLength='6'
						required
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='password2'>Confirm Password</label>
					<input
						type='password'
						name='password2'
						value={password2}
						className='form-control'
						onChange={onChange}
						minLength='6'
						required
					/>
				</div>
				<input type='submit' value='Register' className='btn btn-primary btn-block' />
			</form>
		</div>
	);
}

export default Register;
