import React from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './SignUp.styles.scss';

class SignUp extends React.Component {

	constructor(){
		super();
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

	handleSubmit = async e => {
		e.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if(password !== confirmPassword) {
			alert('passwords dont match')
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);

			await createUserProfileDocument(user, { displayName });

			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			})

		} catch(error) {
			console.log(error);
		}
	}

	handleChange = (event) => {

		const { value, name } = event.target;

		this.setState({ [name]: value })
	}

	render() {
		return (
			<div className='sign-up' >
				<h2 className='title'> I do not have an account </h2>
				<span>Sign Up with your email and password </span>
				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput 	
						name='displayName' 
						type='text'
						value={this.state.displayName}
						handleChange={this.handleChange}
						required
						label='Display Name'
					/>
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
					<FormInput 	
						name='confirmPassword' 
						type='password'
						value={this.state.confirmPassword}
						handleChange={this.handleChange}
						required
						label='Confirm Password'
					/>
						<CustomButton type='submit'> Sign Up </CustomButton>
				</form>
			</div>
		)
	}
}

export default SignUp;
