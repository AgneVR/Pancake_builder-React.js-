import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Register } from '../../pages';
import { ROUTES } from '../../../constants';
import './index.scss';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

function FullWidth() {
  return (
    <div>
      <Header />
      <main className='FullWidth'>
        <Switch>
          <Route path={ROUTES.login} exact component={Login} />
          <Route path={ROUTES.register} exact component={Register} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default FullWidth;
