import React from 'react';
import pancakeBuilder from '../../../pancakeBuilder';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../constants';
import api from '../../helpers/api';
import './index.scss';

function Order({ towerPancake, history }) {
  function TotalPrice(towerPancake) {
    let total = 0;
    towerPancake.forEach(ingridient => {
      total = total + ingridient.price;
    });
    return total;
  }

  function CartRow(towerPancake) {
    return towerPancake.map(({ name, price, id }, i) => {
      return (
        <div className='order--item' key={`${id}-${i}`}>
          <span>{name}</span>
          <span>{price}</span>
        </div>
      );
    });
  }

  const submitOrder = () => {
    if (
      localStorage.getItem('userToken') !== null &&
      localStorage.getItem('userToken') !== undefined &&
      localStorage.getItem('userToken') !== ''
    ) {
      let formData = new FormData();
      formData.append('total', TotalPrice(towerPancake));

      towerPancake.forEach(({ name, price }, i) => {
        formData.append(`items[${i}][title]`, name);
        formData.append(`items[${i}][price]`, price);
      });

      api.submitOrder(formData).then(function(response) {
        if (response.status === 200) {
          history.push(ROUTES.orderSuccess);
        } else {
          //setAlertMessage(response.data.error);
          //setAlertType('error');
          //setAlertShow(true);
        }
      });
    } else {
      history.push(ROUTES.login);
    }
  };

  return (
    <div className='order'>
      <div className='order--header'>
        <h4>Products</h4>
        <h4>Price</h4>
      </div>
      <div className='order--content'>{CartRow(towerPancake)}</div>
      <div className='order--total'>
        <span>Total: </span> {TotalPrice(towerPancake)}
      </div>
      <div className='order--link'>
        <button className='order--btn' onClick={submitOrder}>
          Submit order
        </button>

        <NavLink exact className='order--back' to={ROUTES.defaultPage}>
          Go back to Pancake tower
        </NavLink>
      </div>
    </div>
  );
}
const enhance = connect(state => ({
  towerPancake: pancakeBuilder.selectors.getTower(state),
}));

export default enhance(Order);
