import React from 'react';

import './FormInput.styles.scss';

const FormInput = ({ handleChange, label, ...otherSignInProps}) => {
	return(
		<div className='group'>
			<input className='form-input' onChange={handleChange} />
			{
				label && (
					<label className={`${
							otherSignInProps.value.length ? 'shrink' : ''
						} form-input-label`}
					>
					{label}
					</label>
				)
			}
		</div>
	)
}

export default FormInput;