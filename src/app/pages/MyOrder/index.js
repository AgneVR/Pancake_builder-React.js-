import React, { useState, useEffect } from 'react';
import api from '../../helpers/api';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../constants';
import './index.scss';

function MyOrder({ match }) {
  const [order, setOrder] = useState(null);
  const [showPage, setShowPage] = useState(false);
  useEffect(() => {
    api.myOrder(match.params.rowID).then(function(response) {
      if (response.status === 200) {
        setOrder(response.data.data);
        setShowPage(true);
      }
    });
  }, []);

  function Items() {
    if (order.items && order.items.length > 0) {
      return order.items.map((item, i) => {
        return (
          <div className='order-block--item' key={`item-${i}-${item.id}`}>
            <span> {item.title}</span>
            <span>price: €{item.price}</span>
          </div>
        );
      });
    }
  }

  function PageContent() {
    if (showPage === true) {
      return (
        <div className='order-block--content'>
          <div className='order-block--content-title'>
            <p>Order id: {order.id}</p>
            <p>Total: €{order.total}</p>
          </div>

          {Items()}
          <div className='link-position'>
            <NavLink className='order-link' exact to={ROUTES.myOrders}>
              Back
            </NavLink>
          </div>
        </div>
      );
    } else {
      return <p>Loading....</p>;
    }
  }

  return (
    <div className='order-block'>
      <div className='order-block--title'>
        <h4>My order</h4>
      </div>
      {PageContent()}
    </div>
  );
}

export default MyOrder;
