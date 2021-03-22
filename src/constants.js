export const ROUTES = {
  defaultPage: '/',
  pancakeBuilder: '/pancake-builder',
  order: '/order',
  register: '/register',
  login: '/login',
  logout: '/logout',
  orderSuccess: '/order-success',
  myOrders: '/my-orders',
  myOrder: '/my-order/:rowID',
  myOrderForNavLink: '/my-order',
};

const apiDomain = 'http://rdr.dit-labs.com/api';
export const API_ENDPOINTS = {
  myOrder: `${apiDomain}/orders/my-order`,
  myOrders: `${apiDomain}/orders/my-orders?token=${localStorage.getItem('userToken')}`,
  submitOrder: `${apiDomain}/orders/save-order?token=${localStorage.getItem('userToken')}`,
  login: `${apiDomain}/auth/login`,
  logout: `${apiDomain}/auth/logout?token=${localStorage.getItem('userToken')}`,
  register: `${apiDomain}/auth/register`,
};
