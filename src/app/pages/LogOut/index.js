import React, { useEffect } from 'react';
import { ROUTES } from '../../../constants';
import api from '../../helpers/api';

function LogOut({ history }) {
  useEffect(() => {
    api.logout().then(function(response) {
      localStorage.clear();
      window.location = ROUTES.login;
    });
  });
  return <div className='container'> </div>;
}

export default LogOut;
