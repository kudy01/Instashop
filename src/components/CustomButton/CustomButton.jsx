import React from 'react';

import './CustomButton.styles.scss';

const CustomButton = ({ children, ...otherSignInProps}) => {

	return(
		<button className='custom-button' {...otherSignInProps} >
			{children}
		</button>
	)
}

export default CustomButton;