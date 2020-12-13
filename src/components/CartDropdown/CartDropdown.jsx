import React from 'react';

import CustomButton from '../CustomButton/CustomButton'; 
import CartItem from '../CartItem/CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';

import './CartDropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {

	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{
					cartItems.map((cartItem, i) => {
						return <CartItem key={i} item={cartItem} />
					})
				}
			</div>
			<CustomButton>GO TO CHECKOUT </CustomButton>
		</div>
	)
}

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);

