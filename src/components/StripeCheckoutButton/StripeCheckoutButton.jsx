import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51I1VPYL4d6U7yPZRgqbmv7IiB5SvPLniA8GONyFyObkTJErBpXIcMEac3YjAaRX4MyuVjXsOFHNPpOoaozNkfPVo00hGV4vWGs';

	const onToken = token => {
		console.log(token);
		alert('Payment Successful')
	}

	return (
		<StripeCheckout
			label='Pay Now'
			name='Instashop Pvt. Ltd.'
			billingAddress={true}
			shippingAddress={true}
			image='https://sendeyo.com/up/d/f3eb2117da'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
}


export default StripeCheckoutButton;