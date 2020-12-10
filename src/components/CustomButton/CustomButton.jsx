import React from 'react';

import './CustomButton.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherSignInProps}) => {

	return(
		<button className={`${inverted && 'inverted'} ${isGoogleSignIn && 'google-sign-in'} custom-button`} {...otherSignInProps} >
			{children}
		</button>
	)
}

export default CustomButton; 