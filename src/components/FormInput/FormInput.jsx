import React from 'react';

import './FormInput.styles.scss';

const FormInput = ({ handleChange, label, ...otherSignInProps}) => {

	return(
		<div className='group'>
			<input className='form-input' onChange={handleChange} {...otherSignInProps}/>
			{label ? (
		      <label
		        className={`${
		          otherSignInProps.value.length ? 'shrink' : ''
		        } form-input-label`}
		      >
		        {label}
		      </label>
		    ) : null}
		</div>
	)
}

export default FormInput;