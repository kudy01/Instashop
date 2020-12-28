import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/icon.svg'; 
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

import { HeaderContainer, OptionsContainer, LogoContainer, OptionLink, OptionDiv } from './Header.styles';

const Header = ({ currentUser, hidden }) => {
	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<Logo className='logo'/>
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to='/shop'>
					SHOP
				</OptionLink>
				<OptionLink to='/contact'>
					CONTACT 
				</OptionLink>
				{
					currentUser 
					?
					<OptionDiv onClick={() => auth.signOut()}>
						SIGN OUT
					</OptionDiv>
					:
					<OptionLink to='/signin'>
						SIGN IN 
					</OptionLink>
				}
				<CartIcon />
			</OptionsContainer>
			{
				!hidden && <CartDropdown />
			}
		</HeaderContainer>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
