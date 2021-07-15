/* eslint-disable object-curly-newline */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './Header.styles';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {
        currentUser
          ? <OptionLink as="div" onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
          : <OptionLink to="/signin">SIGN IN</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {!hidden && <CartDropdown />}
  </HeaderContainer>
);

export default connect(mapStateToProps)(Header);
