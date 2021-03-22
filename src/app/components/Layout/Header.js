import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../constants';
import logo from '../../images/logopancake.png';

function Header() {
  function IsLogedIn() {
    if (
      localStorage.getItem('userToken') === undefined ||
      localStorage.getItem('userToken') === '' ||
      localStorage.getItem('userToken') === null
    ) {
      return (
        <React.Fragment>
          <NavLink exact className='Header--navigation-item' to={ROUTES.register}>
            Register
          </NavLink>
          <NavLink exact className='Header--navigation-item' to={ROUTES.login}>
            Login
          </NavLink>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <NavLink exact className='Header--navigation-item' to={ROUTES.myOrders}>
            My orders
          </NavLink>
          <NavLink exact className='Header--navigation-item' to={ROUTES.logout}>
            Logout
          </NavLink>
        </React.Fragment>
      );
    }
  }

  return (
    <header className='Header'>
      <nav className='Header--navigation'>
        <div className='Header--logo'>
          <img src={logo} alt='pancake logo' />
        </div>
        <NavLink exact className='Header--navigation-item' to={ROUTES.defaultPage}>
          Pancake Builder
        </NavLink>
        <NavLink exact className='Header--navigation-item' to={ROUTES.order}>
          Order
        </NavLink>
        {IsLogedIn()}
      </nav>
    </header>
  );
}

export default Header;
