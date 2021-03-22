import React, { useState, useEffect } from 'react';
import api from '../../helpers/api';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../constants';
import './index.scss';

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [showPage, setShowPage] = useState(false);
  useEffect(() => {
    api.myOrders().then(function(response) {
      if (response.status === 200) {
        let newRows = response.data.rows;
        setOrders(newRows);
        setShowPage(true);
      }
    });
  }, []);

  function Orders() {
    return orders.map((order, i) => {
      return (
        <div className='orders-block--content' key={`order-${i}-${order.id}`}>
          <span>ID: {order.id}</span>
          <span>Created: {order.created_at}</span>
          <span>Total: €{order.total}</span>
          <NavLink className='view-order' exact to={`${ROUTES.myOrderForNavLink}/${order.id}`}>
            View Order
          </NavLink>
        </div>
      );
    });
  }

  function PageContent() {
    if (showPage === true) {
      if (orders && orders.length > 0) {
        return <React.Fragment>{Orders()}</React.Fragment>;
      } else {
        return <p>No orders</p>;
      }
    } else {
      return <p>Loading....</p>;
    }
  }

  return (
    <div className='orders-block'>
      <div className='orders-block--title'>
        <h4>My orders </h4>
      </div>
      {PageContent()}
    </div>
  );
}

export default MyOrders;
