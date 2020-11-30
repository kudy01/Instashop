import React from 'react';

import './CustomButton.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherSignInProps}) => {

	return(
		<button className={`${isGoogleSignIn && 'google-sign-in'} custom-button`} {...otherSignInProps} >
			{children}
		</button>
	)
}

export default CustomButton; 