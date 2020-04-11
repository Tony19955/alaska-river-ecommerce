import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

import { auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/alaska-icon.svg';
import { ReactComponent as Login } from '../../assets/login.svg';
import { ReactComponent as Logout } from '../../assets/logout.svg';
import { ReactComponent as Search } from '../../assets/search.svg';

import './header.scss';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    
    <div className="shop-btn-container">
      <Link className="option" to='/shop'>
        <button className="shop-btn">SHOP</button>
      </Link>
    </div>    
    
    <div className="logo-container">
      <Link to='/'>
        <Logo className="small-logo" />
        <span className="big-logo">ALASKA RIVER</span>
      </Link>
    </div>
    
    <div className="options">      
      <Link className="option" to='/shop'>
        <Search className="search-logo" />
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          <Logout className="logout-btn" />
        </div>
      ) : (
        <Link className="option" to='/signin'>
          <Login className="login-btn" />
        </Link>
      )}
      <CartIcon />
    </div>

    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);