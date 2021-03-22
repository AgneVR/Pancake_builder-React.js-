import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  PageNotFound,
  Order,
  Register,
  Login,
  PancakeBuilder,
  OrderSuccess,
  LogOut,
  MyOrders,
  MyOrder,
} from './pages';
import { Layout } from './components';
import store from './state';
import { ROUTES } from '../constants';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route path={ROUTES.myOrder} exact component={MyOrder} />
            <Route path={ROUTES.myOrders} exact component={MyOrders} />
            <Route path={ROUTES.defaultPage} exact component={PancakeBuilder} />
            <Route path={ROUTES.order} exact component={Order} />
            <Route path={ROUTES.register} exact component={Register} />
            <Route path={ROUTES.login} exact component={Login} />
            <Route path={ROUTES.logout} exact component={LogOut} />
            <Route path={ROUTES.orderSuccess} exact component={OrderSuccess} />
            <Redirect exact from={ROUTES.pancakeBuilder} to={ROUTES.defaultPage} />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
