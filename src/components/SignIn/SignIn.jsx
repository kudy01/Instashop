import React from 'react';

import './SignIn.styles.scss';

class SignIn extends React.Component {
	constructor(){
		super();
		this.state = {
			email: '',
			password: ''
		}
	}

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				
			</div>
		)
	}
}

export default SignIn;