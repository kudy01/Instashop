import React from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './SignIn.styles.scss';

class SignIn extends React.Component {
	constructor(){
		super();
		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();

		this.setState({email: '', password: ''})
	}

	handleChange = (event) => {

		const { value, name } = event.target;

		this.setState({ [name]: value })
	}

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span> Sign in with your email and password </span>
				<form onSubmit={this.handleSubmit}>
					<FormInput 	
						name='email' 
						type='email'
						value={this.state.email}
						handleChange={this.handleChange}
						required
						label='Email'
					/>
					<FormInput 	
						name='password' 
						type='password'
						value={this.state.password}
						handleChange={this.handleChange}
						required
						label='Password'
					/>
					<CustomButton type='submit'> Sign In </CustomButton>
					<CustomButton onClick={signInWithGoogle}> 
						{' '}
						Sign In with Google {' '} 
					</CustomButton>
				</form>
			</div>
		)
	}
}

export default SignIn;