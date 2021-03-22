import axios from 'axios';
import { API_ENDPOINTS } from '../../constants';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

function login(fields) {
  return axios
    .post(API_ENDPOINTS.login, fields)
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      return error.response;
    });
}

function register(fields) {
  return axios
    .post(API_ENDPOINTS.register, fields)
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      return error.response;
    });
}

function logout() {
  return axios
    .get(API_ENDPOINTS.logout)
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      return error.response;
    });
}

function submitOrder(fields) {
  return axios
    .post(API_ENDPOINTS.submitOrder, fields)
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      return error.response;
    });
}

function myOrders() {
  return axios
    .get(API_ENDPOINTS.myOrders)
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      return error.response;
    });
}

function myOrder(rowID) {
  return axios
    .get(`${API_ENDPOINTS.myOrder}/${rowID}?token=${localStorage.getItem('userToken')}`)
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      return error.response;
    });
}

export default {
  myOrder,
  myOrders,
  submitOrder,
  register,
  login,
  logout,
};
