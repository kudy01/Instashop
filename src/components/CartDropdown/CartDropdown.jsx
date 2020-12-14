import React from 'react';

import CustomButton from '../CustomButton/CustomButton'; 
import CartItem from '../CartItem/CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { withRouter } from 'react-router-dom';

import './CartDropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {

	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{
					cartItems.length ?
					cartItems.map((cartItem, i) => {
						return <CartItem key={i} item={cartItem} />
					})
					:
					<span className='empty-message'>Your cart is empty</span>
				}
			</div>
			<CustomButton onClick={() => {
				history.push('/checkout');
				dispatch(toggleCartHidden())
			}}
				>GO TO CHECKOUT </CustomButton>
		</div>
	)
}

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));

