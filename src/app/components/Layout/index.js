import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from '../../../constants';
import './index.scss';
import Header from './Header';
import Footer from './Footer';

function Main({ children }) {
  return <main className='Main'>{children}</main>;
}

function FullWidth({ children }) {
  return <main className='FullWidth'>{children}</main>;
}

function Layout(props) {
  return (
    <div clasname='Layout'>
      <Header />
      <Switch>
        <Route path={ROUTES.myOrder} exact render={() => <Main>{props.children}</Main>} />
        <Route path={ROUTES.myOrders} exact render={() => <Main>{props.children}</Main>} />
        <Route path={ROUTES.defaultPage} exact render={() => <Main>{props.children}</Main>} />
        <Route path={ROUTES.order} exact render={() => <Main>{props.children}</Main>} />
        <Route path={ROUTES.orderSuccess} exact render={() => <Main>{props.children}</Main>} />
        <Route path={ROUTES.logout} exact render={() => <Main>{props.children}</Main>} />
        <Route path={ROUTES.login} exact render={() => <FullWidth>{props.children}</FullWidth>} />
        <Route
          path={ROUTES.register}
          exact
          render={() => <FullWidth>{props.children}</FullWidth>}
        />
        <Route exact path={ROUTES.pancakeBuilder} render={() => <Main>{props.children}</Main>} />
        {/* <Route render={() => <FullWidth>{props.children}</FullWidth>} /> */}
      </Switch>
      <Footer />
    </div>
  );
}
export default Layout;
